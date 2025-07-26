import ImagePublication from "@/assets/img/img_publication.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PageProps, Publication } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import {
	Autoplay,
	Navigation,
	Pagination,
	Parallax,
	Scrollbar,
} from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

interface FeaturedPublicationHero extends PageProps {
	heroPublications: Publication[];
}

export default function FeaturedPublicationHeroList() {
	const { heroPublications } = usePage<FeaturedPublicationHero>().props;
	const MAX_FEATURED_PUBLICATION_HERO = 6;

	return (
		<section>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={true}
				parallax={true}
				modules={[Scrollbar, Parallax, Navigation, Autoplay, Pagination]}
				className=" h-96 shadow-xl md:h-[400px] lg:h-[450px] xl:h-[500px]"
			>
				<div
					slot="container-start"
					className="absolute top-0 left-0 h-full w-[130%]"
					data-swiper-parallax="-23%"
				>
					<img
						src={ImagePublication}
						alt="Featured Publication Background"
						className="h-full w-full object-cover object-center"
					/>
				</div>

				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent " />

				{heroPublications.slice(0, MAX_FEATURED_PUBLICATION_HERO).map((pub) => (
					<SwiperSlide key={pub.id}>
						<div className="relative h-full w-full">
							<div className="flex h-full flex-col justify-end p-6 pb-12 text-white">
								<h3 className="mb-2 font-bold text-3xl leading-tight md:text-4xl">
									{pub.title}
								</h3>
								<p className="mb-3 line-clamp-2 text-gray-200 text-lg">
									{pub.abstract}
								</p>
								<div className="mb-4 flex flex-wrap gap-2">
									{pub.tags.map((tag) => (
										<Badge
											key={tag.id}
											variant="secondary"
											className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
										>
											{tag.name}
										</Badge>
									))}
								</div>
								<Button asChild className="self-start">
									<Link href={route("publications.show", pub.slug)}>
										Read More
									</Link>
								</Button>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
