import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type React from "react";
import { useCallback, useEffect, useState } from "react";

interface FeaturedHeroProps {
    title: string;
    children: React.ReactNode;
}

export default function FeaturedHero({ title, children }: FeaturedHeroProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
        // Cleanup function for Embla Carousel API event listener
        return () => {
            api.off("select");
        };
    }, [api]);

    const scrollTo = useCallback(
        (index: number) => {
            api?.scrollTo(index);
        },
        [api],
    );

    return (
        <div className="bg-neutral-950 text-white py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
                <div className="mb-10 text-center">
                    {/* Remodeled Title: Gradient Text */}
                    <h3 className="font-extrabold text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl
                               bg-gradient-to-r from-neutral-50 to-green-400 text-transparent bg-clip-text">
                        {`HTPLC ${title}`}
                    </h3>
                    <p className="mt-4 font-bold text-xl text-neutral-300 md:text-2xl">
                        {`Featured ${title} Today`}
                    </p>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Carousel
                        className="relative block"
                        setApi={setApi}
                        opts={{
                            align: "start",
                        }}
                    >
                        <CarouselContent className="-ml-4 md:-ml-4">
                            {children}
                        </CarouselContent>

                        {/* Remodeled Carousel Arrows */}
                        <CarouselPrevious
                            className={cn(
                                "absolute top-1/2 -translate-y-1/2",
                                "left-4 md:left-6 lg:left-8",
                                "flex items-center justify-center w-10 h-10 rounded-full", // Circular shape, fixed size
                                "bg-neutral-800/70 border border-neutral-700 text-white", // Translucent dark background
                                "opacity-0 md:opacity-70 transition-all duration-300 ease-in-out", // Start hidden on mobile, subtle on desktop
                                "hover:bg-green-600 hover:border-green-600 hover:text-white hover:opacity-100", // Stronger hover effect
                                "focus-visible:ring-2 focus-visible:ring-green-500", // Accessibility focus
                                isHovered ? "md:opacity-100 md:scale-105" : "", // More prominent on container hover
                            )}
                            variant="outline" // The variant prop can still be used for base styling, but we're overriding heavily
                        />
                        <CarouselNext
                            className={cn(
                                "absolute top-1/2 -translate-y-1/2",
                                "right-4 md:right-6 lg:right-8",
                                "flex items-center justify-center w-10 h-10 rounded-full", // Circular shape, fixed size
                                "bg-neutral-800/70 border border-neutral-700 text-white", // Translucent dark background
                                "opacity-0 md:opacity-70 transition-all duration-300 ease-in-out", // Start hidden on mobile, subtle on desktop
                                "hover:bg-green-600 hover:border-green-600 hover:text-white hover:opacity-100", // Stronger hover effect
                                "focus-visible:ring-2 focus-visible:ring-green-500", // Accessibility focus
                                isHovered ? "md:opacity-100 md:scale-105" : "", // More prominent on container hover
                            )}
                            variant="outline"
                        />
                    </Carousel>

                    {/* Remodeled Carousel Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                className={cn(
                                    "h-2.5 w-2.5 rounded-full transition-all duration-300 ease-in-out", // Slightly larger dots, smoother transition
                                    index + 1 === current
                                        ? "bg-green-500 shadow-md shadow-green-500/50" // Active: vibrant green with subtle glow
                                        : "bg-neutral-700 hover:bg-neutral-500 hover:scale-110", // Inactive: darker, slight scale on hover
                                )}
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
