import { MainLayout } from "@/layouts/main-layout";
import type { PageProps } from "@/types";
import type React from "react";
import ArticleForm from "./components/article-form";

interface ArticleCreatePageProps extends PageProps {
	tags: { id: string; name: string }[];
	statuses: string[];
}

function ArticleCreatePage({ tags, statuses }: ArticleCreatePageProps) {
	return (
		<div className="px-4 py-6 sm:px-6 lg:px-8">
			<div className="mb-8">
				<h1 className="font-bold text-3xl tracking-tight">
					Create New Article
				</h1>
				<p className="mt-2 text-gray-500">
					Compose a new article using Markdown formatting.
				</p>
			</div>

			<ArticleForm tags={tags} statuses={statuses} isEdit={false} />
		</div>
	);
}

ArticleCreatePage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Create Articles" />
);

export default ArticleCreatePage;
