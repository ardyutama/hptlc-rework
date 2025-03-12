import type React from "react";

interface ThumbnailCardsContentProps {
	className?: string;
	children: React.ReactNode;
}
export default function ThumbnailGrid({
	className,
	children,
}: ThumbnailCardsContentProps) {
	return (
		<div className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${className}`}>
			{children}
		</div>
	);
}
