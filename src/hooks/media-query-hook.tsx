import { useEffect, useState } from "react";

const useMediaQuery = (): { isWindowControlsOverlay: boolean } => {
  const [isWindowControlsOverlay, setIsWindowControlsOverlay] =
    useState<boolean>(false);

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
