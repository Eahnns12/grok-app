import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/contexts/theme-context.tsx";
import { BrowserRouter } from "react-router";
import { App } from "@/app";
import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
