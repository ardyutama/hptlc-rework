import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Tag } from "@/types";
import { useMemo, useState } from "react";
import TagBadge from "./tag-badge";

interface TagFilterModalProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	availableTags: Tag[];
	selectedTagIds: string[];
	onSelectionChange: (ids: string[]) => void;
}

export default function TagFilterModal({
	open,
	onOpenChange,
	availableTags,
	selectedTagIds,
	onSelectionChange,
}: TagFilterModalProps) {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredTags = useMemo(() => {
		if (!searchTerm) return availableTags;
		return availableTags.filter((tag) =>
			tag.name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [searchTerm, availableTags]);

	const handleTagClick = (tagId: string) => {
		const newSelectedIds = selectedTagIds.includes(tagId)
			? selectedTagIds.filter((id) => id !== tagId)
			: [...selectedTagIds, tagId];
		onSelectionChange(newSelectedIds);
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Filter by Tags</DialogTitle>
					<DialogDescription>
						Select one or more tags to filter the publications.
					</DialogDescription>
				</DialogHeader>
				<div className="py-4">
					<Input
						placeholder="Search for a tag..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<ScrollArea className="mt-4 h-60 pr-4">
						<div className="flex flex-wrap gap-2">
							{filteredTags.map((tag) => (
								<TagBadge
									key={tag.id}
									name={tag.name}
									isSelected={selectedTagIds.includes(tag.id)}
									onClick={() => handleTagClick(tag.id)}
								/>
							))}
						</div>
					</ScrollArea>
				</div>
				<DialogFooter>
					<Button onClick={() => onOpenChange(false)}>Done</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
