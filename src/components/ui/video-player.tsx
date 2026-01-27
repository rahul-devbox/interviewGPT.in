"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  className?: string;
}

export function VideoPlayer({ src, poster, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <div
      className={cn(
        "relative group rounded-xl overflow-hidden bg-black/5 dark:bg-black/20",
        className
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
      />

      {/* Overlay with Play Button */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300",
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      >
        <button
          onClick={togglePlay}
          className="rounded-full bg-white/20 p-6 backdrop-blur-sm transition-transform hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 text-white fill-current" />
          ) : (
            <Play className="h-8 w-8 text-white fill-current ml-1" />
          )}
        </button>
      </div>

      {/* Controls Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-4 text-white">
          <div className="bg-white/30 h-1 flex-1 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <Maximize className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
