import type { Article, Event, Publication } from "@/types";

export const publicationData: Publication[] = [
	{
		id: "01jj1xyz6ng2abcd1xnmjt",
		title: "HPTLC Study 1",
		abstract:
			"This study explores advancements in High-Performance Thin Layer Chromatography (HPTLC), a powerful analytical technique used for the separation and quantification of compounds in various samples. HPTLC provides enhanced resolution, improved reproducibility, and the ability to analyze multiple samples simultaneously. This study focuses on recent improvements in stationary phases, solvent systems, and detection methods, making HPTLC an essential tool in pharmaceuticals, forensics, food sciences, and environmental analysis. We present experimental findings, discuss analytical performance, and compare HPTLC with other chromatography techniques. Additionally, the study delves into automation, software integration, and emerging applications of HPTLC in personalized medicine and drug development. (Study 1)",
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

export const articleData: Article[] = [
	{
		id: "01art1xyz6ng2abcd1xnmjt",
		title: "Chromatography Insights 1",
		slug: "chromatography-insights-1",
		markdown_file:
			"articles/2025/1/20/01art1xyz6ng2abcd1xnmjt/chromatography-insights-1.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-1.jpg",
		published_at: "2024-11-11 00:00:00",
		created_at: "2025-01-20T12:110:00.000000Z",
		updated_at: "2025-01-20T12:110:00.000000Z",
		tags: [
			{
				id: "01tag16r3pqgk1xyzs0psebw1kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art1xyz6ng2abcd1xnmjt",
					tag_id: "01tag16r3pqgk1xyzs0psebw1kw",
				},
			},
		],
		users: [
			{
				id: "01usr13btx91mdczpx5t3g1v",
				email: "user1@example.com",
				pivot: {
					article_id: "01art1xyz6ng2abcd1xnmjt",
					user_id: "01usr13btx91mdczpx5t3g1v",
				},
			},
		],
	},
	{
		id: "01art2xyz6ng4abcd2xnmjt",
		title: "Chromatography Insights 2",
		slug: "chromatography-insights-2",
		markdown_file:
			"articles/2025/1/20/01art2xyz6ng4abcd2xnmjt/chromatography-insights-2.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-2.jpg",
		published_at: "2024-11-12 00:00:00",
		created_at: "2025-01-20T12:120:00.000000Z",
		updated_at: "2025-01-20T12:120:00.000000Z",
		tags: [
			{
				id: "01tag26r3pqgk2xyzs0psebw2kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art2xyz6ng4abcd2xnmjt",
					tag_id: "01tag26r3pqgk2xyzs0psebw2kw",
				},
			},
		],
		users: [
			{
				id: "01usr23btx92mdczpx5t3g2v",
				email: "user2@example.com",
				pivot: {
					article_id: "01art2xyz6ng4abcd2xnmjt",
					user_id: "01usr23btx92mdczpx5t3g2v",
				},
			},
		],
	},
	{
		id: "01art3xyz6ng6abcd3xnmjt",
		title: "Chromatography Insights 3",
		slug: "chromatography-insights-3",
		markdown_file:
			"articles/2025/1/20/01art3xyz6ng6abcd3xnmjt/chromatography-insights-3.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-3.jpg",
		published_at: "2024-11-13 00:00:00",
		created_at: "2025-01-20T12:130:00.000000Z",
		updated_at: "2025-01-20T12:130:00.000000Z",
		tags: [
			{
				id: "01tag36r3pqgk3xyzs0psebw3kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art3xyz6ng6abcd3xnmjt",
					tag_id: "01tag36r3pqgk3xyzs0psebw3kw",
				},
			},
		],
		users: [
			{
				id: "01usr33btx93mdczpx5t3g3v",
				email: "user3@example.com",
				pivot: {
					article_id: "01art3xyz6ng6abcd3xnmjt",
					user_id: "01usr33btx93mdczpx5t3g3v",
				},
			},
		],
	},
	{
		id: "01art4xyz6ng8abcd4xnmjt",
		title: "Chromatography Insights 4",
		slug: "chromatography-insights-4",
		markdown_file:
			"articles/2025/1/20/01art4xyz6ng8abcd4xnmjt/chromatography-insights-4.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-4.jpg",
		published_at: "2024-11-14 00:00:00",
		created_at: "2025-01-20T12:140:00.000000Z",
		updated_at: "2025-01-20T12:140:00.000000Z",
		tags: [
			{
				id: "01tag46r3pqgk4xyzs0psebw4kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art4xyz6ng8abcd4xnmjt",
					tag_id: "01tag46r3pqgk4xyzs0psebw4kw",
				},
			},
		],
		users: [
			{
				id: "01usr43btx94mdczpx5t3g4v",
				email: "user4@example.com",
				pivot: {
					article_id: "01art4xyz6ng8abcd4xnmjt",
					user_id: "01usr43btx94mdczpx5t3g4v",
				},
			},
		],
	},
	{
		id: "01art5xyz6ng10abcd5xnmjt",
		title: "Chromatography Insights 5",
		slug: "chromatography-insights-5",
		markdown_file:
			"articles/2025/1/20/01art5xyz6ng10abcd5xnmjt/chromatography-insights-5.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-5.jpg",
		published_at: "2024-11-15 00:00:00",
		created_at: "2025-01-20T12:150:00.000000Z",
		updated_at: "2025-01-20T12:150:00.000000Z",
		tags: [
			{
				id: "01tag56r3pqgk5xyzs0psebw5kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art5xyz6ng10abcd5xnmjt",
					tag_id: "01tag56r3pqgk5xyzs0psebw5kw",
				},
			},
		],
		users: [
			{
				id: "01usr53btx95mdczpx5t3g5v",
				email: "user5@example.com",
				pivot: {
					article_id: "01art5xyz6ng10abcd5xnmjt",
					user_id: "01usr53btx95mdczpx5t3g5v",
				},
			},
		],
	},
	{
		id: "01art6xyz6ng12abcd6xnmjt",
		title: "Chromatography Insights 6",
		slug: "chromatography-insights-6",
		markdown_file:
			"articles/2025/1/20/01art6xyz6ng12abcd6xnmjt/chromatography-insights-6.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-6.jpg",
		published_at: "2024-11-16 00:00:00",
		created_at: "2025-01-20T12:160:00.000000Z",
		updated_at: "2025-01-20T12:160:00.000000Z",
		tags: [
			{
				id: "01tag66r3pqgk6xyzs0psebw6kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art6xyz6ng12abcd6xnmjt",
					tag_id: "01tag66r3pqgk6xyzs0psebw6kw",
				},
			},
		],
		users: [
			{
				id: "01usr63btx96mdczpx5t3g6v",
				email: "user6@example.com",
				pivot: {
					article_id: "01art6xyz6ng12abcd6xnmjt",
					user_id: "01usr63btx96mdczpx5t3g6v",
				},
			},
		],
	},
	{
		id: "01art7xyz6ng14abcd7xnmjt",
		title: "Chromatography Insights 7",
		slug: "chromatography-insights-7",
		markdown_file:
			"articles/2025/1/20/01art7xyz6ng14abcd7xnmjt/chromatography-insights-7.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-7.jpg",
		published_at: "2024-11-17 00:00:00",
		created_at: "2025-01-20T12:170:00.000000Z",
		updated_at: "2025-01-20T12:170:00.000000Z",
		tags: [
			{
				id: "01tag76r3pqgk7xyzs0psebw7kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art7xyz6ng14abcd7xnmjt",
					tag_id: "01tag76r3pqgk7xyzs0psebw7kw",
				},
			},
		],
		users: [
			{
				id: "01usr73btx97mdczpx5t3g7v",
				email: "user7@example.com",
				pivot: {
					article_id: "01art7xyz6ng14abcd7xnmjt",
					user_id: "01usr73btx97mdczpx5t3g7v",
				},
			},
		],
	},
	{
		id: "01art8xyz6ng16abcd8xnmjt",
		title: "Chromatography Insights 8",
		slug: "chromatography-insights-8",
		markdown_file:
			"articles/2025/1/20/01art8xyz6ng16abcd8xnmjt/chromatography-insights-8.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-8.jpg",
		published_at: "2024-11-18 00:00:00",
		created_at: "2025-01-20T12:180:00.000000Z",
		updated_at: "2025-01-20T12:180:00.000000Z",
		tags: [
			{
				id: "01tag86r3pqgk8xyzs0psebw8kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art8xyz6ng16abcd8xnmjt",
					tag_id: "01tag86r3pqgk8xyzs0psebw8kw",
				},
			},
		],
		users: [
			{
				id: "01usr83btx98mdczpx5t3g8v",
				email: "user8@example.com",
				pivot: {
					article_id: "01art8xyz6ng16abcd8xnmjt",
					user_id: "01usr83btx98mdczpx5t3g8v",
				},
			},
		],
	},
	{
		id: "01art9xyz6ng18abcd9xnmjt",
		title: "Chromatography Insights 9",
		slug: "chromatography-insights-9",
		markdown_file:
			"articles/2025/1/20/01art9xyz6ng18abcd9xnmjt/chromatography-insights-9.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-9.jpg",
		published_at: "2024-11-19 00:00:00",
		created_at: "2025-01-20T12:190:00.000000Z",
		updated_at: "2025-01-20T12:190:00.000000Z",
		tags: [
			{
				id: "01tag96r3pqgk9xyzs0psebw9kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art9xyz6ng18abcd9xnmjt",
					tag_id: "01tag96r3pqgk9xyzs0psebw9kw",
				},
			},
		],
		users: [
			{
				id: "01usr93btx99mdczpx5t3g9v",
				email: "user9@example.com",
				pivot: {
					article_id: "01art9xyz6ng18abcd9xnmjt",
					user_id: "01usr93btx99mdczpx5t3g9v",
				},
			},
		],
	},
	{
		id: "01art10xyz6ng20abcd10xnmjt",
		title: "Chromatography Insights 10",
		slug: "chromatography-insights-10",
		markdown_file:
			"articles/2025/1/20/01art10xyz6ng20abcd10xnmjt/chromatography-insights-10.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-10.jpg",
		published_at: "2024-11-20 00:00:00",
		created_at: "2025-01-20T12:200:00.000000Z",
		updated_at: "2025-01-20T12:200:00.000000Z",
		tags: [
			{
				id: "01tag106r3pqgk10xyzs0psebw10kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art10xyz6ng20abcd10xnmjt",
					tag_id: "01tag106r3pqgk10xyzs0psebw10kw",
				},
			},
		],
		users: [
			{
				id: "01usr103btx910mdczpx5t3g10v",
				email: "user10@example.com",
				pivot: {
					article_id: "01art10xyz6ng20abcd10xnmjt",
					user_id: "01usr103btx910mdczpx5t3g10v",
				},
			},
		],
	},
	{
		id: "01art11xyz6ng22abcd11xnmjt",
		title: "Chromatography Insights 11",
		slug: "chromatography-insights-11",
		markdown_file:
			"articles/2025/1/20/01art11xyz6ng22abcd11xnmjt/chromatography-insights-11.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-11.jpg",
		published_at: "2024-11-21 00:00:00",
		created_at: "2025-01-20T12:210:00.000000Z",
		updated_at: "2025-01-20T12:210:00.000000Z",
		tags: [
			{
				id: "01tag116r3pqgk11xyzs0psebw11kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art11xyz6ng22abcd11xnmjt",
					tag_id: "01tag116r3pqgk11xyzs0psebw11kw",
				},
			},
		],
		users: [
			{
				id: "01usr113btx911mdczpx5t3g11v",
				email: "user11@example.com",
				pivot: {
					article_id: "01art11xyz6ng22abcd11xnmjt",
					user_id: "01usr113btx911mdczpx5t3g11v",
				},
			},
		],
	},
	{
		id: "01art12xyz6ng24abcd12xnmjt",
		title: "Chromatography Insights 12",
		slug: "chromatography-insights-12",
		markdown_file:
			"articles/2025/1/20/01art12xyz6ng24abcd12xnmjt/chromatography-insights-12.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-12.jpg",
		published_at: "2024-11-22 00:00:00",
		created_at: "2025-01-20T12:220:00.000000Z",
		updated_at: "2025-01-20T12:220:00.000000Z",
		tags: [
			{
				id: "01tag126r3pqgk12xyzs0psebw12kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art12xyz6ng24abcd12xnmjt",
					tag_id: "01tag126r3pqgk12xyzs0psebw12kw",
				},
			},
		],
		users: [
			{
				id: "01usr123btx912mdczpx5t3g12v",
				email: "user12@example.com",
				pivot: {
					article_id: "01art12xyz6ng24abcd12xnmjt",
					user_id: "01usr123btx912mdczpx5t3g12v",
				},
			},
		],
	},
	{
		id: "01art13xyz6ng26abcd13xnmjt",
		title: "Chromatography Insights 13",
		slug: "chromatography-insights-13",
		markdown_file:
			"articles/2025/1/20/01art13xyz6ng26abcd13xnmjt/chromatography-insights-13.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-13.jpg",
		published_at: "2024-11-23 00:00:00",
		created_at: "2025-01-20T12:230:00.000000Z",
		updated_at: "2025-01-20T12:230:00.000000Z",
		tags: [
			{
				id: "01tag136r3pqgk13xyzs0psebw13kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art13xyz6ng26abcd13xnmjt",
					tag_id: "01tag136r3pqgk13xyzs0psebw13kw",
				},
			},
		],
		users: [
			{
				id: "01usr133btx913mdczpx5t3g13v",
				email: "user13@example.com",
				pivot: {
					article_id: "01art13xyz6ng26abcd13xnmjt",
					user_id: "01usr133btx913mdczpx5t3g13v",
				},
			},
		],
	},
	{
		id: "01art14xyz6ng28abcd14xnmjt",
		title: "Chromatography Insights 14",
		slug: "chromatography-insights-14",
		markdown_file:
			"articles/2025/1/20/01art14xyz6ng28abcd14xnmjt/chromatography-insights-14.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-14.jpg",
		published_at: "2024-11-24 00:00:00",
		created_at: "2025-01-20T12:240:00.000000Z",
		updated_at: "2025-01-20T12:240:00.000000Z",
		tags: [
			{
				id: "01tag146r3pqgk14xyzs0psebw14kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art14xyz6ng28abcd14xnmjt",
					tag_id: "01tag146r3pqgk14xyzs0psebw14kw",
				},
			},
		],
		users: [
			{
				id: "01usr143btx914mdczpx5t3g14v",
				email: "user14@example.com",
				pivot: {
					article_id: "01art14xyz6ng28abcd14xnmjt",
					user_id: "01usr143btx914mdczpx5t3g14v",
				},
			},
		],
	},
	{
		id: "01art15xyz6ng30abcd15xnmjt",
		title: "Chromatography Insights 15",
		slug: "chromatography-insights-15",
		markdown_file:
			"articles/2025/1/20/01art15xyz6ng30abcd15xnmjt/chromatography-insights-15.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-15.jpg",
		published_at: "2024-11-25 00:00:00",
		created_at: "2025-01-20T12:250:00.000000Z",
		updated_at: "2025-01-20T12:250:00.000000Z",
		tags: [
			{
				id: "01tag156r3pqgk15xyzs0psebw15kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art15xyz6ng30abcd15xnmjt",
					tag_id: "01tag156r3pqgk15xyzs0psebw15kw",
				},
			},
		],
		users: [
			{
				id: "01usr153btx915mdczpx5t3g15v",
				email: "user15@example.com",
				pivot: {
					article_id: "01art15xyz6ng30abcd15xnmjt",
					user_id: "01usr153btx915mdczpx5t3g15v",
				},
			},
		],
	},
	{
		id: "01art16xyz6ng32abcd16xnmjt",
		title: "Chromatography Insights 16",
		slug: "chromatography-insights-16",
		markdown_file:
			"articles/2025/1/20/01art16xyz6ng32abcd16xnmjt/chromatography-insights-16.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-16.jpg",
		published_at: "2024-11-26 00:00:00",
		created_at: "2025-01-20T12:260:00.000000Z",
		updated_at: "2025-01-20T12:260:00.000000Z",
		tags: [
			{
				id: "01tag166r3pqgk16xyzs0psebw16kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art16xyz6ng32abcd16xnmjt",
					tag_id: "01tag166r3pqgk16xyzs0psebw16kw",
				},
			},
		],
		users: [
			{
				id: "01usr163btx916mdczpx5t3g16v",
				email: "user16@example.com",
				pivot: {
					article_id: "01art16xyz6ng32abcd16xnmjt",
					user_id: "01usr163btx916mdczpx5t3g16v",
				},
			},
		],
	},
	{
		id: "01art17xyz6ng34abcd17xnmjt",
		title: "Chromatography Insights 17",
		slug: "chromatography-insights-17",
		markdown_file:
			"articles/2025/1/20/01art17xyz6ng34abcd17xnmjt/chromatography-insights-17.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-17.jpg",
		published_at: "2024-11-27 00:00:00",
		created_at: "2025-01-20T12:270:00.000000Z",
		updated_at: "2025-01-20T12:270:00.000000Z",
		tags: [
			{
				id: "01tag176r3pqgk17xyzs0psebw17kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art17xyz6ng34abcd17xnmjt",
					tag_id: "01tag176r3pqgk17xyzs0psebw17kw",
				},
			},
		],
		users: [
			{
				id: "01usr173btx917mdczpx5t3g17v",
				email: "user17@example.com",
				pivot: {
					article_id: "01art17xyz6ng34abcd17xnmjt",
					user_id: "01usr173btx917mdczpx5t3g17v",
				},
			},
		],
	},
	{
		id: "01art18xyz6ng36abcd18xnmjt",
		title: "Chromatography Insights 18",
		slug: "chromatography-insights-18",
		markdown_file:
			"articles/2025/1/20/01art18xyz6ng36abcd18xnmjt/chromatography-insights-18.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-18.jpg",
		published_at: "2024-11-28 00:00:00",
		created_at: "2025-01-20T12:280:00.000000Z",
		updated_at: "2025-01-20T12:280:00.000000Z",
		tags: [
			{
				id: "01tag186r3pqgk18xyzs0psebw18kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art18xyz6ng36abcd18xnmjt",
					tag_id: "01tag186r3pqgk18xyzs0psebw18kw",
				},
			},
		],
		users: [
			{
				id: "01usr183btx918mdczpx5t3g18v",
				email: "user18@example.com",
				pivot: {
					article_id: "01art18xyz6ng36abcd18xnmjt",
					user_id: "01usr183btx918mdczpx5t3g18v",
				},
			},
		],
	},
	{
		id: "01art19xyz6ng38abcd19xnmjt",
		title: "Chromatography Insights 19",
		slug: "chromatography-insights-19",
		markdown_file:
			"articles/2025/1/20/01art19xyz6ng38abcd19xnmjt/chromatography-insights-19.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-19.jpg",
		published_at: "2024-11-29 00:00:00",
		created_at: "2025-01-20T12:290:00.000000Z",
		updated_at: "2025-01-20T12:290:00.000000Z",
		tags: [
			{
				id: "01tag196r3pqgk19xyzs0psebw19kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art19xyz6ng38abcd19xnmjt",
					tag_id: "01tag196r3pqgk19xyzs0psebw19kw",
				},
			},
		],
		users: [
			{
				id: "01usr193btx919mdczpx5t3g19v",
				email: "user19@example.com",
				pivot: {
					article_id: "01art19xyz6ng38abcd19xnmjt",
					user_id: "01usr193btx919mdczpx5t3g19v",
				},
			},
		],
	},
	{
		id: "01art20xyz6ng40abcd20xnmjt",
		title: "Chromatography Insights 20",
		slug: "chromatography-insights-20",
		markdown_file:
			"articles/2025/1/20/01art20xyz6ng40abcd20xnmjt/chromatography-insights-20.md",
		image_url:
			"https://example.com/images/articles/chromatography-insights-20.jpg",
		published_at: "2024-11-10 00:00:00",
		created_at: "2025-01-20T12:300:00.000000Z",
		updated_at: "2025-01-20T12:300:00.000000Z",
		tags: [
			{
				id: "01tag206r3pqgk20xyzs0psebw20kw",
				name: "Chromatography",
				pivot: {
					article_id: "01art20xyz6ng40abcd20xnmjt",
					tag_id: "01tag206r3pqgk20xyzs0psebw20kw",
				},
			},
		],
		users: [
			{
				id: "01usr203btx920mdczpx5t3g20v",
				email: "user20@example.com",
				pivot: {
					article_id: "01art20xyz6ng40abcd20xnmjt",
					user_id: "01usr203btx920mdczpx5t3g20v",
				},
			},
		],
	},
];

