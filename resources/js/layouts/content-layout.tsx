import { cn } from "@/lib/utils";
import type React from "react";

interface ContentLayoutProps {
	children: React.ReactNode;
	className?: string;
}
export default function ContentLayout({
	children,
	className,
}: ContentLayoutProps) {
	return (
		<div
			className={cn("m-7 my-10 flex flex-1 justify-center md:mx-10", className)}
		>
			<div className="w-full max-w-4xl">{children}</div>
		</div>
	);
}
