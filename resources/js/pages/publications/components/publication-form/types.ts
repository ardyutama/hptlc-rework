import type { Publication, Tag } from "@/types";

export interface PublicationFormProps {
	publication?: Publication;
	tags: Tag[];
	isEdit?: false;
}

export type PublicationFormData = {
	title: string;
	abstract: string;
	publication_file: File | null;
	existing_tag_ids: string[];
	new_tag_names: string[];
};
