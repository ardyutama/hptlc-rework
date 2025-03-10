import FeaturedHeroItem from "@/components/shared/featured-hero/featured-hero-item";
import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import { publicationData } from "@/data/mock-data";
import { usePage } from "@inertiajs/react";
import type React from "react";

export default function FeaturedPublicationHeroList() {
	const { publications } = usePage().props;
	const MAX_FEATURED_PUBLICATION_HERO = 6;

	return (
		<>
			{publicationData.slice(0, MAX_FEATURED_PUBLICATION_HERO).map((item) => (
				<FeaturedHeroItem key={item.id}>
					<ThumbnailCard
						tags={item.tags.map((tag) => tag.name)}
						slug={item.slug}
						title={item.title}
						date={item.published_at}
						downloadPath={item.publication_file}
					/>
				</FeaturedHeroItem>
			))}
		</>
	);
}
