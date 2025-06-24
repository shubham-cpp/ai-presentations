import type { FunctionComponent, ReactNode } from "react";

import { redirect } from "next/navigation";

import AppSidebar from "@/components/global/app-sidebar";
import UpperInfoBar from "@/components/global/upper-info-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getSession } from "@/lib/db/controllers/users";

type ProtectedLayoutProps = {
  children: ReactNode;
};

const ProtectedLayout: FunctionComponent<ProtectedLayoutProps> = async ({
  children,
}) => {
  const session = await getSession();
  if (!session?.user)
    return redirect("/sign-in");

  return (
    <div className="w-full flex flex-col grow">
      <SidebarProvider className="min-h-[100%] grow">
        <AppSidebar />
        <SidebarInset>
          <UpperInfoBar user={session?.user}>{children}</UpperInfoBar>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default ProtectedLayout;
