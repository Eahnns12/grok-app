import { Routes, Route, Outlet } from 'react-router';
import { Layout } from '@/containers/layout';
import { KeysPage } from '@/pages/keys-page';
import { useServiceWorker } from './hooks/service-worker-hook';
import { toast } from 'sonner';
import { useEffect } from 'react';

const App = () => {
  const { isControllerChange } = useServiceWorker(
    `${import.meta.env.BASE_URL}service-worker.js`
  );

  useEffect(() => {
    if (isControllerChange) {
      toast('New version', {
        description: 'The controller of current browsing context has changed.',
      });
    }
  }, [isControllerChange]);

  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/" element={<>index</>} />
        <Route path="/chat" element={<>chat</>} />
        <Route path="/keys" element={<KeysPage />} />
      </Route>
    </Routes>
  );
};

export { App };
