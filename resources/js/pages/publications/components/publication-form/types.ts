import type { Publication, Tag } from "@/types";

export interface PublicationFormProps {
	publication?: Publication;
	tags: Tag[];
	isEdit?: boolean;
}

export type PublicationFormData = {
    title: string;
    abstract: string;
    publication_file: File | string | null;
    existing_tag_ids: string[];
    new_tag_names: string[];
    author_ids: string[];
    _method?: 'PUT';
};
