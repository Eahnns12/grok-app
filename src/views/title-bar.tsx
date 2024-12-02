const TitleBar = () => {
  return (
    <section
      role="titlebar"
      className="fixed top-[env(titlebar-area-y,0)] left-[env(titlebar-area-x,0)] h-[env(titlebar-area-height,100%)] w-[env(titlebar-area-width,100%)] region-dragable"
    >
      title
    </section>
  );
};

export { TitleBar };
