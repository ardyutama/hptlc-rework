import type React from "react";
import { cn } from "@/lib/utils";

type FeaturedHeroItemProps = {
    className?: string;
    children: React.ReactNode;
};

export default function FeaturedHeroItem({
                                             className,
                                             children,
                                         }: FeaturedHeroItemProps) {
    return (
        <div
            // Added 'group' here so PublicationCard can use group-hover effects
            className={cn(
                "group relative",
                "p-6 md:p-8",
                "h-full flex flex-col justify-between items-start",
                "bg-neutral-900 rounded-lg overflow-hidden",
                "shadow-xl",
                "text-white",
                "transform transition-all duration-300 ease-in-out",
                "hover:scale-[1.01] hover:shadow-2xl hover:shadow-green-500/10", // Accent glow on hover
                "hover:border-green-500/50 border border-transparent", // Subtle border that appears/glows on hover
                className,
            )}
        >
            {children}
        </div>
    );
}
