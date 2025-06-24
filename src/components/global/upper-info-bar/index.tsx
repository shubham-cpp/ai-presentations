import type { FunctionComponent, PropsWithChildren } from "react";

import { UploadIcon } from "lucide-react";

import type { User } from "@/lib/db/schema";

import ThemeToggle from "@/components/global/theme-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import NewProjectButton from "./new-project-button";
import UpperSearchBar from "./upper-search-bar";

type UpperInfoBarProps = PropsWithChildren<{
  user: User;
}>;

const UpperInfoBar: FunctionComponent<UpperInfoBarProps> = ({ children, user }) => {
  return (
    <header className="sticky top-0 z-[10] shrink-0 flex flex-wrap items-center gap-2 border-b bg-background px-4 justify-between">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div className="w-full max-w-[95%] flex items-center justify-between gap-4 flex-wrap">
        <UpperSearchBar />
        <ThemeToggle />
        <div className="flex flex-wrap gap-4 items-center justify-end">
          <Button className="rounded-lg font-semibold cursor-not-allowed" variant="secondary">
            <UploadIcon className="size-5" />
            Import
          </Button>
          <NewProjectButton user={user} />
        </div>
      </div>
      {/* {children} */}
    </header>
  );
};

export default UpperInfoBar;
