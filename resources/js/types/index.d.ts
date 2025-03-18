import type { Config } from "ziggy-js";

type User = {
	first_name: string;
	last_name: string;
	email: string;
};
export type PublicationTag = {
	id: string;
	name: string;
	pivot: {
		publication_id: string;
		tag_id: string;
	};
};

export type ArticleTag = {
	id: string;
	name: string;
	pivot: {
		article_id: string;
		tag_id: string;
	};
};

export type EventTag = {
	id: string;
	name: string;
	pivot: {
		event_id: string;
		tag_id: string;
	};
};

export type PublicationUser = {
	id: string;
	email: string;
	pivot: {
		publication_id: string;
		user_id: string;
	};
};

export type ArticleUser = {
	id: string;
	email: string;
	pivot: {
		article_id: string;
		user_id: string;
	};
};

export type EventUser = {
	id: string;
	email: string;
	pivot: {
		event_id: string;
		user_id: string;
	};
};

export type Publication = {
	id: string;
	title: string;
	abstract: string;
	slug: string;
	publication_file: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	tags: PublicationTag[];
	users: PublicationUser[];
};

export type Article = {
	id: string;
	title: string;
	slug: string;
	markdown_file: string;
	image_url: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	tags: ArticleTag[];
	users: ArticleUser[];
};

export type Event = {
	id: string;
	title: string;
	slug: string;
	markdown_file: string;
	image_url: string;
	created_at: string;
	updated_at: string;
	event_date: string;
	location: string;
	description: string;
	registration_link?: string;
	tags: EventTag[];
	users: EventUser[];
};

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
	auth: {
		user: User;
	};
	ziggy: Config & { location: string };
};
