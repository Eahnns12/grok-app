import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isWindowControlsOverlay, setIsWindowControlsOverlay] =
    useState<boolean>();

  function handleWindowControlsOverlay(event: MediaQueryListEvent) {
    setIsWindowControlsOverlay(event.matches);
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      "(display-mode: window-controls-overlay)"
    );

    setIsWindowControlsOverlay(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", handleWindowControlsOverlay);

    return () => {
      mediaQueryList.removeEventListener("change", handleWindowControlsOverlay);
    };
  }, []);

  return { isWindowControlsOverlay };
};

export { useMediaQuery };
