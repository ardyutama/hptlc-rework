import type { Article } from "@/types";

export type ArticleFormProps = {
	article?: Article;
	markdownContent?: string;
	tags: { id: string; name: string }[];
	statuses: string[];
	isEdit?: boolean;
};

export type ArticleFormData = {
	title: string;
	excerpt: string;
	markdown_content: string;
	featured_image: File | null;
	existing_tag_ids: string[];
	new_tag_names: string[];
	status: string;
	remove_featured_image: boolean;
};

export type Tag = {
	id: string;
	name: string;
	slug?: string;
	created_at?: string;
	updated_at?: string;
};
