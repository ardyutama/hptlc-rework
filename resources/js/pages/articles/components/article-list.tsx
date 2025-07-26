import ArticleCard from "@/components/domain/articles/article-card";
import { Button } from "@/components/ui/button";
import ContentLayout from "@/layouts/content-layout";
import type { Article, PageProps, PaginatedCollection } from "@/types";
import { usePage } from "@inertiajs/react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";

interface ArticleHeroProps extends PageProps {
	articles: PaginatedCollection<Article>;
}

export default function ArticleList() {
	const MAX_CONTENT = 8;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 145;
	const { articles } = usePage<ArticleHeroProps>().props;
	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<ContentLayout>
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-2xl tracking-tight">All Articles</h1>
				<Button variant="outline" size="sm" className="flex items-center gap-2">
					<SlidersHorizontal className="h-4 w-4" />
					Filter
				</Button>
			</div>

			<div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
				{articles.data.slice(0, MAX_CONTENT).map((item) => (
					<ArticleCard
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
			</div>

			<div className="flex items-center justify-center gap-4 pt-4">
				<Button
					variant="outline"
					size="icon"
					onClick={handlePrevPage}
					disabled={currentPage === 1}
					className="h-8 w-8 rounded-full"
				>
					<ChevronLeft className="h-4 w-4" />
					<span className="sr-only">Previous page</span>
				</Button>
				<span className="text-gray-500 text-sm">
					{currentPage} / {totalPages}
				</span>
				<Button
					variant="outline"
					size="icon"
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className="h-8 w-8 rounded-full"
				>
					<ChevronRight className="h-4 w-4" />
					<span className="sr-only">Next page</span>
				</Button>
			</div>
		</ContentLayout>
	);
}
