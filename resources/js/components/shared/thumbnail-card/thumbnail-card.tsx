import EllipsisBadge from "@/components/shared/ellipsis-badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/hooks/formatDate";
import { Link } from "@inertiajs/react";
import { Tag } from "lucide-react";
import React from "react";

type CardProps = {
	id?: string;
	tags: string[];
	thumbnailImage?: string | null;
    thumbnail_image_url?: string | null;
    featured_image_url?: string | null;
	title: string;
	date?: string | null;
	hrefLink: string;
	description?: string;
	downloadPath?: string;
};

const ThumbnailCard = React.memo(function ThumbnailCard({
	id,
	tags,
    thumbnail_image_url,
    featured_image_url,
	title,
	date,
	hrefLink,
	description,
	downloadPath,
}: CardProps) {

    const primaryImageUrl = thumbnail_image_url || featured_image_url || null;

    const srcSet = [
        thumbnail_image_url ? `${thumbnail_image_url} 400w` : "",
        featured_image_url ? `${featured_image_url} 800w` : "",
    ].filter(Boolean).join(", ");

    const sizes = `
        (max-width: 767px) 100vw,
        (min-width: 768px) 50vw,
        (min-width: 1024px) 33vw,
        400px
    `;

	return (
		<article className="flex h-full flex-col">
			<div className="aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
                {primaryImageUrl && (
                    <img
                        src={primaryImageUrl}
                        srcSet={srcSet}
                        sizes={sizes}
                        alt={title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                )}
			</div>
			<div className="my-2 flex flex-wrap gap-1">
				{tags.map((tag) => (
					<EllipsisBadge
						key={tag}
						icon={<Tag className="h-3 w-3 flex-shrink-0" />}
						maxWidth="max-w-[150px]"
					>
						{tag}
					</EllipsisBadge>
				))}
			</div>
			<Link href={hrefLink} className="flex-grow">
				<h4 className="inline-block cursor-pointer pb-2 font-bold text-2xl tracking-tight hover:underline hover:decoration-solid">
					{title}
				</h4>
			</Link>
			{description && <p className="truncate py-2 text-sm">{description}</p>}
			<div className="mt-auto flex items-center">
				<p className="text-base">{date ? formatDate(date) : ""}</p>
				{downloadPath && (
					<Button variant="ghost" className="ml-4">
						Download PDF
					</Button>
				)}
			</div>
		</article>
	);
});

export default ThumbnailCard;
