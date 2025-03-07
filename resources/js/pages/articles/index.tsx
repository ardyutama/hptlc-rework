import FeaturedHero from "@/components/shared/featured-hero/featured-hero";
import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import FeaturedArticleHeroList from "@/pages/articles/components/featured-article-hero-list";
import type React from "react";

const ArticlesPage = () => {
	return (
		<>
			<FeaturedHero title={"Articles"}>
				<FeaturedArticleHeroList />
			</FeaturedHero>
			<ContentLayout className="min-h-svh">
				<div className="flex flex-1 flex-col">
					<div>Articles</div>
				</div>
			</ContentLayout>
		</>
	);
};

ArticlesPage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Articles" />
);

export default ArticlesPage;
