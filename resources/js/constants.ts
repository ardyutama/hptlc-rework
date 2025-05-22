export const ARTICLE_STATUSES = {
	DRAFT: "draft",
	PUBLISHED: "published",
	ARCHIVED: "archived",
} as const;

export const GENDER = {
	MALE: "male",
	FEMALE: "female",
	OTHER: "other",
} as const;

export const FILE_TYPES = {
	MARKDOWN: "text/markdown",
	MARKDOWN_EXT: ".md",
	IMAGE_ALL: "image/*",
} as const;

export const STORAGE_BASE_URL = "/storage";
