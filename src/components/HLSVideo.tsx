import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

interface HLSVideoProps {
  src?: string;
  className?: string;
}

const MUX_HLS_URL = 'https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8';

export const HLSVideo: React.FC<HLSVideoProps> = ({
  src = MUX_HLS_URL,
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls: Hls | null = null;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      video.play().catch(() => {});
    } else if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover opacity-100"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};
