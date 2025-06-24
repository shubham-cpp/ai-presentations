import { type ComponentProps, type FunctionComponent, Suspense } from "react";

// import type { Project, User } from "@/lib/db/schema";
import { getRecentProjects } from "@/actions/projects";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import NavFooter from "./nav-footer";
import NavMain from "./nav-main";
import RecentOpened, { RecentOpenedLoading } from "./recent-opened";

// type AppSidebarProps = {
//   recentProjects: Project[];
//   user: User;
// } & ComponentProps<typeof Sidebar>;
type AppSidebarProps = ComponentProps<typeof Sidebar>;

const AppSidebar: FunctionComponent<AppSidebarProps> = ({
  // recentProjects,
  // user,
  ...props
}) => {
  const recentProjects = getRecentProjects();
  return (
    <Sidebar
      collapsible="icon"
      className="max-w-[212px] bg-background-90"
      {...props}
    >
      <SidebarHeader className="pt-6 pb-0">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
            <Avatar className="size-10 rounded-full">
              <AvatarImage
                src="/ai-presentation-logo.png"
                alt="AI Presentation Logo"
              />
              <AvatarFallback className="text-secondary-foreground rounded-lg">
                AIP
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="truncate text-primary text-3xl font-semibold">
            AI Prez
          </span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent className="mt-10 gap-y-8">
        <NavMain />
        <Suspense fallback={<RecentOpenedLoading />}>
          <RecentOpened recentProjects={recentProjects} />
        </Suspense>
      </SidebarContent>
      <SidebarFooter>
        <Suspense>
          <NavFooter />
        </Suspense>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
