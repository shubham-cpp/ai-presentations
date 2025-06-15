import type { FunctionComponent, ReactNode } from "react";

import { redirect } from "next/navigation";

import { getSession } from "@/actions/projects";
import { SidebarProvider } from "@/components/ui/sidebar";

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
    <div className="w-full min-h-screen">
      <SidebarProvider>{children}</SidebarProvider>
    </div>
  );
};

export default ProtectedLayout;
