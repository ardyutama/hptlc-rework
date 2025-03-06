type Publication = {
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
};

type Tag = {
	id: string;
	name: string;
	pivot: {
		publication_id: string;
		tag_id: string;
	};
};

type User = {
	id: string;
	email: string;
	pivot: {
		publication_id: string;
		user_id: string;
	};
};

// Example of an array of publications
export type PublicationsData = {
	data: Publication[];
};

export const publicationData: Publication[] = [
	{
		id: "01jj1xyz6ng2abcd1xnmjt",
		title: "HPTLC Study 1",
		abstract:
			"Abstract for HPTLC research 1. This study explores chromatography techniques.",
		slug: "hptlc-study-1",
		publication_file:
			"publications/2025/1/20/01jj1xyz6ng2abcd1xnmjt/hptlc-study-1.pdf",
		published_at: "2024-12-11 00:00:00",
		created_at: "2025-01-20T12:110:00.000000Z",
		updated_at: "2025-01-20T12:110:00.000000Z",
		tags: [
			{
				id: "01jj1tag6r3pqgk1xyzs0psebw1kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj1xyz6ng2abcd1xnmjt",
					tag_id: "01jj1tag6r3pqgk1xyzs0psebw1kw",
				},
			},
		],
		users: [
			{
				id: "01jg1usr3btx91mdczpx5t3g1v",
				email: "user1@example.com",
				pivot: {
					publication_id: "01jj1xyz6ng2abcd1xnmjt",
					user_id: "01jg1usr3btx91mdczpx5t3g1v",
				},
			},
		],
	},
	{
		id: "01jj2xyz6ng4abcd2xnmjt",
		title: "HPTLC Study 2",
		abstract:
			"Abstract for HPTLC research 2. This study explores chromatography techniques.",
		slug: "hptlc-study-2",
		publication_file:
			"publications/2025/1/20/01jj2xyz6ng4abcd2xnmjt/hptlc-study-2.pdf",
		published_at: "2024-12-12 00:00:00",
		created_at: "2025-01-20T12:120:00.000000Z",
		updated_at: "2025-01-20T12:120:00.000000Z",
		tags: [
			{
				id: "01jj2tag6r3pqgk2xyzs0psebw2kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj2xyz6ng4abcd2xnmjt",
					tag_id: "01jj2tag6r3pqgk2xyzs0psebw2kw",
				},
			},
		],
		users: [
			{
				id: "01jg2usr3btx92mdczpx5t3g2v",
				email: "user2@example.com",
				pivot: {
					publication_id: "01jj2xyz6ng4abcd2xnmjt",
					user_id: "01jg2usr3btx92mdczpx5t3g2v",
				},
			},
		],
	},
	{
		id: "01jj3xyz6ng6abcd3xnmjt",
		title: "HPTLC Study 3",
		abstract:
			"Abstract for HPTLC research 3. This study explores chromatography techniques.",
		slug: "hptlc-study-3",
		publication_file:
			"publications/2025/1/20/01jj3xyz6ng6abcd3xnmjt/hptlc-study-3.pdf",
		published_at: "2024-12-13 00:00:00",
		created_at: "2025-01-20T12:130:00.000000Z",
		updated_at: "2025-01-20T12:130:00.000000Z",
		tags: [
			{
				id: "01jj3tag6r3pqgk3xyzs0psebw3kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj3xyz6ng6abcd3xnmjt",
					tag_id: "01jj3tag6r3pqgk3xyzs0psebw3kw",
				},
			},
		],
		users: [
			{
				id: "01jg3usr3btx93mdczpx5t3g3v",
				email: "user3@example.com",
				pivot: {
					publication_id: "01jj3xyz6ng6abcd3xnmjt",
					user_id: "01jg3usr3btx93mdczpx5t3g3v",
				},
			},
		],
	},
	{
		id: "01jj4xyz6ng8abcd4xnmjt",
		title: "HPTLC Study 4",
		abstract:
			"Abstract for HPTLC research 4. This study explores chromatography techniques.",
		slug: "hptlc-study-4",
		publication_file:
			"publications/2025/1/20/01jj4xyz6ng8abcd4xnmjt/hptlc-study-4.pdf",
		published_at: "2024-12-14 00:00:00",
		created_at: "2025-01-20T12:140:00.000000Z",
		updated_at: "2025-01-20T12:140:00.000000Z",
		tags: [
			{
				id: "01jj4tag6r3pqgk4xyzs0psebw4kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj4xyz6ng8abcd4xnmjt",
					tag_id: "01jj4tag6r3pqgk4xyzs0psebw4kw",
				},
			},
		],
		users: [
			{
				id: "01jg4usr3btx94mdczpx5t3g4v",
				email: "user4@example.com",
				pivot: {
					publication_id: "01jj4xyz6ng8abcd4xnmjt",
					user_id: "01jg4usr3btx94mdczpx5t3g4v",
				},
			},
		],
	},
	{
		id: "01jj5xyz6ng10abcd5xnmjt",
		title: "HPTLC Study 5",
		abstract:
			"Abstract for HPTLC research 5. This study explores chromatography techniques.",
		slug: "hptlc-study-5",
		publication_file:
			"publications/2025/1/20/01jj5xyz6ng10abcd5xnmjt/hptlc-study-5.pdf",
		published_at: "2024-12-15 00:00:00",
		created_at: "2025-01-20T12:150:00.000000Z",
		updated_at: "2025-01-20T12:150:00.000000Z",
		tags: [
			{
				id: "01jj5tag6r3pqgk5xyzs0psebw5kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj5xyz6ng10abcd5xnmjt",
					tag_id: "01jj5tag6r3pqgk5xyzs0psebw5kw",
				},
			},
		],
		users: [
			{
				id: "01jg5usr3btx95mdczpx5t3g5v",
				email: "user5@example.com",
				pivot: {
					publication_id: "01jj5xyz6ng10abcd5xnmjt",
					user_id: "01jg5usr3btx95mdczpx5t3g5v",
				},
			},
		],
	},
	{
		id: "01jj6xyz6ng12abcd6xnmjt",
		title: "HPTLC Study 6",
		abstract:
			"Abstract for HPTLC research 6. This study explores chromatography techniques.",
		slug: "hptlc-study-6",
		publication_file:
			"publications/2025/1/20/01jj6xyz6ng12abcd6xnmjt/hptlc-study-6.pdf",
		published_at: "2024-12-16 00:00:00",
		created_at: "2025-01-20T12:160:00.000000Z",
		updated_at: "2025-01-20T12:160:00.000000Z",
		tags: [
			{
				id: "01jj6tag6r3pqgk6xyzs0psebw6kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj6xyz6ng12abcd6xnmjt",
					tag_id: "01jj6tag6r3pqgk6xyzs0psebw6kw",
				},
			},
		],
		users: [
			{
				id: "01jg6usr3btx96mdczpx5t3g6v",
				email: "user6@example.com",
				pivot: {
					publication_id: "01jj6xyz6ng12abcd6xnmjt",
					user_id: "01jg6usr3btx96mdczpx5t3g6v",
				},
			},
		],
	},
	{
		id: "01jj7xyz6ng14abcd7xnmjt",
		title: "HPTLC Study 7",
		abstract:
			"Abstract for HPTLC research 7. This study explores chromatography techniques.",
		slug: "hptlc-study-7",
		publication_file:
			"publications/2025/1/20/01jj7xyz6ng14abcd7xnmjt/hptlc-study-7.pdf",
		published_at: "2024-12-17 00:00:00",
		created_at: "2025-01-20T12:170:00.000000Z",
		updated_at: "2025-01-20T12:170:00.000000Z",
		tags: [
			{
				id: "01jj7tag6r3pqgk7xyzs0psebw7kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj7xyz6ng14abcd7xnmjt",
					tag_id: "01jj7tag6r3pqgk7xyzs0psebw7kw",
				},
			},
		],
		users: [
			{
				id: "01jg7usr3btx97mdczpx5t3g7v",
				email: "user7@example.com",
				pivot: {
					publication_id: "01jj7xyz6ng14abcd7xnmjt",
					user_id: "01jg7usr3btx97mdczpx5t3g7v",
				},
			},
		],
	},
	{
		id: "01jj8xyz6ng16abcd8xnmjt",
		title: "HPTLC Study 8",
		abstract:
			"Abstract for HPTLC research 8. This study explores chromatography techniques.",
		slug: "hptlc-study-8",
		publication_file:
			"publications/2025/1/20/01jj8xyz6ng16abcd8xnmjt/hptlc-study-8.pdf",
		published_at: "2024-12-18 00:00:00",
		created_at: "2025-01-20T12:180:00.000000Z",
		updated_at: "2025-01-20T12:180:00.000000Z",
		tags: [
			{
				id: "01jj8tag6r3pqgk8xyzs0psebw8kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj8xyz6ng16abcd8xnmjt",
					tag_id: "01jj8tag6r3pqgk8xyzs0psebw8kw",
				},
			},
		],
		users: [
			{
				id: "01jg8usr3btx98mdczpx5t3g8v",
				email: "user8@example.com",
				pivot: {
					publication_id: "01jj8xyz6ng16abcd8xnmjt",
					user_id: "01jg8usr3btx98mdczpx5t3g8v",
				},
			},
		],
	},
	{
		id: "01jj9xyz6ng18abcd9xnmjt",
		title: "HPTLC Study 9",
		abstract:
			"Abstract for HPTLC research 9. This study explores chromatography techniques.",
		slug: "hptlc-study-9",
		publication_file:
			"publications/2025/1/20/01jj9xyz6ng18abcd9xnmjt/hptlc-study-9.pdf",
		published_at: "2024-12-19 00:00:00",
		created_at: "2025-01-20T12:190:00.000000Z",
		updated_at: "2025-01-20T12:190:00.000000Z",
		tags: [
			{
				id: "01jj9tag6r3pqgk9xyzs0psebw9kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj9xyz6ng18abcd9xnmjt",
					tag_id: "01jj9tag6r3pqgk9xyzs0psebw9kw",
				},
			},
		],
		users: [
			{
				id: "01jg9usr3btx99mdczpx5t3g9v",
				email: "user9@example.com",
				pivot: {
					publication_id: "01jj9xyz6ng18abcd9xnmjt",
					user_id: "01jg9usr3btx99mdczpx5t3g9v",
				},
			},
		],
	},
	{
		id: "01jj10xyz6ng20abcd10xnmjt",
		title: "HPTLC Study 10",
		abstract:
			"Abstract for HPTLC research 10. This study explores chromatography techniques.",
		slug: "hptlc-study-10",
		publication_file:
			"publications/2025/1/20/01jj10xyz6ng20abcd10xnmjt/hptlc-study-10.pdf",
		published_at: "2024-12-10 00:00:00",
		created_at: "2025-01-20T12:200:00.000000Z",
		updated_at: "2025-01-20T12:200:00.000000Z",
		tags: [
			{
				id: "01jj10tag6r3pqgk10xyzs0psebw10kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj10xyz6ng20abcd10xnmjt",
					tag_id: "01jj10tag6r3pqgk10xyzs0psebw10kw",
				},
			},
		],
		users: [
			{
				id: "01jg10usr3btx910mdczpx5t3g10v",
				email: "user10@example.com",
				pivot: {
					publication_id: "01jj10xyz6ng20abcd10xnmjt",
					user_id: "01jg10usr3btx910mdczpx5t3g10v",
				},
			},
		],
	},
	{
		id: "01jj11xyz6ng22abcd11xnmjt",
		title: "HPTLC Study 11",
		abstract:
			"Abstract for HPTLC research 11. This study explores chromatography techniques.",
		slug: "hptlc-study-11",
		publication_file:
			"publications/2025/1/20/01jj11xyz6ng22abcd11xnmjt/hptlc-study-11.pdf",
		published_at: "2024-12-11 00:00:00",
		created_at: "2025-01-20T12:210:00.000000Z",
		updated_at: "2025-01-20T12:210:00.000000Z",
		tags: [
			{
				id: "01jj11tag6r3pqgk11xyzs0psebw11kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj11xyz6ng22abcd11xnmjt",
					tag_id: "01jj11tag6r3pqgk11xyzs0psebw11kw",
				},
			},
		],
		users: [
			{
				id: "01jg11usr3btx911mdczpx5t3g11v",
				email: "user11@example.com",
				pivot: {
					publication_id: "01jj11xyz6ng22abcd11xnmjt",
					user_id: "01jg11usr3btx911mdczpx5t3g11v",
				},
			},
		],
	},
	{
		id: "01jj12xyz6ng24abcd12xnmjt",
		title: "HPTLC Study 12",
		abstract:
			"Abstract for HPTLC research 12. This study explores chromatography techniques.",
		slug: "hptlc-study-12",
		publication_file:
			"publications/2025/1/20/01jj12xyz6ng24abcd12xnmjt/hptlc-study-12.pdf",
		published_at: "2024-12-12 00:00:00",
		created_at: "2025-01-20T12:220:00.000000Z",
		updated_at: "2025-01-20T12:220:00.000000Z",
		tags: [
			{
				id: "01jj12tag6r3pqgk12xyzs0psebw12kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj12xyz6ng24abcd12xnmjt",
					tag_id: "01jj12tag6r3pqgk12xyzs0psebw12kw",
				},
			},
		],
		users: [
			{
				id: "01jg12usr3btx912mdczpx5t3g12v",
				email: "user12@example.com",
				pivot: {
					publication_id: "01jj12xyz6ng24abcd12xnmjt",
					user_id: "01jg12usr3btx912mdczpx5t3g12v",
				},
			},
		],
	},
	{
		id: "01jj13xyz6ng26abcd13xnmjt",
		title: "HPTLC Study 13",
		abstract:
			"Abstract for HPTLC research 13. This study explores chromatography techniques.",
		slug: "hptlc-study-13",
		publication_file:
			"publications/2025/1/20/01jj13xyz6ng26abcd13xnmjt/hptlc-study-13.pdf",
		published_at: "2024-12-13 00:00:00",
		created_at: "2025-01-20T12:230:00.000000Z",
		updated_at: "2025-01-20T12:230:00.000000Z",
		tags: [
			{
				id: "01jj13tag6r3pqgk13xyzs0psebw13kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj13xyz6ng26abcd13xnmjt",
					tag_id: "01jj13tag6r3pqgk13xyzs0psebw13kw",
				},
			},
		],
		users: [
			{
				id: "01jg13usr3btx913mdczpx5t3g13v",
				email: "user13@example.com",
				pivot: {
					publication_id: "01jj13xyz6ng26abcd13xnmjt",
					user_id: "01jg13usr3btx913mdczpx5t3g13v",
				},
			},
		],
	},
	{
		id: "01jj14xyz6ng28abcd14xnmjt",
		title: "HPTLC Study 14",
		abstract:
			"Abstract for HPTLC research 14. This study explores chromatography techniques.",
		slug: "hptlc-study-14",
		publication_file:
			"publications/2025/1/20/01jj14xyz6ng28abcd14xnmjt/hptlc-study-14.pdf",
		published_at: "2024-12-14 00:00:00",
		created_at: "2025-01-20T12:240:00.000000Z",
		updated_at: "2025-01-20T12:240:00.000000Z",
		tags: [
			{
				id: "01jj14tag6r3pqgk14xyzs0psebw14kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj14xyz6ng28abcd14xnmjt",
					tag_id: "01jj14tag6r3pqgk14xyzs0psebw14kw",
				},
			},
		],
		users: [
			{
				id: "01jg14usr3btx914mdczpx5t3g14v",
				email: "user14@example.com",
				pivot: {
					publication_id: "01jj14xyz6ng28abcd14xnmjt",
					user_id: "01jg14usr3btx914mdczpx5t3g14v",
				},
			},
		],
	},
	{
		id: "01jj15xyz6ng30abcd15xnmjt",
		title: "HPTLC Study 15",
		abstract:
			"Abstract for HPTLC research 15. This study explores chromatography techniques.",
		slug: "hptlc-study-15",
		publication_file:
			"publications/2025/1/20/01jj15xyz6ng30abcd15xnmjt/hptlc-study-15.pdf",
		published_at: "2024-12-15 00:00:00",
		created_at: "2025-01-20T12:250:00.000000Z",
		updated_at: "2025-01-20T12:250:00.000000Z",
		tags: [
			{
				id: "01jj15tag6r3pqgk15xyzs0psebw15kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj15xyz6ng30abcd15xnmjt",
					tag_id: "01jj15tag6r3pqgk15xyzs0psebw15kw",
				},
			},
		],
		users: [
			{
				id: "01jg15usr3btx915mdczpx5t3g15v",
				email: "user15@example.com",
				pivot: {
					publication_id: "01jj15xyz6ng30abcd15xnmjt",
					user_id: "01jg15usr3btx915mdczpx5t3g15v",
				},
			},
		],
	},
	{
		id: "01jj16xyz6ng32abcd16xnmjt",
		title: "HPTLC Study 16",
		abstract:
			"Abstract for HPTLC research 16. This study explores chromatography techniques.",
		slug: "hptlc-study-16",
		publication_file:
			"publications/2025/1/20/01jj16xyz6ng32abcd16xnmjt/hptlc-study-16.pdf",
		published_at: "2024-12-16 00:00:00",
		created_at: "2025-01-20T12:260:00.000000Z",
		updated_at: "2025-01-20T12:260:00.000000Z",
		tags: [
			{
				id: "01jj16tag6r3pqgk16xyzs0psebw16kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj16xyz6ng32abcd16xnmjt",
					tag_id: "01jj16tag6r3pqgk16xyzs0psebw16kw",
				},
			},
		],
		users: [
			{
				id: "01jg16usr3btx916mdczpx5t3g16v",
				email: "user16@example.com",
				pivot: {
					publication_id: "01jj16xyz6ng32abcd16xnmjt",
					user_id: "01jg16usr3btx916mdczpx5t3g16v",
				},
			},
		],
	},
	{
		id: "01jj17xyz6ng34abcd17xnmjt",
		title: "HPTLC Study 17",
		abstract:
			"Abstract for HPTLC research 17. This study explores chromatography techniques.",
		slug: "hptlc-study-17",
		publication_file:
			"publications/2025/1/20/01jj17xyz6ng34abcd17xnmjt/hptlc-study-17.pdf",
		published_at: "2024-12-17 00:00:00",
		created_at: "2025-01-20T12:270:00.000000Z",
		updated_at: "2025-01-20T12:270:00.000000Z",
		tags: [
			{
				id: "01jj17tag6r3pqgk17xyzs0psebw17kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj17xyz6ng34abcd17xnmjt",
					tag_id: "01jj17tag6r3pqgk17xyzs0psebw17kw",
				},
			},
		],
		users: [
			{
				id: "01jg17usr3btx917mdczpx5t3g17v",
				email: "user17@example.com",
				pivot: {
					publication_id: "01jj17xyz6ng34abcd17xnmjt",
					user_id: "01jg17usr3btx917mdczpx5t3g17v",
				},
			},
		],
	},
	{
		id: "01jj18xyz6ng36abcd18xnmjt",
		title: "HPTLC Study 18",
		abstract:
			"Abstract for HPTLC research 18. This study explores chromatography techniques.",
		slug: "hptlc-study-18",
		publication_file:
			"publications/2025/1/20/01jj18xyz6ng36abcd18xnmjt/hptlc-study-18.pdf",
		published_at: "2024-12-18 00:00:00",
		created_at: "2025-01-20T12:280:00.000000Z",
		updated_at: "2025-01-20T12:280:00.000000Z",
		tags: [
			{
				id: "01jj18tag6r3pqgk18xyzs0psebw18kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj18xyz6ng36abcd18xnmjt",
					tag_id: "01jj18tag6r3pqgk18xyzs0psebw18kw",
				},
			},
		],
		users: [
			{
				id: "01jg18usr3btx918mdczpx5t3g18v",
				email: "user18@example.com",
				pivot: {
					publication_id: "01jj18xyz6ng36abcd18xnmjt",
					user_id: "01jg18usr3btx918mdczpx5t3g18v",
				},
			},
		],
	},
	{
		id: "01jj19xyz6ng38abcd19xnmjt",
		title: "HPTLC Study 19",
		abstract:
			"Abstract for HPTLC research 19. This study explores chromatography techniques.",
		slug: "hptlc-study-19",
		publication_file:
			"publications/2025/1/20/01jj19xyz6ng38abcd19xnmjt/hptlc-study-19.pdf",
		published_at: "2024-12-19 00:00:00",
		created_at: "2025-01-20T12:290:00.000000Z",
		updated_at: "2025-01-20T12:290:00.000000Z",
		tags: [
			{
				id: "01jj19tag6r3pqgk19xyzs0psebw19kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj19xyz6ng38abcd19xnmjt",
					tag_id: "01jj19tag6r3pqgk19xyzs0psebw19kw",
				},
			},
		],
		users: [
			{
				id: "01jg19usr3btx919mdczpx5t3g19v",
				email: "user19@example.com",
				pivot: {
					publication_id: "01jj19xyz6ng38abcd19xnmjt",
					user_id: "01jg19usr3btx919mdczpx5t3g19v",
				},
			},
		],
	},
	{
		id: "01jj20xyz6ng40abcd20xnmjt",
		title: "HPTLC Study 20",
		abstract:
			"Abstract for HPTLC research 20. This study explores chromatography techniques.",
		slug: "hptlc-study-20",
		publication_file:
			"publications/2025/1/20/01jj20xyz6ng40abcd20xnmjt/hptlc-study-20.pdf",
		published_at: "2024-12-10 00:00:00",
		created_at: "2025-01-20T12:300:00.000000Z",
		updated_at: "2025-01-20T12:300:00.000000Z",
		tags: [
			{
				id: "01jj20tag6r3pqgk20xyzs0psebw20kw",
				name: "High-Performance Thin Layer Chromatography",
				pivot: {
					publication_id: "01jj20xyz6ng40abcd20xnmjt",
					tag_id: "01jj20tag6r3pqgk20xyzs0psebw20kw",
				},
			},
		],
		users: [
			{
				id: "01jg20usr3btx920mdczpx5t3g20v",
				email: "user20@example.com",
				pivot: {
					publication_id: "01jj20xyz6ng40abcd20xnmjt",
					user_id: "01jg20usr3btx920mdczpx5t3g20v",
				},
			},
		],
	},
];
