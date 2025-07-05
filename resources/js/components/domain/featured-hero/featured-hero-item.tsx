import { cn } from "@/lib/utils";
import type React from "react";

type FeaturedHeroItemProps = {
	className?: string;
	children: React.ReactNode;
};

export default function FeaturedHeroItem({
	className,
	children,
}: FeaturedHeroItemProps) {
	return (
		<div
			// Added 'group' here so PublicationCard can use group-hover effects
			className={cn(
				"group relative",
				"p-6 md:p-8", // Internal padding for content
				"flex h-full flex-col items-start justify-between", // Ensures vertical distribution
				"overflow-hidden rounded-lg bg-neutral-900",
				"shadow-xl",
				"text-white",
				"transform transition-all duration-300 ease-in-out",
				"hover:scale-[1.01] hover:shadow-2xl hover:shadow-green-500/10",
				"border border-transparent hover:border-green-500/50", // Subtle border that appears/glows on hover
				className,
			)}
		>
			{children}
		</div>
	);
}
