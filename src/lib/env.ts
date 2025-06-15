import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "testing"]),

  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string().url(),

  TURSO_DATABASE_URL: z.string().url(),
  TURSO_AUTH_TOKEN: z.string(),

  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),

  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

export default EnvSchema.parse(process.env);
