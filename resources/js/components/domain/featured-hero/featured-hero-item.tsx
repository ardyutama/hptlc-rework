import { CarouselItem } from "@/components/ui/carousel";
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
		<CarouselItem
			className={`pl-4 text-white md:basis-1/2 md:pl-8 lg:basis-1/3 ${className}`}
		>
			{children}
		</CarouselItem>
	);
}
