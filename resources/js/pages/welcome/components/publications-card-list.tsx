import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import type { Publication } from "@/types";
import type React from "react";

interface PublicationsCardListProps {
	data: Publication[];
}
export default function PublicationsCardList({
	data,
}: PublicationsCardListProps) {
	const MAX_CONTENT = 4;
	return (
		<>
			{data.slice(0, MAX_CONTENT).map((item: Publication) => (
				<ThumbnailCard
					key={item.id}
					tags={item.tags}
					slug={item.slug}
					title={item.title}
					date={item.published_at}
				/>
			))}
		</>
	);
}
