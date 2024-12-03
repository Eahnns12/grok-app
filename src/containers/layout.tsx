import { SidebarTrigger } from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/media-query-hook";
import { TitleBar } from "@/containers/title-bar";
import { Drawer } from "@/containers/drawer";
import { ThemeController } from "@/containers/theme-controller";
import { Badge } from "@/components/ui/badge";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isWindowControlsOverlay } = useMediaQuery();

  return (
    <div className="w-dvw h-dvh flex flex-col">
      {isWindowControlsOverlay && (
        <TitleBar>
          <nav className="w-full h-full flex flex-row items-center px-1 justify-between">
            <SidebarTrigger className="region-undragable" />

            <div className="region-undragable flex flex-row gap-2 items-center">
              <Badge variant="outline" className="capitalize">
                {import.meta.env.MODE}
              </Badge>
              <ThemeController />
            </div>
          </nav>
        </TitleBar>
      )}

      <section
        className="flex-1 mt-[env(titlebar-area-height)] select-none ease-linear duration-300"
        style={{ contain: "strict" }}
      >
        <Drawer>
          <div className="w-full h-full flex flex-col">
            {!isWindowControlsOverlay && (
              <nav className="m-2 flex flex-row justify-between items-center">
                <SidebarTrigger />
                <ThemeController />
              </nav>
            )}
            <main className="flex-1 m-2">{children}</main>
          </div>
        </Drawer>
      </section>
    </div>
  );
};

export { Layout };
