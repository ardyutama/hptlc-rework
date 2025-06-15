import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Tag } from "lucide-react";
import type React from "react";

interface EllipsisBadgeProps {
	children: React.ReactNode;
	className?: string;
	icon?: React.ReactNode;
	maxWidth?: string;
}

const EllipsisBadge = ({
	children,
	className,
	icon = <Tag className="h-3 w-3" />,
	maxWidth = "max-w-[180px]",
}: EllipsisBadgeProps) => {
	return (
		<Badge
			variant="secondary"
			className={cn(
				"flex items-center gap-1 overflow-hidden",
				maxWidth,
				className,
			)}
		>
			{icon}
			<span className="truncate">{children}</span>
		</Badge>
	);
};

export default EllipsisBadge;
