import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import type React from "react";

interface Articles {
	id: string;
	thumbnailImage: string;
	tag: string[];
	title: string;
	slug: string;
	date: Date;
}

interface ArticlesCardListProps {
	data: Articles[];
}

export default function ArticlesCardList({ data }: ArticlesCardListProps) {
	const MAX_CONTENT = 4;
	return (
		<>
			{data.slice(0, MAX_CONTENT).map((item: Articles) => (
				<ThumbnailCard
					key={item.id}
					thumbnailImage={item.thumbnailImage}
					topics={item.tag}
					slug={item.slug}
					title={item.title}
					date={item.date}
				/>
			))}
		</>
	);
}
