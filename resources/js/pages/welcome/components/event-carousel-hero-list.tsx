import { eventData } from "@/data/mock-data";
import CarouselHeroItem from "@/pages/welcome/components/carousel-hero-item";

export default function EventCarouselHeroList() {
	const MAX_CONTENT_CAROUSEL = 4;

	return (
		<>
			{eventData.slice(0, MAX_CONTENT_CAROUSEL).map((item) => (
				<CarouselHeroItem
					key={item.id}
					title={item.title}
					description={item.description}
				/>
			))}
		</>
	);
}
