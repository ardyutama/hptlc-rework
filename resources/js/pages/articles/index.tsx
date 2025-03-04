import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type React from "react";

const ArticlesPage = () => {
	return (
		<>
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
