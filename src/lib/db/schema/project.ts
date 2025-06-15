import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { nanoid } from "nanoid";

import { user } from "./auth";

export const project = sqliteTable("project", {
  id: text().primaryKey().$defaultFn(nanoid),
  title: text().notNull(),

  slides: text({ mode: "json" }).notNull(),
  outlines: text({ mode: "json" })
    .$type<string[]>()
    .default(sql`(json_array())`)
    .notNull(),
  isDeleted: integer({ mode: "boolean" }).default(false).notNull(),
  isSellable: integer({ mode: "boolean" }).default(false).notNull(),
  variantId: text(),
  thumbnail: text(),
  theme: text({ enum: ["light", "dark"] })
    .notNull()
    .default("dark"),

  userId: text()
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  createdAt: integer()
    .$defaultFn(() => /* @__PURE__ */ Date.now())
    .notNull(),
  updatedAt: integer()
    .$defaultFn(() => /* @__PURE__ */ Date.now())
    .notNull(),
});

export const userProjectPurchases = sqliteTable("user_project_purchases", {
  id: text().primaryKey().$defaultFn(nanoid),
  userId: text().notNull(),
  projectId: text().notNull(),
  purchasedAt: integer()
    .$defaultFn(() => /* @__PURE__ */ Date.now())
    .notNull(),
});
export const userProjectPurchasesRelations = relations(
  userProjectPurchases,
  ({ one }) => ({
    user: one(user, {
      fields: [userProjectPurchases.userId],
      references: [user.id],
    }),
    project: one(project, {
      fields: [userProjectPurchases.projectId],
      references: [project.id],
    }),
  }),
);

export const projectRelation = relations(project, ({ one, many }) => ({
  user: one(user, {
    fields: [project.userId],
    references: [user.id],
  }),
  purchasers: many(user),
}));

export type Project = typeof project.$inferSelect;
export type ProjectInsert = typeof project.$inferInsert;
