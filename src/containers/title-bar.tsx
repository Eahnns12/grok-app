import { Badge } from "@/components/ui/badge";

const TitleBar = () => {
  return (
    <section className="fixed top-[env(titlebar-area-y,0)] left-[env(titlebar-area-x,0)] h-[env(titlebar-area-height,100%)] w-[env(titlebar-area-width,100%)] region-dragable">
      <div className="w-full h-full flex items-center justify-end">
        <Badge variant="outline" className="capitalize">
          {import.meta.env.MODE}
        </Badge>
      </div>
    </section>
  );
};

export { TitleBar };
