import { CarouselItem } from "@/components/ui/carousel";

type CarouselHeroItem = {
	title: string;
	description: string;
};
export default function CarouselHeroItem({
	title,
	description,
}: CarouselHeroItem) {
	return (
		<CarouselItem>
			<div className="relative h-[60vh] bg-muted/50">
				<div className="absolute bottom-0 px-7 pb-4 md:px-12 md:pb-8 md:text-2xl">
					<div>{title}</div>
					<h4 className="pt-2 font-bold ">{description}</h4>
				</div>
			</div>
		</CarouselItem>
	);
}
