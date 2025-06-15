import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text().primaryKey(),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: integer({ mode: "boolean" }).$defaultFn(() => false).notNull(),
  image: text(),
  createdAt: integer().$defaultFn(() => /* @__PURE__ */ Date.now()).notNull(),
  updatedAt: integer().$defaultFn(() => /* @__PURE__ */ Date.now()).notNull(),
});

export const session = sqliteTable("session", {
  id: text().primaryKey(),
  expiresAt: integer().notNull(),
  token: text().notNull().unique(),
  createdAt: integer().notNull(),
  updatedAt: integer().notNull(),
  ipAddress: text(),
  userAgent: text(),
  userId: text().notNull().references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text().primaryKey(),
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: text().notNull().references(() => user.id, { onDelete: "cascade" }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: integer(),
  refreshTokenExpiresAt: integer(),
  scope: text(),
  password: text(),
  createdAt: integer().notNull(),
  updatedAt: integer().notNull(),
});

export const verification = sqliteTable("verification", {
  id: text().primaryKey(),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: integer().notNull(),
  createdAt: integer().$defaultFn(() => /* @__PURE__ */ Date.now()),
  updatedAt: integer().$defaultFn(() => /* @__PURE__ */ Date.now()),
});

export type User = typeof user.$inferSelect;
export type UserInsert = typeof user.$inferInsert;

export type Session = typeof session.$inferSelect;
export type SessionInsert = typeof session.$inferInsert;

export type Account = typeof account.$inferSelect;
export type AccountInsert = typeof account.$inferInsert;
