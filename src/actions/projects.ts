"use server";

import type { Project } from "@/lib/db/schema";
import type { CustomResponse } from "@/types";

import { db } from "@/lib/db";
import { getSession } from "@/lib/db/controllers/users";

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

export async function getRecentProjects(): Promise<CustomResponse<Project[]>> {
  try {
    const session = await getSession();

    if (!session || !session?.user) {
      return { status: 401, error: "User is not authenticated" };
    }

    const projects = await db.query.project.findMany({
      where(project, { and, eq }) {
        return and(eq(project.isDeleted, false), eq(project.userId, session.user.id));
      },
      orderBy(project, { desc }) {
        return desc(project.updatedAt);
      },
      limit: 5,
    });

    if (projects.length === 0) {
      return {
        status: 204,
        error: "No recent projects available",
      };
    }

    return {
      status: 200,
      data: projects,
    };
  }
  catch (error) {
    console.error("ERROR: while fetching recent projects\n", error);

    return {
      status: 500,
      error: "Internal Server error! Please try again later.",
    };
  }
}
