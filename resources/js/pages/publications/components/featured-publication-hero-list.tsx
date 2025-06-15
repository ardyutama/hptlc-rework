import FeaturedHeroItem from "@/components/shared/featured-hero/featured-hero-item";
import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import type { PageProps, Publication } from "@/types";
import { usePage } from "@inertiajs/react";
import type React from "react";

interface FeaturedPublicationHero extends PageProps {
	heroPublications: Publication[];
}
export default function FeaturedPublicationHeroList() {
	const { heroPublications } = usePage<FeaturedPublicationHero>().props;
	const MAX_FEATURED_PUBLICATION_HERO = 6;
	return (
		<>
			{heroPublications.slice(0, MAX_FEATURED_PUBLICATION_HERO).map((item) => (
				<FeaturedHeroItem key={item.id}>
					<ThumbnailCard
						id={item.id}
						tags={item.tags.map((tag) => tag.name)}
						hrefLink={`/publications/${item.slug}`}
						title={item.title}
						date={item.published_at}
						publicationPdfUrl={item.publication_file}
					/>
				</FeaturedHeroItem>
			))}
		</>
	);
}
