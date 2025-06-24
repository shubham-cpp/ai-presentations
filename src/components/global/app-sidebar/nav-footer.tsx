import type { FunctionComponent } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getSession } from "@/lib/db/controllers/users";

import NavFooterUpgradeButton from "./nav-footer-upgrade-button";
import NavFooterUserButton from "./nav-footer-user-button";

const NavFooter: FunctionComponent = async () => {
  const session = await getSession();
  const user = session?.user;

  if (!session || !user)
    return null;

  return (
    <SidebarMenu>
      <div className="flex flex-col gap-y-6 items-start group-data-[collapsible=icon]:hidden">
        {!user.subscription
          ? (
              <div className="flex flex-col items-start p-2 pb-3 gap-4 bg-background/80">
                <div className="flex flex-col items-start gap-1">
                  <p className="text-base font-bold">
                    Get
                    <span className="ml-1 text-gradient-creative">Creative AI</span>
                  </p>
                  <span className="text-sm text-secondary-foreground">
                    Unlock all features including AI and more
                  </span>
                </div>
                <NavFooterUpgradeButton />
              </div>
            )
          : null}
      </div>
      <NavFooterUserButton user={user} />
    </SidebarMenu>
  );
};

export default NavFooter;
