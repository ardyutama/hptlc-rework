import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { Tag } from "@/types";

interface TagFilterProps {
    availableTags: Tag[];
    initialSelectedTagIds: string[]; // Expects an array of tag IDs
    onTagsChange: (selectedTagIds: string[]) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({
    availableTags,
    initialSelectedTagIds,
    onTagsChange,
}) => {
    // State to manage currently selected tag IDs
    const [selectedTagIds, setSelectedTagIds] =
        useState<string[]>(initialSelectedTagIds);

    // Effect to update internal state if initialSelectedTagIds prop changes
    // This is crucial when Inertia re-renders and the URL filters change
    useEffect(() => {
        // Ensure that the initialSelectedTagIds is treated as an array and correctly initialized
        const newInitial = Array.isArray(initialSelectedTagIds) ? initialSelectedTagIds : [];
        // Only update if the actual content of the arrays differs
        if (JSON.stringify(selectedTagIds) !== JSON.stringify(newInitial)) {
            setSelectedTagIds(newInitial);
        }
    }, [initialSelectedTagIds]);


    const handleTagClick = (tagId: string) => {
        let newSelectedTagIds: string[];
        if (selectedTagIds.includes(tagId)) {
            // Deselect tag
            newSelectedTagIds = selectedTagIds.filter((id) => id !== tagId);
        } else {
            // Select tag
            newSelectedTagIds = [...selectedTagIds, tagId];
        }
        setSelectedTagIds(newSelectedTagIds);
        onTagsChange(newSelectedTagIds); // Notify parent component
    };

    const handleRemoveSelectedTag = (tagId: string) => {
        const newSelectedTagIds = selectedTagIds.filter((id) => id !== tagId);
        setSelectedTagIds(newSelectedTagIds);
        onTagsChange(newSelectedTagIds); // Notify parent component
    };

    // Determine which tags are currently selected for styling purposes
    const isTagSelected = (tagId: string) => selectedTagIds.includes(tagId);

    return (
        <div className="flex flex-col gap-4">
            {/* Display selected tags (if any) */}
            {selectedTagIds.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-1">
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
                                    className="ml-1 h-auto w-auto p-0 rounded-full"
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
                        onClick={() => {
                            setSelectedTagIds([]);
                            onTagsChange([]);
                        }}
                        className="text-sm text-red-500 hover:text-red-700 h-auto px-2 py-1"
                    >
                        Clear All
                    </Button>
                </div>
            )}

            {/* Scrollable list of all available tags */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-0 whitespace-nowrap">
                    Available Tags:
                </span>
                <ScrollArea className="w-full whitespace-nowrap rounded-md border py-1.5 px-2">
                    <div className="flex space-x-2">
                        {availableTags.map((tag) => (
                            <Button
                                key={tag.id}
                                variant={isTagSelected(tag.id) ? "default" : "outline"}
                                size="sm"
                                onClick={() => handleTagClick(tag.id)}
                                className="h-7 px-3 text-sm rounded-full"
                            >
                                {tag.name}
                            </Button>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="h-1.5 bg-gray-200 dark:bg-gray-700" />
                </ScrollArea>
            </div>
        </div>
    );
};

export default TagFilter;