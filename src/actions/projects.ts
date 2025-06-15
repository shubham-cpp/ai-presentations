"use server";

import { headers } from "next/headers";

import type { Project } from "@/lib/db/schema";
import type { CustomResponse } from "@/types";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function getProjects(): Promise<CustomResponse<Project[]>> {
  try {
    const session = await getSession();

    if (!session) {
      return { status: 403, error: "Not authenticated" };
    }
    const projects = await db.query.project.findMany({
      where: (project, { eq, and }) =>
        and(eq(project.isDeleted, false), eq(project.userId, session.user.id)),
      orderBy: (project, { desc }) => [desc(project.updatedAt)],
    });

    if (projects.length === 0) {
      return { status: 404, error: "No Projects found" };
    }

    return {
      status: 200,
      data: projects,
    };
  }
  catch (error) {
    console.error("ERROR: while `getProjects`\n", error);
    return { status: 500, error: "Something went wrong" };
  }
}
