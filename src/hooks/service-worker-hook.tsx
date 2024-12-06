import { useEffect, useState } from 'react';

const useServiceWorker = (
  scriptURL: string
): { isControllerChange: boolean } => {
  const [isControllerChange, setIsControllerChange] = useState<boolean>(false);

  useEffect(() => {
    const isLocalhost = window.location.hostname === 'localhost';
    const isHttps = window.location.protocol === 'https:';
    const isServiceWorkerAvailable = 'serviceWorker' in navigator;
    const isProtocolSupported = isLocalhost || isHttps;

    if (!isServiceWorkerAvailable || !isProtocolSupported) {
      return;
    }

    function handleLoad() {
      navigator.serviceWorker.register(scriptURL).catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    }

    function handleControllerChange() {
      setIsControllerChange(true);
    }

    window.addEventListener('load', handleLoad);
    navigator.serviceWorker.addEventListener(
      'controllerchange',
      handleControllerChange
    );

    return () => {
      window.removeEventListener('load', handleLoad);
      navigator.serviceWorker.removeEventListener(
        'controllerchange',
        handleControllerChange
      );
    };
  }, [scriptURL]);

  return { isControllerChange };
};

export { useServiceWorker };
