import FeaturedHeroItem from "@/components/domain/featured-hero/featured-hero-item";
import ThumbnailCard from "@/components/domain/articles/thumbnail-card";
import type { Article, PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import type React from "react";

interface FeaturedArticleHero extends PageProps {
	heroArticles: Article[];
}

export default function FeaturedArticleHeroList() {
	const MAX_FEATURED_ARTICLE_HERO = 6;
	const { heroArticles } = usePage<FeaturedArticleHero>().props;
	return (
		<>
			{heroArticles.slice(0, MAX_FEATURED_ARTICLE_HERO).map((item) => (
				<FeaturedHeroItem key={item.id}>
					<ThumbnailCard
						key={item.id}
						id={item.id}
						thumbnail_image_url={item.thumbnail_image_url}
						featured_image_url={item.featured_image_url}
						tags={item.tags.map((tag) => tag.name)}
						hrefLink={item.slug}
						title={item.title}
						date={item.published_at}
					/>
				</FeaturedHeroItem>
			))}
		</>
	);
}
