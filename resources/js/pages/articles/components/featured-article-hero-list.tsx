import FeaturedHeroItem from "@/components/shared/featured-hero/featured-hero-item";
import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import { articleData } from "@/data/mock-data";
import type React from "react";

export default function FeaturedArticleHeroList() {
	const MAX_FEATURED_ARTICLE_HERO = 6;

	return (
		<>
			{articleData.slice(0, MAX_FEATURED_ARTICLE_HERO).map((item) => (
				<FeaturedHeroItem key={item.id}>
					<ThumbnailCard
						tags={item.tags.map((tag) => tag.name)}
						thumbnailImage={item.image_url}
						slug={item.slug}
						title={item.title}
						date={item.published_at}
					/>
				</FeaturedHeroItem>
			))}
		</>
	);
}
