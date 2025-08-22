import { Button } from "@/components/ui/button";
import type { Tag } from "@/types";
import { useEffect, useMemo, useState } from "react";
import TagBadge from "./tag-badge";
import TagFilterModal from "./tag-filter-modal";

interface TagFilterProps {
	availableTags: Tag[];
	initialSelectedTagIds: string[];
	onTagsChange: (selectedTagIds: string[]) => void;
}

const MAX_VISIBLE_TAGS = 4;

export default function TagFilter({
	availableTags,
	initialSelectedTagIds,
	onTagsChange,
}: TagFilterProps) {
	const [selectedIds, setSelectedIds] = useState(initialSelectedTagIds);
	const [isModalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		onTagsChange(selectedIds);
	}, [selectedIds]);

	const sortedTags = useMemo(() => {
		return [...availableTags].sort((a, b) => {
			const aIsSelected = selectedIds.includes(a.id);
			const bIsSelected = selectedIds.includes(b.id);
			return (bIsSelected ? 1 : 0) - (aIsSelected ? 1 : 0);
		});
	}, [availableTags, selectedIds]);

	const handleTagClick = (tagId: string) => {
		setSelectedIds((prevIds) =>
			prevIds.includes(tagId)
				? prevIds.filter((id) => id !== tagId)
				: [...prevIds, tagId],
		);
	};

	const visibleTags = sortedTags.slice(0, MAX_VISIBLE_TAGS);
	const hasMoreTags = availableTags.length > MAX_VISIBLE_TAGS;

	return (
		<>
			<div className="flex items-center gap-2 overflow-x-auto pb-2">
				<Button
					variant="ghost"
					size="sm"
					onClick={() => setSelectedIds([])}
					disabled={selectedIds.length === 0}
					className="shrink-0"
				>
					Clear All
				</Button>
				{visibleTags.map((tag) => (
					<TagBadge
						key={tag.id}
						name={tag.name}
						isSelected={selectedIds.includes(tag.id)}
						onClick={() => handleTagClick(tag.id)}
					/>
				))}
				{hasMoreTags && (
					<Button
						variant="outline"
						size="sm"
						onClick={() => setModalOpen(true)}
						className="h-8 rounded-full"
					>
						More Tags...
					</Button>
				)}
			</div>
			<TagFilterModal
				open={isModalOpen}
				onOpenChange={setModalOpen}
				availableTags={availableTags} // <-- The modal still gets the original alphabetical list
				selectedTagIds={selectedIds}
				onSelectionChange={setSelectedIds}
			/>
		</>
	);
}
