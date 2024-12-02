import { Routes, Route, Outlet } from "react-router";
import { Layout } from "@/containers/layout";

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
        <Route path="/" element={<>home</>} />
        <Route path="/chat" element={<>chat</>} />
        <Route path="/key" element={<>keys</>} />
      </Route>
    </Routes>
  );
};

export { App };
