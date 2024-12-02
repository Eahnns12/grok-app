import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { BotMessageSquare, KeyRound, Settings } from "lucide-react";
import icon from "@/assets/icon.svg";
import { Link, NavLink } from "react-router";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  const items = [
    {
      title: "Chat",
      url: "/chat",
      icon: BotMessageSquare,
    },
    {
      title: "Keys",
      url: "/key",
      icon: KeyRound,
      label: 0,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ];

  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar variant="floating" collapsible="icon" className="!h-full">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className="w-fit">
                <Link
                  to="/"
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
                >
                  <img src={icon} className="rounded-md" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild={true}>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{item.label}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export { Drawer };
