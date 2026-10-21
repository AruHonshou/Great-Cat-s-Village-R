CREATE TABLE `donations` (
	`id` text PRIMARY KEY NOT NULL,
	`donor_key` text NOT NULL,
	`provider` text NOT NULL,
	`name` text NOT NULL,
	`username` text,
	`amount` integer NOT NULL,
	`currency` text NOT NULL,
	`public` integer NOT NULL,
	`refunded` integer DEFAULT 0 NOT NULL,
	`occurred_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `integration_events` (
	`provider` text PRIMARY KEY NOT NULL,
	`last_received` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `metrics` (
	`key` text PRIMARY KEY NOT NULL,
	`value` integer NOT NULL,
	`checked_at` integer NOT NULL
);
