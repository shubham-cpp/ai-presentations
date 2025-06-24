"use client";

import Link from "next/link";
import { type FunctionComponent, use } from "react";
import { toast } from "sonner";

import type { getRecentProjects } from "@/actions/projects";

import { buttonVariants } from "@/components/ui/button";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

type RecentOpenedProps = {
  recentProjects: ReturnType<typeof getRecentProjects>;
};

const RecentOpened: FunctionComponent<RecentOpenedProps> = ({ recentProjects: recentProjectsPromise }) => {
  const recentProjects = use(recentProjectsPromise);

  if (recentProjects.status < 200 || recentProjects.status > 299) {
    toast.error("Unable to get your Recent projects");
    return null;
  }

  if (recentProjects.status === 204 || !Array.isArray(recentProjects.data))
    return null;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
      <SidebarMenu>
        {recentProjects.data.map(item => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton asChild tooltip={item.title} className="hover:bg-primary-80">
              <Link href={`/presentations/${item.id}`} className={cn(buttonVariants({ variant: "ghost" }), "justify-start")}>
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ),
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export const RecentOpenedLoading: FunctionComponent = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Recently Opened</SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="LOADING">
            <Skeleton className="w-42 h-6" />
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="LOADING">
            <Skeleton className="w-42 h-6" />
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="LOADING">
            <Skeleton className="w-42 h-6" />
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="LOADING">
            <Skeleton className="w-42 h-6" />
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton asChild tooltip="LOADING">
            <Skeleton className="w-42 h-6" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>

  );
};

export default RecentOpened;
