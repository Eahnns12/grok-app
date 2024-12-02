import { useMediaQuery } from "@/hooks/media-query-hook";
import { TitleBar } from "@/containers/title-bar";

const App = () => {
  const { isWindowControlsOverlay } = useMediaQuery();

  return (
    <div className="w-dvw h-dvh overflow-hidden overscroll-y-contain flex flex-col">
      {isWindowControlsOverlay && <TitleBar />}

      <section className="flex-1 mt-[env(titlebar-area-height)] overflow-hidden">
        body
      </section>
    </div>
  );
};

export { App };
