import { SidebarTrigger } from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/media-query-hook";
import { TitleBar } from "@/containers/title-bar";
import { Drawer } from "@/containers/drawer";
import { ThemeController } from "@/containers/theme-controller";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isWindowControlsOverlay } = useMediaQuery();

  return (
    <div className="w-dvw h-dvh flex flex-col">
      {isWindowControlsOverlay && <TitleBar />}

      <section
        className="flex-1 mt-[env(titlebar-area-height)] select-none ease-linear duration-300"
        style={{ contain: "strict" }}
      >
        <Drawer>
          <div className="w-full h-full flex flex-col">
            <nav className="m-2 flex flex-row justify-between items-center">
              <SidebarTrigger />
              <ThemeController />
            </nav>
            <main className="flex-1 m-2">{children}</main>
          </div>
        </Drawer>
      </section>
    </div>
  );
};

export { Layout };
