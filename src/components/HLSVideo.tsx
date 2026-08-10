import React, { useRef } from 'react';
import { useHLS } from '../hooks/useHLS';

interface HLSVideoProps {
  src?: string;
  className?: string;
  overlayClass?: string;
  flipVertical?: boolean;
  showBottomGradient?: boolean;
}

const DEFAULT_STREAM = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export const HLSVideo: React.FC<HLSVideoProps> = ({
  src = DEFAULT_STREAM,
  className = '',
  overlayClass = 'bg-black/25',
  flipVertical = false,
  showBottomGradient = true,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { hasError } = useHLS(videoRef, { src });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Background Video */}
      {!hasError ? (
        <video
          ref={videoRef}
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
            flipVertical ? 'scale-y-[-1]' : ''
          }`}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        /* Fallback dark mesh pattern if video stream fails */
        <div className="absolute inset-0 bg-[#0a0a0a] halftone-overlay opacity-50" />
      )}

      {/* Dark Overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Gradient Bottom Fade out */}
      {showBottomGradient && (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      )}
    </div>
  );
};
