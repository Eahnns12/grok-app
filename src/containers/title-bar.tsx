const TitleBar = () => {
  return (
    <section className="fixed top-[env(titlebar-area-y,0)] left-[env(titlebar-area-x,0)] h-[env(titlebar-area-height,100%)] w-[env(titlebar-area-width,100%)] region-dragable">
      <div className="w-full h-full flex justify-center items-center">
        Grok App
      </div>
    </section>
  );
};

export { TitleBar };
