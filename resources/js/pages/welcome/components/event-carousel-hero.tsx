import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import EventCarouselHeroList from "@/pages/welcome/components/event-carousel-hero-list";
import { useState } from "react";

export default function EventCarouselHero() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			id="carousel-hero"
			className="block"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Carousel>
				<CarouselContent>
					<EventCarouselHeroList />
				</CarouselContent>
				<CarouselPrevious
					className={`left-2 transition-all duration-200 md:left-8 ${
						isHovered ? "opacity-100" : "!opacity-0 !left-0"
					}`}
					variant="outline"
				/>
				<CarouselNext
					className={`right-2 transition-all duration-200 md:right-8 ${
						isHovered ? "opacity-100" : "!opacity-0 !right-0"
					}`}
					variant="outline"
				/>
			</Carousel>
		</div>
	);
}
