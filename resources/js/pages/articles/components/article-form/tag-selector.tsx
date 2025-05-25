import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { FormErrors, Tag } from "./types";

interface TagsSelectorProps {
	tags: Tag[];
	selectedExistingTagIds: string[];
	setSelectedExistingTagIds: (ids: string[]) => void;
	newTagNames: string[];
	setNewTagNames: (names: string[]) => void;
	errors: FormErrors;
}

export default function TagsSelector({
	tags,
	selectedExistingTagIds,
	setSelectedExistingTagIds,
	newTagNames,
	setNewTagNames,
	errors,
}: TagsSelectorProps) {
	const [newTagName, setNewTagName] = useState<string>("");

	const handleExistingTagToggle = (tagId: string) => {
		const currentTags = [...selectedExistingTagIds];
		const tagIndex = currentTags.indexOf(tagId);

		if (tagIndex === -1) {
			currentTags.push(tagId);
		} else {
			currentTags.splice(tagIndex, 1);
		}

		setSelectedExistingTagIds(currentTags);
	};

	const handleAddNewTag = (e: React.FormEvent) => {
		e.preventDefault();

		const trimmedName = newTagName.trim();
		if (!trimmedName) return;

		const existingTag = tags.find(
			(tag) => tag.name.toLowerCase() === trimmedName.toLowerCase(),
		);
		const isAlreadySelectedExisting = existingTag
			? selectedExistingTagIds.includes(existingTag.id)
			: false;
		const isAlreadyInNewList = newTagNames
			.map((n) => n.toLowerCase())
			.includes(trimmedName.toLowerCase());

		if (isAlreadySelectedExisting) {
			toast("Tag already selected", {
				description: `"${trimmedName}" is already selected from existing tags.`,
			});
		} else if (isAlreadyInNewList) {
			toast("Tag name already listed", {
				description: `"${trimmedName}" is already listed for creation.`,
			});
		} else if (existingTag) {
			handleExistingTagToggle(existingTag.id);
			toast("Existing Tag Selected", {
				description: `Selected existing tag "${existingTag.name}".`,
			});
		} else {
			setNewTagNames([...newTagNames, trimmedName]);
			toast("New Tag Added", {
				description: `"${trimmedName}" will be created when you save the article.`,
			}); // Give feedback
		}

		setNewTagName("");
	};

	const handleRemoveNewTag = (nameToRemove: string) => {
		setNewTagNames(newTagNames.filter((name) => name !== nameToRemove));
	};

	const hasErrors = errors.existing_tag_ids || errors.new_tag_names;

	return (
		<div className="space-y-2" data-error={hasErrors ? true : undefined}>
			<Label htmlFor="tags" className="block font-medium text-base">
				Tags
			</Label>

			{tags.length > 0 && (
				<div className="flex flex-wrap gap-2 rounded-md border p-2">
					{tags.map((tag) => (
						<Badge
							key={tag.id}
							variant={
								selectedExistingTagIds.includes(tag.id) ? "default" : "outline"
							}
							className="cursor-pointer select-none"
							onClick={() => handleExistingTagToggle(tag.id)}
						>
							{tag.name}
						</Badge>
					))}
				</div>
			)}

			{newTagNames.length > 0 && (
				<div className="flex flex-wrap gap-2">
					<span className="font-medium text-gray-700 text-sm dark:text-gray-300">
						Tags to create:
					</span>
					{newTagNames.map((name) => (
						<Badge
							key={name}
							variant="secondary"
							className="cursor-pointer select-none"
							onClick={() => handleRemoveNewTag(name)}
						>
							{name}
							<X size={12} className="ml-1 inline-block" />{" "}
						</Badge>
					))}
				</div>
			)}

			{errors.existing_tag_ids && (
				<p className="mt-1 font-medium text-red-500 text-sm">
					{errors.existing_tag_ids}
				</p>
			)}
			{errors.new_tag_names && (
				<p className="mt-1 font-medium text-red-500 text-sm">
					{errors.new_tag_names}
				</p>
			)}

			{/* Input for adding new tags */}
			<div className="mt-2 flex gap-2">
				<Input
					value={newTagName}
					onChange={(e) => setNewTagName(e.target.value)}
					placeholder="Add new tag or select existing..."
					className="flex-1"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							handleAddNewTag(e);
						}
					}}
				/>
				<Button
					type="button"
					variant="outline"
					onClick={handleAddNewTag}
					disabled={!newTagName.trim()}
					className="whitespace-nowrap"
				>
					<Plus size={16} className="mr-1" />
					Add New Tag
				</Button>
			</div>
		</div>
	);
}
