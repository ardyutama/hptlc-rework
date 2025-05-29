import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import type { Article, PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import type React from "react";

interface ArticlesPageProps extends PageProps {
	latestArticles: Article[];
}

export default function ArticlesSection() {
	const MAX_CONTENT = 4;
	const { latestArticles } = usePage<ArticlesPageProps>().props;

	return (
		<>
			{latestArticles.slice(0, MAX_CONTENT).map((item) => (
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
			))}
		</>
	);
}
