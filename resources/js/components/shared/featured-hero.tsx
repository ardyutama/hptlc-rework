import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import type React from "react";
import { useState } from "react";

interface FeaturedHeroProps {
	title: string;
	children: React.ReactNode;
}
export default function FeaturedHero({ title, children }: FeaturedHeroProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="min-h-svh bg-[#141414]">
			<div className="mx-6 grid h-full grid-cols-12 grid-rows-2 gap-2 md:mx-24 lg:mx-32">
				<div className="col-span-4 mt-80">
					<h3 className="font-bold text-4xl text-white tracking-tight">
						{`HTPLC ${title}`}
					</h3>
				</div>
				<div className="col-span-full row-start-2 my-8 flex h-full flex-col">
					<p className="pb-4 font-bold text-2xl text-white tracking-tight">
						{`Featured ${title} Today`}
					</p>
					<Carousel
						id="featured-articles-carousel-hero"
						className="block"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<CarouselContent className="-ml-4 md:-ml-8">
							{[1, 2, 3, 4, 5].map((id) => (
								<CarouselItem
									key={`carousel-featured-${title}-image-${id}`}
									className="pl-4 text-white md:basis-1/2 md:pl-8 lg:basis-1/3"
								>
									{children}
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious
							className={`md:-left-12 hidden transition-all duration-200 md:inline-flex ${
								isHovered ? "opacity-100" : "!opacity-0 !left-0"
							}`}
							variant="outline"
						/>
						<CarouselNext
							className={`md:-right-12 hidden transition-all duration-200 md:inline-flex ${
								isHovered ? "opacity-100" : "!opacity-0 !right-0"
							}`}
							variant="outline"
						/>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
