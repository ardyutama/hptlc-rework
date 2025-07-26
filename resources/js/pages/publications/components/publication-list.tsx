import TagFilter from "@/components/common/tag-filter";
import PublicationCard from "@/components/domain/publications/publication-card";
import { Button } from "@/components/ui/button";
import ContentLayout from "@/layouts/content-layout";
import type { PageProps, PaginatedCollection, Publication, Tag } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PublicationHeroProps extends PageProps {
	publications: PaginatedCollection<Publication>;
	tags: Tag[];
	filters: {
		search?: string;
		tag?: string[];
		author?: string;
		from_date?: string;
		to_date?: string;
		sort_by?: string;
		sort_direction?: string;
	};
}

export default function PublicationList() {
	const { publications, tags, filters } = usePage<PublicationHeroProps>().props;
	console.log("Publications:", publications);
	const { current_page, last_page, links: paginationLinks } = publications;

	const handleTagFilterChange = (selectedTagIds: string[]) => {
		router.get(
			route("publications.index"),
			{
				...filters,
				tag: selectedTagIds.length > 0 ? selectedTagIds : undefined,
				page: 1,
			},
			{
				preserveState: true,
				preserveScroll: true,
				replace: true,
			},
		);
	};

	const handlePaginationClick = (url: string | null) => {
		if (url) {
			router.get(url, {}, { preserveScroll: true, preserveState: true });
		}
	};

	return (
		<ContentLayout>
			<div className="mb-8 flex items-center justify-between">
				<h1 className="font-bold text-3xl text-neutral-800 tracking-tight dark:text-neutral-200">
					All Publications
				</h1>
			</div>

			<div className="mb-8">
				<TagFilter
					availableTags={tags} // All tags from the backend
					initialSelectedTagIds={filters.tag || []} // Currently selected tags from the URL
					onTagsChange={handleTagFilterChange} // Callback when selected tags change
				/>
			</div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{publications.data.length > 0 ? (
					publications.data.map((item) => (
						<PublicationCard
							key={item.id}
							id={item.id}
							tags={item.tags.map((tag) => tag.name)}
							hrefLink={item.slug}
							title={item.title}
							description={item.abstract}
							date={item.published_at}
							publicationPdfUrl={item.publication_file}
						/>
					))
				) : (
					<p className="col-span-full py-10 text-center text-gray-500">
						No publications found matching your criteria.
					</p>
				)}
			</div>

			{publications.data.length > 0 && ( // Only show pagination if there are publications
				<div className="flex items-center justify-center gap-4 pt-12 pb-8">
					<Button
						variant="outline"
						size="icon"
						onClick={() =>
							handlePaginationClick(
								paginationLinks.find(
									(link) => link.label === "&laquo; Previous",
								)?.url ?? null,
							)
						}
						disabled={current_page === 1}
						className="h-8 w-8 rounded-full"
					>
						<ChevronLeft className="h-4 w-4" />
						<span className="sr-only">Previous page</span>
					</Button>
					<span className="text-gray-500 text-sm">
						{current_page} / {last_page}
					</span>
					<Button
						variant="outline"
						size="icon"
						onClick={() =>
							handlePaginationClick(
								paginationLinks.find((link) => link.label === "Next &raquo;")
									?.url ?? null,
							)
						}
						disabled={current_page === last_page}
						className="h-8 w-8 rounded-full"
					>
						<ChevronRight className="h-4 w-4" />
						<span className="sr-only">Next page</span>
					</Button>
				</div>
			)}
		</ContentLayout>
	);
}
