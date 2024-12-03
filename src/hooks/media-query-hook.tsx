import { useEffect, useState } from 'react';

type state = boolean | undefined;

const MOBILE_BREAKPOINT = 640;

const useMediaQuery = (): {
  isMobile: boolean;
  isWindowControlsOverlay: boolean;
} => {
  const [isMobile, setIsMobile] = useState<state>(undefined);
  const [isWindowControlsOverlay, setIsWindowControlsOverlay] =
    useState<state>(undefined);

  function handleMobileBreakpoint() {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }

  function handleWindowControlsOverlay(event: MediaQueryListEvent) {
    setIsWindowControlsOverlay(event.matches);
  }

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    mql.addEventListener('change', handleMobileBreakpoint);

    return () => {
      mql.removeEventListener('change', handleMobileBreakpoint);
    };
  }, []);

  useEffect(() => {
    const mql = window.matchMedia('(display-mode: window-controls-overlay)');

    setIsWindowControlsOverlay(mql.matches);

    mql.addEventListener('change', handleWindowControlsOverlay);

    return () => {
      mql.removeEventListener('change', handleWindowControlsOverlay);
    };
  }, []);

  return {
    isMobile: !!isMobile,
    isWindowControlsOverlay: !!isWindowControlsOverlay,
  };
};

export { useMediaQuery };
