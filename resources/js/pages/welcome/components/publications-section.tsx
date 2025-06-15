import ThumbnailCard from "@/components/domain/articles/thumbnail-card";
import { publicationData } from "@/data/mock-data";
import type { Publication } from "@/types";
import type React from "react";

const MAX_CONTENT = 4;

export default function PublicationsSection() {
	return (
		<>
			{publicationData.slice(0, MAX_CONTENT).map((item: Publication) => (
				<ThumbnailCard
					key={item.id}
					id={item.id}
					tags={item.tags.map((tag) => tag.name)}
					hrefLink={"publications/show"}
					title={item.title}
					description={item.abstract}
					date={item.published_at}
					downloadPath={item.publication_file}
				/>
			))}
		</>
	);
}
