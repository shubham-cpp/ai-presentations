import { betterAuth } from "better-auth";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";
import env from "./env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    },
    google: {
      clientId: env.AUTH_GOOGLE_ID,
      clientSecret: env.AUTH_GOOGLE_SECRET,
    },
  },
})
