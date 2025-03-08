import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import { publicationData } from "@/data/mock-data";
import type { Publication } from "@/types";
import type React from "react";

export default function PublicationsCardList() {
	const MAX_CONTENT = 4;

	return (
		<>
			{publicationData.slice(0, MAX_CONTENT).map((item: Publication) => (
				<ThumbnailCard
					key={item.id}
					tags={item.tags.map((tag) => tag.name)}
					slug={item.slug}
					title={item.title}
					date={item.published_at}
				/>
			))}
		</>
	);
}
