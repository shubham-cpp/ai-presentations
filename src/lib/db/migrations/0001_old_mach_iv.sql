CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slides` text NOT NULL,
	`outlines` text DEFAULT (json_array()) NOT NULL,
	`is_deleted` integer NOT NULL,
	`is_sellable` integer NOT NULL,
	`variant_id` text,
	`thumbnail` text,
	`theme` text NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
