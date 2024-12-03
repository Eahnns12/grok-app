import { SidebarTrigger } from '@/components/ui/sidebar';
import { useMediaQuery } from '@/hooks/media-query-hook';
import { TitleBar } from '@/containers/title-bar';
import { Drawer } from '@/containers/drawer';
import { ThemeController } from '@/containers/theme-controller';
import { Badge } from '@/components/ui/badge';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isWindowControlsOverlay } = useMediaQuery();

  return (
    <div className="flex h-dvh w-dvw flex-col">
      {isWindowControlsOverlay && (
        <TitleBar>
          <nav className="flex h-full w-full flex-row items-center justify-between px-1">
            <SidebarTrigger className="region-undragable" />

            <div className="region-undragable flex flex-row items-center gap-2">
              <Badge variant="outline" className="capitalize">
                {import.meta.env.MODE}
              </Badge>
              <ThemeController />
            </div>
          </nav>
        </TitleBar>
      )}

      <section
        className="mt-[env(titlebar-area-height)] flex-1 select-none duration-300 ease-linear"
        style={{ contain: 'strict' }}
      >
        <Drawer>
          <div className="flex h-full w-full flex-col">
            {!isWindowControlsOverlay && (
              <nav className="m-2 flex flex-row items-center justify-between">
                <SidebarTrigger />
                <ThemeController />
              </nav>
            )}
            <main className="m-2 flex-1 overflow-hidden">{children}</main>
          </div>
        </Drawer>
      </section>
    </div>
  );
};

export { Layout };
