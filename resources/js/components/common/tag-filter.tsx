import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { Tag } from "@/types";
import { ChevronRight, XCircle } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface TagFilterProps {
	availableTags: Tag[];
	initialSelectedTagIds: string[];
	onTagsChange: (selectedTagIds: string[]) => void;
}

const MAX_VISIBLE_TAGS = 3;

const TagFilter: React.FC<TagFilterProps> = ({
	availableTags,
	initialSelectedTagIds,
	onTagsChange,
}) => {
	const [selectedTagIds, setSelectedTagIds] = useState<string[]>(
		initialSelectedTagIds,
	);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const newInitial = Array.isArray(initialSelectedTagIds)
			? initialSelectedTagIds
			: [];

		// biome-ignore lint/correctness/noUndeclaredDependencies: This comparison is intentional to prevent infinite loops when syncing state with props.
		const currentSelectedSorted = JSON.stringify([...selectedTagIds].sort());
		const newInitialSorted = JSON.stringify([...newInitial].sort());

		if (currentSelectedSorted !== newInitialSorted) {
			setSelectedTagIds(newInitial);
		}
	}, [initialSelectedTagIds]);

	const handleTagClick = (tagId: string) => {
		let newSelectedTagIds: string[];
		if (selectedTagIds.includes(tagId)) {
			newSelectedTagIds = selectedTagIds.filter((id) => id !== tagId);
		} else {
			newSelectedTagIds = [...selectedTagIds, tagId];
		}
		setSelectedTagIds(newSelectedTagIds);
	};

	const handleApplyFilters = () => {
		onTagsChange(selectedTagIds);
		setIsDialogOpen(false);
	};

	const handleClearAllSelectedTags = () => {
		setSelectedTagIds([]);
		onTagsChange([]);
		setIsDialogOpen(false);
	};

	const handleRemoveSelectedTag = (tagId: string) => {
		const newSelectedTagIds = selectedTagIds.filter((id) => id !== tagId);
		setSelectedTagIds(newSelectedTagIds);
		onTagsChange(newSelectedTagIds);
	};

	const isTagSelected = (tagId: string) => selectedTagIds.includes(tagId);

	const filteredAvailableTags = availableTags.filter((tag) =>
		tag.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const initiallyVisibleTags = availableTags.slice(0, MAX_VISIBLE_TAGS);
	const hasMoreTags = availableTags.length > MAX_VISIBLE_TAGS;

	return (
		<div className="flex flex-col gap-4">
			{selectedTagIds.length > 0 && (
				<div className="flex flex-wrap items-center gap-2">
					<span className="mr-1 font-medium text-gray-700 text-sm dark:text-gray-300">
						Filtered by:
					</span>
					{selectedTagIds.map((tagId) => {
						const tag = availableTags.find((t) => t.id === tagId);
						return tag ? (
							<Badge key={tag.id} variant="secondary" className="pr-1">
								{tag.name}
								<Button
									variant="ghost"
									size="icon"
									onClick={() => handleRemoveSelectedTag(tag.id)}
									className="ml-1 h-auto w-auto rounded-full p-0"
								>
									<XCircle className="h-3 w-3 text-muted-foreground hover:text-foreground" />
									<span className="sr-only">Remove {tag.name} filter</span>
								</Button>
							</Badge>
						) : null;
					})}
					<Button
						variant="ghost"
						size="sm"
						onClick={handleClearAllSelectedTags} // Use the new handler
						className="h-auto px-2 py-1 text-red-500 text-sm hover:text-red-700"
					>
						Clear All
					</Button>
				</div>
			)}

			<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
				<span className="mb-2 whitespace-nowrap font-medium text-gray-700 text-sm sm:mb-0 dark:text-gray-300">
					Available Tags:
				</span>
				<ScrollArea className="flex-grow whitespace-nowrap px-2 py-1.5">
					<div className="flex space-x-2">
						{initiallyVisibleTags.map((tag) => (
							<Button
								key={tag.id}
								variant={isTagSelected(tag.id) ? "default" : "outline"}
								size="sm"
								onClick={() => handleTagClick(tag.id)}
								className="h-7 rounded-full px-3 text-sm"
							>
								{tag.name}
							</Button>
						))}
						{hasMoreTags && (
							<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
								<DialogTrigger asChild>
									<Button
										variant="ghost"
										size="sm"
										className="h-7 rounded-full px-3 text-sm"
									>
										More Tags... <ChevronRight className="ml-1 h-3 w-3" />
									</Button>
								</DialogTrigger>
								<DialogContent className="flex max-h-[80vh] flex-col sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle>Select Tags</DialogTitle>
										<DialogDescription>
											Select tags to filter publications.
										</DialogDescription>
									</DialogHeader>

									<div className="my-2 flex items-center space-x-2">
										<Input
											placeholder="Search tags..."
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
											className="flex-grow"
										/>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => setSearchTerm("")}
											className={searchTerm ? "" : "cursor-default opacity-0"}
											aria-label="Clear search"
										>
											<XCircle className="h-4 w-4" />
										</Button>
									</div>

									<ScrollArea className="flex-grow pr-4">
										{" "}
										{/* Add padding for scrollbar */}
										<div className="flex w-fit flex-wrap gap-4">
											{filteredAvailableTags.length > 0 ? (
												filteredAvailableTags.map((tag) => (
													<Button
														key={tag.id}
														variant={
															isTagSelected(tag.id) ? "default" : "secondary"
														}
														onClick={() => handleTagClick(tag.id)}
														className="h-8 justify-start"
													>
														{isTagSelected(tag.id) && (
															<XCircle className="mr-2 h-4 w-4" />
														)}
														{tag.name}
													</Button>
												))
											) : (
												<p className="col-span-full py-4 text-center text-gray-500">
													No tags found.
												</p>
											)}
										</div>
									</ScrollArea>

									<DialogFooter className="mt-4 flex flex-col sm:flex-row sm:justify-end sm:space-x-2">
										<Button
											variant="outline"
											onClick={() => {
												setSelectedTagIds(initialSelectedTagIds);
												setIsDialogOpen(false);
												setSearchTerm("");
											}}
										>
											Cancel
										</Button>
										<Button
											onClick={handleApplyFilters}
											disabled={
												JSON.stringify(selectedTagIds) ===
												JSON.stringify(initialSelectedTagIds)
											}
										>
											Apply Filters
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						)}
					</div>
					<ScrollBar
						orientation="horizontal"
						className="h-1.5 bg-gray-200 dark:bg-gray-700"
					/>
				</ScrollArea>
			</div>
		</div>
	);
};

export default TagFilter;
