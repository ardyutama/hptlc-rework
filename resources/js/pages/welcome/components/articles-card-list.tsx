import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import { articleData } from "@/data/mock-data";
import type React from "react";

export default function ArticlesCardList() {
	const MAX_CONTENT = 4;

	return (
		<>
			{articleData.slice(0, MAX_CONTENT).map((item) => (
				<ThumbnailCard
					key={item.id}
					id={item.id}
					thumbnailImage={item.image_url}
					tags={item.tags.map((tag) => tag.name)}
					hrefLink={item.slug}
					title={item.title}
					date={item.published_at}
				/>
			))}
		</>
	);
}
