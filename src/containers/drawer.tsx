import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { BotMessageSquare, KeyRound, Settings } from "lucide-react";
import icon from "@/assets/icon.svg";
import { Link } from "react-router";

const Drawer = ({ children }: { children: React.ReactNode }) => {
  const { state } = useSidebar();
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
                  <img src={icon} className="rounded-md" alt="icon" />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
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
          <SidebarGroup>
            <SidebarGroupLabel>Chats</SidebarGroupLabel>
            <SidebarGroupContent>
              {state === "expanded" && (
                <SidebarMenu>
                  <SidebarMenuItem>
                    <div className="p-1">
                      <Card className="shadow-none">
                        <form>
                          <CardHeader className="p-4 pb-0">
                            <CardTitle className="text-sm">
                              Subscribe to our newsletter
                            </CardTitle>
                            <CardDescription>
                              Opt-in to receive updates and news about the
                              sidebar.
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="grid gap-2.5 p-4">
                            <SidebarInput type="email" placeholder="Email" />
                            <Button
                              className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none"
                              size="sm"
                            >
                              Subscribe
                            </Button>
                          </CardContent>
                        </form>
                      </Card>
                    </div>
                  </SidebarMenuItem>
                </SidebarMenu>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export { Drawer };
