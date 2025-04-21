import FeaturedHero from "@/components/shared/featured-hero/featured-hero";
import { MainLayout } from "@/layouts/main-layout";
import ArticleList from "@/pages/articles/components/article-list";
import FeaturedArticleHeroList from "@/pages/articles/components/featured-article-hero-list";
import type React from "react";

const ArticlesPage = () => {
	return (
		<>
			<FeaturedHero title={"Articles"}>
				<FeaturedArticleHeroList />
			</FeaturedHero>
			<ArticleList />
		</>
	);
};

ArticlesPage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Articles" />
);

export default ArticlesPage;
