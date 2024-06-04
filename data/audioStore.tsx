import { Button } from "@/components/Button";
import { useState, useEffect, EventHandler } from "react";
import { create } from "zustand";

type GlobalAudioState = {
  audio: HTMLAudioElement | null;
  isPlaying: boolean;
  setAudio: (audio: HTMLAudioElement) => void;
  play: () => void;
  pause: () => void;
};

// Create a store to manage the audio state
export const useStoreAudio = create<GlobalAudioState>()((set, get) => ({
  audio: null,
  isPlaying: false,
  setAudio: (audio) => set({ audio }),
  play: () => {
    const { audio } = get();
    if (audio) {
      audio.play();
      set({ isPlaying: true });
    }
  },
  pause: () => {
    const { audio } = get();
    if (audio) {
      audio.pause();
      set({ isPlaying: false });
    }
  },
}));

// Component that uses the audio store
export const AudioPlayer = () => {
  const { audio, isPlaying, setAudio, play, pause } = useStoreAudio();

  // Function to initialize audio
  const initializeAudio = () => {
    const audioElement = new Audio("/assets/songs/menu.mp3");
    audioElement.loop = true;
    audioElement.volume = 0.1;
    setAudio(audioElement);
  };

  // Function to handle play/pause button click
  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  // Pause audio when the tab becomes hidden
  const handleVisibilityChange = (e: Event) => {
    if (document.visibilityState === "hidden") {
      pause();
    } else {
      play();
    }
  };

  useEffect(() => {
    initializeAudio();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    // Clean up audio and event listener when the component unmounts
    return () => {
      if (audio) {
        audio.pause();
        setAudio(null as any); // TypeScript needs explicit type assertion here
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>;
};
