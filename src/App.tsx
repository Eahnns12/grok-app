import { Routes, Route, Outlet } from 'react-router';
import { Layout } from '@/containers/layout';
import { KeysPage } from './pages/keys-page';

const App = () => {
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
