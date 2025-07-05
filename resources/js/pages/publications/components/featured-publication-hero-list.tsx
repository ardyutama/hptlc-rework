import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PageProps, Publication } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import type React from "react";
import {Autoplay, Navigation, Pagination, Parallax, Scrollbar} from "swiper/modules";
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
				modules={[ Scrollbar, Parallax, Navigation, Autoplay, Pagination]}
				className=" h-96 shadow-xl md:h-[400px] lg:h-[450px] xl:h-[500px]"
			>
				<div
					slot="container-start"
					className="absolute top-0 left-0 h-full w-[130%] bg-center bg-cover bg-[url(https://swiperjs.com/demos/images/nature-1.jpg)]"
					data-swiper-parallax="-23%"
				/>
                <div className="absolute inset-0  bg-gradient-to-t from-black/80 via-black/50 to-transparent "/>

				{heroPublications.slice(0, MAX_FEATURED_PUBLICATION_HERO).map((pub) => (
					<SwiperSlide key={pub.id}>
						<div className="relative h-full w-full">
                            <div className="flex flex-col justify-end text-white p-6 h-full pb-12">
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
