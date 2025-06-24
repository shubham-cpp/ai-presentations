"use client";

import type { FunctionComponent } from "react";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";

const NavFooterSignOutButton: FunctionComponent = () => {
  return (
    <DropdownMenuItem
      onClick={() => {
        authClient.signOut();
      }}
      role="button"
      tabIndex={-1}
      className="cursor-pointer"
    >
      Sign Out
    </DropdownMenuItem>
  );
};

export default NavFooterSignOutButton;
