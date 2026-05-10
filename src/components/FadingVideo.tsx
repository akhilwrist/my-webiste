import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FADE_MS = 1000;

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const rafIdRef = useRef<number | null>(null);

  const fadeTo = (targetOpacity: number, duration: number) => {
    if (!videoRef.current) return;
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const video = videoRef.current;
    const startOpacity = parseFloat(video.style.opacity || '0');
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    rafIdRef.current = requestAnimationFrame(animate);
  };

  const handleLoaded = () => {
    if (!videoRef.current) return;
    // Don't restart fade if already started
    if (parseFloat(videoRef.current.style.opacity || '0') > 0) return;
    
    videoRef.current.play().catch(() => {});
    fadeTo(1, FADE_MS);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset opacity when source changes
    video.style.opacity = '0';

    if (src.includes('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          autoStartLoad: true
        });
        hls.loadSource(src);
        hls.attachMedia(video);
        hlsRef.current = hls;
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native HLS support (Safari)
        video.src = src;
      }
    } else {
      video.src = src;
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={{ ...style, opacity: 0 }}
      muted
      playsInline
      loop
      crossOrigin="anonymous"
      preload="auto"
      onLoadedData={handleLoaded}
      onLoadedMetadata={handleLoaded}
      onCanPlay={handleLoaded}
    />
  );
}
