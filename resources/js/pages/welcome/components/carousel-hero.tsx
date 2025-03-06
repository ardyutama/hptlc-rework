import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function CarouselHero() {
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
					{Array.from({ length: 3 }).map((_, item) => (
						<CarouselItem key={`carousel-hero-image-${item}`}>
							<div className="relative h-[60vh] bg-muted/50">
								<div className="absolute bottom-0 px-7 pb-4 md:px-12 md:pb-8 md:text-2xl">
									<div>Tes title</div>
									<div className="pt-2 font-bold ">
										Figma ipsum component variant main layer. Boolean content
										strikethrough pen background arrow. Bullet flows project
										duplicate variant component vertical group vector thumbnail.{" "}
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
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
