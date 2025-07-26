import type { ARTICLE_STATUSES, GENDER } from "@/constants";
import type { Config } from "ziggy-js";

export interface User {
	id: string;
	email: string;
	role?: string;
	member?: Member | null;
}

export interface UserData {
	email: string;
	id: string;
}

export interface Member {
	id: string;
	first_name: string;
	last_name: string;
	university_name: string | null;
	phone_number: string | null;
	study_program_name: string | null;
	gender: GENDER | null;
	birth_date: string | null;
	joined_date: string | null;
	user_id: string;
	created_at: string;
	updated_at: string;
}

export interface UserProfileProps extends PageProps {
	member: MemberData;
	user: UserData;
}

interface ProfileFormData {
	first_name: string;
	last_name: string;
	university_name: string;
	phone_number: string;
	study_program_name: string;
	gender: string;
	birth_date: string | null;
}

export interface Tag {
	id: string;
	name: string;
	slug: string;
	created_at: string;
	updated_at: string;
}

export interface ArticleTag extends Tag {
	pivot?: {
		article_id: string;
		tag_id: string;
		created_at: string;
		updated_at: string;
	};
}

export interface PublicationTag extends Tag {
	pivot?: {
		publication_id: string;
		tag_id: string;
		created_at: string;
		updated_at: string;
	};
}

export interface PublicationUser extends User {
	pivot?: {
		publication_id: string;
		user_id: string;
		created_at: string;
		updated_at: string;
	};
}

export interface AuthorUser extends User {
	pivot?: {
		article_id: string;
		user_id: string;
		created_at: string;
		updated_at: string;
	};
}

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
	authors: PublicationUser[];
};

export interface Article {
	id: string;
	title: string;
	slug: string;
	markdown_path: string | null;
	thumbnail_image_url?: string | null;
	featured_image_url?: string | null;
	excerpt: string | null;
	reading_time: number;
	view_count: number;
	status: (typeof ARTICLE_STATUSES)[keyof typeof ARTICLE_STATUSES];
	published_at: string | null;
	deleted_at: string | null;
	created_at: string;
	updated_at: string;
	tags: ArticleTag[];
	authors: AuthorUser[];
}

export interface PaginationLink {
	url: string | null;
	label: string;
	active: boolean;
}

export interface PaginatedCollection<T> {
	data: T[];
	current_page: number;
	first_page_url: string | null;
	from: number | null;
	last_page: number;
	last_page_url: string | null;
	links: PaginationLink[];
	next_page_url: string | null;
	path: string;
	per_page: number;
	prev_page_url: string | null;
	to: number | null;
	total: number;
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
	auth: {
		user: User;
	};
	ziggy: Config & { location: string };
	flash: {
		type?: string;
		message?: string;
		info?: string;
	};
};
