import { Button } from "@/components/ui/button";

interface TagBadgeProps {
	name: string;
	isSelected: boolean;
	onClick: () => void;
}

export default function TagBadge({ name, isSelected, onClick }: TagBadgeProps) {
	return (
		<Button
			variant={isSelected ? "default" : "secondary"}
			size="sm"
			onClick={onClick}
			className="h-8 rounded-full px-4"
		>
			{name}
		</Button>
	);
}
