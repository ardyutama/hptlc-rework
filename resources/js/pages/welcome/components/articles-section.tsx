import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import type React from "react";
import {usePage} from "@inertiajs/react";
import {Article, PageProps} from "@/types";

export default function ArticlesSection() {
	const MAX_CONTENT = 4;
    const { latestArticles } = usePage().props;

    console.log(latestArticles)
    return (
		<>
			{latestArticles.slice(0, MAX_CONTENT).map((item) => (
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
