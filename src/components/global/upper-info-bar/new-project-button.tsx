"use client";

import { CircleDollarSignIcon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FunctionComponent, useCallback } from "react";

import type { User } from "@/lib/db/schema";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type NewProjectButtonProps = {
  user: User;
};

const NewProjectButton: FunctionComponent<NewProjectButtonProps> = ({ user }) => {
  const router = useRouter();

  // TODO: Actually need to implement this
  const handleClick = useCallback(() => {}, []);

  if (!user.subscription) {
    return (
      <Tooltip delayDuration={300}>
        <TooltipTrigger>
          <Button size="lg" disabled>
            <PlusIcon className="size-5" />
            New Project
          </Button>
        </TooltipTrigger>
        <TooltipContent className="flex gap-1">
          <CircleDollarSignIcon className="size-4" />
          <p>Needs subscription to use this.</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Button size="lg" disabled={!user.subscription} onClick={handleClick}>
      <PlusIcon className="size-5" />
      New Project
    </Button>
  );
};

export default NewProjectButton;
