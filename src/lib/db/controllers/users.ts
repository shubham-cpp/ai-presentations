import { headers } from "next/headers";
import { cache } from "react";

import { auth } from "@/lib/auth";

import { db } from "..";

export const getSession = cache(async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user)
    return null;

  const user = await db.query.user.findFirst({
    where: (u, { eq }) => eq(u.id, session.user.id),
  });

  if (!user)
    return null;

  // return { user };
  return {
    session: session.session,
    user,
  };
});
