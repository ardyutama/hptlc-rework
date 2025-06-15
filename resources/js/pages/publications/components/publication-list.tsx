import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import { Button } from "@/components/ui/button";
import ContentLayout from "@/layouts/content-layout";
import type { PageProps, PaginatedCollection, Publication } from "@/types";
import { usePage } from "@inertiajs/react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import React, { useState } from "react";

interface PublicationHeroProps extends PageProps {
	publications: PaginatedCollection<Publication>;
}

export default function PublicationList() {
	const MAX_CONTENT = 8;
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 145;
	const { publications } = usePage<PublicationHeroProps>().props;

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
				<h1 className="font-bold text-2xl tracking-tight">All Publications</h1>
				<Button variant="outline" size="sm" className="flex items-center gap-2">
					<SlidersHorizontal className="h-4 w-4" />
					Filter
				</Button>
			</div>

			<div className="grid grid-cols-1 gap-8 pt-10">
				{publications.data.slice(0, MAX_CONTENT).map((item) => (
					<ThumbnailCard
						key={item.id}
						id={item.id}
						tags={item.tags.map((tag) => tag.name)}
						hrefLink={"/publications/show"}
						title={item.title}
						description={item.abstract}
						date={item.published_at}
						publicationPdfUrl={item.publication_file}
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
