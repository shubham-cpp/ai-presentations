CREATE TABLE `user_project_purchases` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`project_id` text NOT NULL,
	`purchased_at` integer NOT NULL
);
--> statement-breakpoint
DROP INDEX "session_token_unique";--> statement-breakpoint
DROP INDEX "user_email_unique";--> statement-breakpoint
ALTER TABLE `project` ALTER COLUMN "is_deleted" TO "is_deleted" integer NOT NULL DEFAULT false;--> statement-breakpoint
CREATE UNIQUE INDEX `session_token_unique` ON `session` (`token`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
ALTER TABLE `project` ALTER COLUMN "is_sellable" TO "is_sellable" integer NOT NULL DEFAULT false;--> statement-breakpoint
ALTER TABLE `project` ALTER COLUMN "theme" TO "theme" text NOT NULL DEFAULT 'dark';