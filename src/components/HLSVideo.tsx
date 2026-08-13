import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps {
  src?: string;
  className?: string;
  overlayClass?: string;
  flipVertical?: boolean;
  showBottomGradient?: boolean;
}

// Requested High-Quality CloudFront MP4 Background Stream
const CLOUDFRONT_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4';

export const HLSVideo: React.FC<HLSVideoProps> = ({
  src = CLOUDFRONT_VIDEO,
  className = '',
  overlayClass = 'bg-black/40',
  flipVertical = false,
  showBottomGradient = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hlsInstance: Hls | null = null;
    setHasError(false);

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const isHLS = src.includes('.m3u8');

    if (isHLS) {
      if (Hls.isSupported()) {
        hlsInstance = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90,
        });

        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);

        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });

        hlsInstance.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            setHasError(false);
            hlsInstance?.recoverMediaError();
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.play().catch(() => {});
      }
    } else {
      // Direct CloudFront MP4 stream
      video.src = src;
      video.load();
      video.play().catch(() => {});
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, [src]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Background Video */}
      {!hasError ? (
        <video
          ref={videoRef}
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ${
            flipVertical ? 'scale-y-[-1]' : ''
          }`}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        /* Fallback dark pattern */
        <div className="absolute inset-0 bg-[#0a0a0a] halftone-overlay opacity-60" />
      )}

      {/* Dark Overlay for Text Legibility */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Gradient Bottom Fade out */}
      {showBottomGradient && (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      )}
    </div>
  );
};