export const eventData: Event[] = [
	{
		id: "01evt1xyz6ng2abcd1xnmjt",
		title: "HPTLC Symposium 1",
		slug: "hptlc-symposium-1",
		markdown_file:
			"events/2025/1/20/01evt1xyz6ng2abcd1xnmjt/hptlc-symposium-1.md",
		image_url: "https://example.com/images/events/hptlc-symposium-1.jpg",
		created_at: "2025-01-20T12:110:00.000000Z",
		updated_at: "2025-01-20T12:110:00.000000Z",
		event_date: "2025-03-11 09:00:00",
		location: "Convention Center 1, City 1",
		description:
			"The HPTLC Symposium 1 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-1/register",
		tags: [
			{
				id: "01tag16r3pqgk1xyzs0psebw1kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt1xyz6ng2abcd1xnmjt",
					tag_id: "01tag16r3pqgk1xyzs0psebw1kw",
				},
			},
		],
		users: [
			{
				id: "01usr13btx91mdczpx5t3g1v",
				email: "user1@example.com",
				pivot: {
					event_id: "01evt1xyz6ng2abcd1xnmjt",
					user_id: "01usr13btx91mdczpx5t3g1v",
				},
			},
		],
	},
	{
		id: "01evt2xyz6ng4abcd2xnmjt",
		title: "HPTLC Symposium 2",
		slug: "hptlc-symposium-2",
		markdown_file:
			"events/2025/1/20/01evt2xyz6ng4abcd2xnmjt/hptlc-symposium-2.md",
		image_url: "https://example.com/images/events/hptlc-symposium-2.jpg",
		created_at: "2025-01-20T12:120:00.000000Z",
		updated_at: "2025-01-20T12:120:00.000000Z",
		event_date: "2025-03-12 09:00:00",
		location: "Convention Center 2, City 2",
		description:
			"The HPTLC Symposium 2 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-2/register",
		tags: [
			{
				id: "01tag26r3pqgk2xyzs0psebw2kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt2xyz6ng4abcd2xnmjt",
					tag_id: "01tag26r3pqgk2xyzs0psebw2kw",
				},
			},
		],
		users: [
			{
				id: "01usr23btx92mdczpx5t3g2v",
				email: "user2@example.com",
				pivot: {
					event_id: "01evt2xyz6ng4abcd2xnmjt",
					user_id: "01usr23btx92mdczpx5t3g2v",
				},
			},
		],
	},
	{
		id: "01evt3xyz6ng6abcd3xnmjt",
		title: "HPTLC Symposium 3",
		slug: "hptlc-symposium-3",
		markdown_file:
			"events/2025/1/20/01evt3xyz6ng6abcd3xnmjt/hptlc-symposium-3.md",
		image_url: "https://example.com/images/events/hptlc-symposium-3.jpg",
		created_at: "2025-01-20T12:130:00.000000Z",
		updated_at: "2025-01-20T12:130:00.000000Z",
		event_date: "2025-03-13 09:00:00",
		location: "Convention Center 3, City 3",
		description:
			"The HPTLC Symposium 3 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-3/register",
		tags: [
			{
				id: "01tag36r3pqgk3xyzs0psebw3kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt3xyz6ng6abcd3xnmjt",
					tag_id: "01tag36r3pqgk3xyzs0psebw3kw",
				},
			},
		],
		users: [
			{
				id: "01usr33btx93mdczpx5t3g3v",
				email: "user3@example.com",
				pivot: {
					event_id: "01evt3xyz6ng6abcd3xnmjt",
					user_id: "01usr33btx93mdczpx5t3g3v",
				},
			},
		],
	},
	{
		id: "01evt4xyz6ng8abcd4xnmjt",
		title: "HPTLC Symposium 4",
		slug: "hptlc-symposium-4",
		markdown_file:
			"events/2025/1/20/01evt4xyz6ng8abcd4xnmjt/hptlc-symposium-4.md",
		image_url: "https://example.com/images/events/hptlc-symposium-4.jpg",
		created_at: "2025-01-20T12:140:00.000000Z",
		updated_at: "2025-01-20T12:140:00.000000Z",
		event_date: "2025-03-14 09:00:00",
		location: "Convention Center 4, City 4",
		description:
			"The HPTLC Symposium 4 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-4/register",
		tags: [
			{
				id: "01tag46r3pqgk4xyzs0psebw4kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt4xyz6ng8abcd4xnmjt",
					tag_id: "01tag46r3pqgk4xyzs0psebw4kw",
				},
			},
		],
		users: [
			{
				id: "01usr43btx94mdczpx5t3g4v",
				email: "user4@example.com",
				pivot: {
					event_id: "01evt4xyz6ng8abcd4xnmjt",
					user_id: "01usr43btx94mdczpx5t3g4v",
				},
			},
		],
	},
	{
		id: "01evt5xyz6ng10abcd5xnmjt",
		title: "HPTLC Symposium 5",
		slug: "hptlc-symposium-5",
		markdown_file:
			"events/2025/1/20/01evt5xyz6ng10abcd5xnmjt/hptlc-symposium-5.md",
		image_url: "https://example.com/images/events/hptlc-symposium-5.jpg",
		created_at: "2025-01-20T12:150:00.000000Z",
		updated_at: "2025-01-20T12:150:00.000000Z",
		event_date: "2025-03-15 09:00:00",
		location: "Convention Center 5, City 5",
		description:
			"The HPTLC Symposium 5 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-5/register",
		tags: [
			{
				id: "01tag56r3pqgk5xyzs0psebw5kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt5xyz6ng10abcd5xnmjt",
					tag_id: "01tag56r3pqgk5xyzs0psebw5kw",
				},
			},
		],
		users: [
			{
				id: "01usr53btx95mdczpx5t3g5v",
				email: "user5@example.com",
				pivot: {
					event_id: "01evt5xyz6ng10abcd5xnmjt",
					user_id: "01usr53btx95mdczpx5t3g5v",
				},
			},
		],
	},
	{
		id: "01evt6xyz6ng12abcd6xnmjt",
		title: "HPTLC Symposium 6",
		slug: "hptlc-symposium-6",
		markdown_file:
			"events/2025/1/20/01evt6xyz6ng12abcd6xnmjt/hptlc-symposium-6.md",
		image_url: "https://example.com/images/events/hptlc-symposium-6.jpg",
		created_at: "2025-01-20T12:160:00.000000Z",
		updated_at: "2025-01-20T12:160:00.000000Z",
		event_date: "2025-03-16 09:00:00",
		location: "Convention Center 6, City 6",
		description:
			"The HPTLC Symposium 6 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-6/register",
		tags: [
			{
				id: "01tag66r3pqgk6xyzs0psebw6kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt6xyz6ng12abcd6xnmjt",
					tag_id: "01tag66r3pqgk6xyzs0psebw6kw",
				},
			},
		],
		users: [
			{
				id: "01usr63btx96mdczpx5t3g6v",
				email: "user6@example.com",
				pivot: {
					event_id: "01evt6xyz6ng12abcd6xnmjt",
					user_id: "01usr63btx96mdczpx5t3g6v",
				},
			},
		],
	},
	{
		id: "01evt7xyz6ng14abcd7xnmjt",
		title: "HPTLC Symposium 7",
		slug: "hptlc-symposium-7",
		markdown_file:
			"events/2025/1/20/01evt7xyz6ng14abcd7xnmjt/hptlc-symposium-7.md",
		image_url: "https://example.com/images/events/hptlc-symposium-7.jpg",
		created_at: "2025-01-20T12:170:00.000000Z",
		updated_at: "2025-01-20T12:170:00.000000Z",
		event_date: "2025-03-17 09:00:00",
		location: "Convention Center 7, City 7",
		description:
			"The HPTLC Symposium 7 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-7/register",
		tags: [
			{
				id: "01tag76r3pqgk7xyzs0psebw7kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt7xyz6ng14abcd7xnmjt",
					tag_id: "01tag76r3pqgk7xyzs0psebw7kw",
				},
			},
		],
		users: [
			{
				id: "01usr73btx97mdczpx5t3g7v",
				email: "user7@example.com",
				pivot: {
					event_id: "01evt7xyz6ng14abcd7xnmjt",
					user_id: "01usr73btx97mdczpx5t3g7v",
				},
			},
		],
	},
	{
		id: "01evt8xyz6ng16abcd8xnmjt",
		title: "HPTLC Symposium 8",
		slug: "hptlc-symposium-8",
		markdown_file:
			"events/2025/1/20/01evt8xyz6ng16abcd8xnmjt/hptlc-symposium-8.md",
		image_url: "https://example.com/images/events/hptlc-symposium-8.jpg",
		created_at: "2025-01-20T12:180:00.000000Z",
		updated_at: "2025-01-20T12:180:00.000000Z",
		event_date: "2025-03-18 09:00:00",
		location: "Convention Center 8, City 8",
		description:
			"The HPTLC Symposium 8 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-8/register",
		tags: [
			{
				id: "01tag86r3pqgk8xyzs0psebw8kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt8xyz6ng16abcd8xnmjt",
					tag_id: "01tag86r3pqgk8xyzs0psebw8kw",
				},
			},
		],
		users: [
			{
				id: "01usr83btx98mdczpx5t3g8v",
				email: "user8@example.com",
				pivot: {
					event_id: "01evt8xyz6ng16abcd8xnmjt",
					user_id: "01usr83btx98mdczpx5t3g8v",
				},
			},
		],
	},
	{
		id: "01evt9xyz6ng18abcd9xnmjt",
		title: "HPTLC Symposium 9",
		slug: "hptlc-symposium-9",
		markdown_file:
			"events/2025/1/20/01evt9xyz6ng18abcd9xnmjt/hptlc-symposium-9.md",
		image_url: "https://example.com/images/events/hptlc-symposium-9.jpg",
		created_at: "2025-01-20T12:190:00.000000Z",
		updated_at: "2025-01-20T12:190:00.000000Z",
		event_date: "2025-03-19 09:00:00",
		location: "Convention Center 9, City 9",
		description:
			"The HPTLC Symposium 9 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-9/register",
		tags: [
			{
				id: "01tag96r3pqgk9xyzs0psebw9kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt9xyz6ng18abcd9xnmjt",
					tag_id: "01tag96r3pqgk9xyzs0psebw9kw",
				},
			},
		],
		users: [
			{
				id: "01usr93btx99mdczpx5t3g9v",
				email: "user9@example.com",
				pivot: {
					event_id: "01evt9xyz6ng18abcd9xnmjt",
					user_id: "01usr93btx99mdczpx5t3g9v",
				},
			},
		],
	},
	{
		id: "01evt10xyz6ng20abcd10xnmjt",
		title: "HPTLC Symposium 10",
		slug: "hptlc-symposium-10",
		markdown_file:
			"events/2025/1/20/01evt10xyz6ng20abcd10xnmjt/hptlc-symposium-10.md",
		image_url: "https://example.com/images/events/hptlc-symposium-10.jpg",
		created_at: "2025-01-20T12:200:00.000000Z",
		updated_at: "2025-01-20T12:200:00.000000Z",
		event_date: "2025-03-20 09:00:00",
		location: "Convention Center 10, City 10",
		description:
			"The HPTLC Symposium 10 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-10/register",
		tags: [
			{
				id: "01tag106r3pqgk10xyzs0psebw10kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt10xyz6ng20abcd10xnmjt",
					tag_id: "01tag106r3pqgk10xyzs0psebw10kw",
				},
			},
		],
		users: [
			{
				id: "01usr103btx910mdczpx5t3g10v",
				email: "user10@example.com",
				pivot: {
					event_id: "01evt10xyz6ng20abcd10xnmjt",
					user_id: "01usr103btx910mdczpx5t3g10v",
				},
			},
		],
	},
	{
		id: "01evt11xyz6ng22abcd11xnmjt",
		title: "HPTLC Symposium 11",
		slug: "hptlc-symposium-11",
		markdown_file:
			"events/2025/1/20/01evt11xyz6ng22abcd11xnmjt/hptlc-symposium-11.md",
		image_url: "https://example.com/images/events/hptlc-symposium-11.jpg",
		created_at: "2025-01-20T12:210:00.000000Z",
		updated_at: "2025-01-20T12:210:00.000000Z",
		event_date: "2025-03-21 09:00:00",
		location: "Convention Center 11, City 11",
		description:
			"The HPTLC Symposium 11 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-11/register",
		tags: [
			{
				id: "01tag116r3pqgk11xyzs0psebw11kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt11xyz6ng22abcd11xnmjt",
					tag_id: "01tag116r3pqgk11xyzs0psebw11kw",
				},
			},
		],
		users: [
			{
				id: "01usr113btx911mdczpx5t3g11v",
				email: "user11@example.com",
				pivot: {
					event_id: "01evt11xyz6ng22abcd11xnmjt",
					user_id: "01usr113btx911mdczpx5t3g11v",
				},
			},
		],
	},
	{
		id: "01evt12xyz6ng24abcd12xnmjt",
		title: "HPTLC Symposium 12",
		slug: "hptlc-symposium-12",
		markdown_file:
			"events/2025/1/20/01evt12xyz6ng24abcd12xnmjt/hptlc-symposium-12.md",
		image_url: "https://example.com/images/events/hptlc-symposium-12.jpg",
		created_at: "2025-01-20T12:220:00.000000Z",
		updated_at: "2025-01-20T12:220:00.000000Z",
		event_date: "2025-03-22 09:00:00",
		location: "Convention Center 12, City 12",
		description:
			"The HPTLC Symposium 12 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-12/register",
		tags: [
			{
				id: "01tag126r3pqgk12xyzs0psebw12kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt12xyz6ng24abcd12xnmjt",
					tag_id: "01tag126r3pqgk12xyzs0psebw12kw",
				},
			},
		],
		users: [
			{
				id: "01usr123btx912mdczpx5t3g12v",
				email: "user12@example.com",
				pivot: {
					event_id: "01evt12xyz6ng24abcd12xnmjt",
					user_id: "01usr123btx912mdczpx5t3g12v",
				},
			},
		],
	},
	{
		id: "01evt13xyz6ng26abcd13xnmjt",
		title: "HPTLC Symposium 13",
		slug: "hptlc-symposium-13",
		markdown_file:
			"events/2025/1/20/01evt13xyz6ng26abcd13xnmjt/hptlc-symposium-13.md",
		image_url: "https://example.com/images/events/hptlc-symposium-13.jpg",
		created_at: "2025-01-20T12:230:00.000000Z",
		updated_at: "2025-01-20T12:230:00.000000Z",
		event_date: "2025-03-23 09:00:00",
		location: "Convention Center 13, City 13",
		description:
			"The HPTLC Symposium 13 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-13/register",
		tags: [
			{
				id: "01tag136r3pqgk13xyzs0psebw13kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt13xyz6ng26abcd13xnmjt",
					tag_id: "01tag136r3pqgk13xyzs0psebw13kw",
				},
			},
		],
		users: [
			{
				id: "01usr133btx913mdczpx5t3g13v",
				email: "user13@example.com",
				pivot: {
					event_id: "01evt13xyz6ng26abcd13xnmjt",
					user_id: "01usr133btx913mdczpx5t3g13v",
				},
			},
		],
	},
	{
		id: "01evt14xyz6ng28abcd14xnmjt",
		title: "HPTLC Symposium 14",
		slug: "hptlc-symposium-14",
		markdown_file:
			"events/2025/1/20/01evt14xyz6ng28abcd14xnmjt/hptlc-symposium-14.md",
		image_url: "https://example.com/images/events/hptlc-symposium-14.jpg",
		created_at: "2025-01-20T12:240:00.000000Z",
		updated_at: "2025-01-20T12:240:00.000000Z",
		event_date: "2025-03-24 09:00:00",
		location: "Convention Center 14, City 14",
		description:
			"The HPTLC Symposium 14 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-14/register",
		tags: [
			{
				id: "01tag146r3pqgk14xyzs0psebw14kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt14xyz6ng28abcd14xnmjt",
					tag_id: "01tag146r3pqgk14xyzs0psebw14kw",
				},
			},
		],
		users: [
			{
				id: "01usr143btx914mdczpx5t3g14v",
				email: "user14@example.com",
				pivot: {
					event_id: "01evt14xyz6ng28abcd14xnmjt",
					user_id: "01usr143btx914mdczpx5t3g14v",
				},
			},
		],
	},
	{
		id: "01evt15xyz6ng30abcd15xnmjt",
		title: "HPTLC Symposium 15",
		slug: "hptlc-symposium-15",
		markdown_file:
			"events/2025/1/20/01evt15xyz6ng30abcd15xnmjt/hptlc-symposium-15.md",
		image_url: "https://example.com/images/events/hptlc-symposium-15.jpg",
		created_at: "2025-01-20T12:250:00.000000Z",
		updated_at: "2025-01-20T12:250:00.000000Z",
		event_date: "2025-03-25 09:00:00",
		location: "Convention Center 15, City 15",
		description:
			"The HPTLC Symposium 15 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-15/register",
		tags: [
			{
				id: "01tag156r3pqgk15xyzs0psebw15kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt15xyz6ng30abcd15xnmjt",
					tag_id: "01tag156r3pqgk15xyzs0psebw15kw",
				},
			},
		],
		users: [
			{
				id: "01usr153btx915mdczpx5t3g15v",
				email: "user15@example.com",
				pivot: {
					event_id: "01evt15xyz6ng30abcd15xnmjt",
					user_id: "01usr153btx915mdczpx5t3g15v",
				},
			},
		],
	},
	{
		id: "01evt16xyz6ng32abcd16xnmjt",
		title: "HPTLC Symposium 16",
		slug: "hptlc-symposium-16",
		markdown_file:
			"events/2025/1/20/01evt16xyz6ng32abcd16xnmjt/hptlc-symposium-16.md",
		image_url: "https://example.com/images/events/hptlc-symposium-16.jpg",
		created_at: "2025-01-20T12:260:00.000000Z",
		updated_at: "2025-01-20T12:260:00.000000Z",
		event_date: "2025-03-26 09:00:00",
		location: "Convention Center 16, City 16",
		description:
			"The HPTLC Symposium 16 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-16/register",
		tags: [
			{
				id: "01tag166r3pqgk16xyzs0psebw16kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt16xyz6ng32abcd16xnmjt",
					tag_id: "01tag166r3pqgk16xyzs0psebw16kw",
				},
			},
		],
		users: [
			{
				id: "01usr163btx916mdczpx5t3g16v",
				email: "user16@example.com",
				pivot: {
					event_id: "01evt16xyz6ng32abcd16xnmjt",
					user_id: "01usr163btx916mdczpx5t3g16v",
				},
			},
		],
	},
	{
		id: "01evt17xyz6ng34abcd17xnmjt",
		title: "HPTLC Symposium 17",
		slug: "hptlc-symposium-17",
		markdown_file:
			"events/2025/1/20/01evt17xyz6ng34abcd17xnmjt/hptlc-symposium-17.md",
		image_url: "https://example.com/images/events/hptlc-symposium-17.jpg",
		created_at: "2025-01-20T12:270:00.000000Z",
		updated_at: "2025-01-20T12:270:00.000000Z",
		event_date: "2025-03-27 09:00:00",
		location: "Convention Center 17, City 17",
		description:
			"The HPTLC Symposium 17 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-17/register",
		tags: [
			{
				id: "01tag176r3pqgk17xyzs0psebw17kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt17xyz6ng34abcd17xnmjt",
					tag_id: "01tag176r3pqgk17xyzs0psebw17kw",
				},
			},
		],
		users: [
			{
				id: "01usr173btx917mdczpx5t3g17v",
				email: "user17@example.com",
				pivot: {
					event_id: "01evt17xyz6ng34abcd17xnmjt",
					user_id: "01usr173btx917mdczpx5t3g17v",
				},
			},
		],
	},
	{
		id: "01evt18xyz6ng36abcd18xnmjt",
		title: "HPTLC Symposium 18",
		slug: "hptlc-symposium-18",
		markdown_file:
			"events/2025/1/20/01evt18xyz6ng36abcd18xnmjt/hptlc-symposium-18.md",
		image_url: "https://example.com/images/events/hptlc-symposium-18.jpg",
		created_at: "2025-01-20T12:280:00.000000Z",
		updated_at: "2025-01-20T12:280:00.000000Z",
		event_date: "2025-03-28 09:00:00",
		location: "Convention Center 18, City 18",
		description:
			"The HPTLC Symposium 18 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-18/register",
		tags: [
			{
				id: "01tag186r3pqgk18xyzs0psebw18kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt18xyz6ng36abcd18xnmjt",
					tag_id: "01tag186r3pqgk18xyzs0psebw18kw",
				},
			},
		],
		users: [
			{
				id: "01usr183btx918mdczpx5t3g18v",
				email: "user18@example.com",
				pivot: {
					event_id: "01evt18xyz6ng36abcd18xnmjt",
					user_id: "01usr183btx918mdczpx5t3g18v",
				},
			},
		],
	},
	{
		id: "01evt19xyz6ng38abcd19xnmjt",
		title: "HPTLC Symposium 19",
		slug: "hptlc-symposium-19",
		markdown_file:
			"events/2025/1/20/01evt19xyz6ng38abcd19xnmjt/hptlc-symposium-19.md",
		image_url: "https://example.com/images/events/hptlc-symposium-19.jpg",
		created_at: "2025-01-20T12:290:00.000000Z",
		updated_at: "2025-01-20T12:290:00.000000Z",
		event_date: "2025-03-29 09:00:00",
		location: "Convention Center 19, City 19",
		description:
			"The HPTLC Symposium 19 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-19/register",
		tags: [
			{
				id: "01tag196r3pqgk19xyzs0psebw19kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt19xyz6ng38abcd19xnmjt",
					tag_id: "01tag196r3pqgk19xyzs0psebw19kw",
				},
			},
		],
		users: [
			{
				id: "01usr193btx919mdczpx5t3g19v",
				email: "user19@example.com",
				pivot: {
					event_id: "01evt19xyz6ng38abcd19xnmjt",
					user_id: "01usr193btx919mdczpx5t3g19v",
				},
			},
		],
	},
	{
		id: "01evt20xyz6ng40abcd20xnmjt",
		title: "HPTLC Symposium 20",
		slug: "hptlc-symposium-20",
		markdown_file:
			"events/2025/1/20/01evt20xyz6ng40abcd20xnmjt/hptlc-symposium-20.md",
		image_url: "https://example.com/images/events/hptlc-symposium-20.jpg",
		created_at: "2025-01-20T12:300:00.000000Z",
		updated_at: "2025-01-20T12:300:00.000000Z",
		event_date: "2025-03-10 09:00:00",
		location: "Convention Center 20, City 20",
		description:
			"The HPTLC Symposium 20 focuses on recent advances in thin-layer chromatography and its applications in pharmaceuticals, forensics, and food sciences.",
		registration_link: "https://example.com/events/hptlc-symposium-20/register",
		tags: [
			{
				id: "01tag206r3pqgk20xyzs0psebw20kw",
				name: "HPTLC",
				pivot: {
					event_id: "01evt20xyz6ng40abcd20xnmjt",
					tag_id: "01tag206r3pqgk20xyzs0psebw20kw",
				},
			},
		],
		users: [
			{
				id: "01usr203btx920mdczpx5t3g20v",
				email: "user20@example.com",
				pivot: {
					event_id: "01evt20xyz6ng40abcd20xnmjt",
					user_id: "01usr203btx920mdczpx5t3g20v",
				},
			},
		],
	},
];
