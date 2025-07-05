import { MainLayout } from "@/layouts/main-layout";
import ArticleList from "@/pages/articles/components/article-list";
import FeaturedArticleHeroList from "@/pages/articles/components/featured-article-hero-list";
import type React from "react";

const ArticlesPage = () => {
	return (
		<>
            <FeaturedArticleHeroList />
			<ArticleList />
		</>
	);
};

ArticlesPage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Articles" />
);

export default ArticlesPage;
