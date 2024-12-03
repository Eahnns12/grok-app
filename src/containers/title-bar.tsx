const TitleBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="region-dragable fixed left-[env(titlebar-area-x,0)] top-[env(titlebar-area-y,0)] h-[env(titlebar-area-height,100%)] w-[env(titlebar-area-width,100%)]">
      {children}
    </section>
  );
};

export { TitleBar };
