import FeaturedHeroItem from "@/components/domain/featured-hero/featured-hero-item";
import PublicationCard from "@/components/domain/publications/publication-card";
import type { PageProps, Publication } from "@/types";
import { usePage } from "@inertiajs/react";
import type React from "react";
import {CarouselItem} from "@/components/ui/carousel";

interface FeaturedPublicationHero extends PageProps {
	heroPublications: Publication[];
}
export default function FeaturedPublicationHeroList() {
	const { heroPublications } = usePage<FeaturedPublicationHero>().props;
	const MAX_FEATURED_PUBLICATION_HERO = 6;
	return (
		<>
			{heroPublications.slice(0, MAX_FEATURED_PUBLICATION_HERO).map((item) => (
                <CarouselItem
                    key={item.id}
                    // These classes are crucial for responsive items per view
                    className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
				<FeaturedHeroItem key={item.id}>
					<PublicationCard
						id={item.id}
						tags={item.tags.map((tag) => tag.name)}
						hrefLink={item.slug}
						title={item.title}
						date={item.published_at}
						publicationPdfUrl={item.publication_file}
					/>
				</FeaturedHeroItem>
                </CarouselItem>
			))}
		</>
	);
}
