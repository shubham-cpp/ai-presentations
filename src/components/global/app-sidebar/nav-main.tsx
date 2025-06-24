"use client";

import type { FunctionComponent } from "react";

import {
  BoltIcon,
  HomeIcon,
  TablePropertiesIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type NavMainProps = {
  items: {
    title: string;
    href: string;
    icon: FunctionComponent<any>;

    isActive?: boolean;
    items?: { title: string; url: string }[];
  }[];
};

const navMainItems: NavMainProps["items"] = [
  { title: "Home", href: "/dashboard", icon: HomeIcon },
  { title: "Templates", href: "/templates", icon: TablePropertiesIcon },
  { title: "Trash", href: "/trash", icon: Trash2Icon },
  { title: "Settings", href: "/settings", icon: BoltIcon },
];

const NavMain: FunctionComponent = () => {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMainItems.map(({ icon: Icon, ...item }) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={cn({
                "bg-muted": pathname.includes(item.href),
              })}
            >
              <Link
                href={item.href}
                className={cn("text-lg", {
                  "font-bold": pathname.includes(item.href),
                })}
              >
                <Icon className="text-lg" />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
