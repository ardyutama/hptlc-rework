import { cn } from "@/lib/utils";
import type React from "react";

interface ContentLayoutProps {
	children: React.ReactNode;
	className?: string; // Additional classes for the section wrapper
	contentClassName?: string; // Additional classes for the inner content div (max-width container)
	/**
	 * Controls horizontal padding.
	 * Default: 'px-4 md:px-6 lg:px-8'
	 */
	paddingX?: string;
	/**
	 * Controls vertical padding.
	 * Default: 'py-8 md:py-10 lg:py-12'
	 */
	paddingY?: string;
	/**
	 * Controls the maximum width of the content.
	 * Default: 'max-w-screen-xl' (approx 1280px)
	 * Common options: max-w-4xl, max-w-5xl, max-w-screen-lg, max-w-screen-xl
	 */
	maxWidth?: string;
}

export default function ContentLayout({
	children,
	className,
	contentClassName,
	paddingX = "px-4 md:px-6 lg:px-8",
	paddingY = "py-10 md:py-12 lg:py-16",
	maxWidth = "max-w-screen-xl",
}: ContentLayoutProps) {
	return (
		<section
			// Apply responsive padding to the section itself, ensuring content never touches edges
			className={cn(
				"flex w-full flex-1 justify-center",
				paddingX,
				paddingY,
				className,
			)}
		>
			{/* The inner div constrains the content width */}
			<div className={cn("w-full", maxWidth, contentClassName)}>{children}</div>
		</section>
	);
}
