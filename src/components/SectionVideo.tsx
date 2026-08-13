import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';

interface SectionVideoProps {
  src: string;
  className?: string;
  overlayClass?: string;
}

export const SectionVideo: React.FC<SectionVideoProps> = ({
  src,
  className = '',
  overlayClass = 'bg-black/45',
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
          backBufferLength: 60,
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
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}>
      {!hasError ? (
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 opacity-80"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="absolute inset-0 bg-[#0a0a0a] halftone-overlay opacity-60" />
      )}

      {/* Glass Overlay for Contrast */}
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
};
