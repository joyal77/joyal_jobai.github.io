import { useEffect, useState, RefObject } from 'react';
import Hls from 'hls.js';

interface UseHLSOptions {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export function useHLS(
  videoRef: RefObject<HTMLVideoElement | null>,
  { src, autoPlay = true, muted = true, loop = true }: UseHLSOptions
) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hlsInstance: Hls | null = null;

    video.muted = muted;
    video.loop = loop;
    video.playsInline = true;

    if (Hls.isSupported()) {
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 90,
      });

      hlsInstance.loadSource(src);
      hlsInstance.attachMedia(video);

      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoaded(true);
        if (autoPlay) {
          video.play().catch(() => {
            // Browser autoplay restrictions fallback
            setHasError(false);
          });
        }
      });

      hlsInstance.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hlsInstance?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hlsInstance?.recoverMediaError();
              break;
            default:
              setHasError(true);
              hlsInstance?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
      setIsLoaded(true);
      if (autoPlay) {
        video.play().catch(() => {});
      }
    } else {
      setHasError(true);
    }

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, [videoRef, src, autoPlay, muted, loop]);

  return { isLoaded, hasError };
}
