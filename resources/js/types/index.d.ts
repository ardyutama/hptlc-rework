import type { Config } from "ziggy-js";

//
// export interface User {
//     id: number;
//     name: string;
//     email: string;
// }

export interface Publication {
	id: string;
	title: string;
	abstract: string;
	slug: string;
	publication_file: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	tags: Tag[];
	users: User[];
}

export interface Tag {
	id: string;
	name: string;
	pivot: {
		publication_id: string;
		tag_id: string;
	};
}

export interface User {
	id: string;
	email: string;
	pivot: {
		publication_id: string;
		user_id: string;
	};
}

export type PageProps<
	T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
	// auth: {
	//     user: User;
	// };
	ziggy: Config & { location: string };
};
