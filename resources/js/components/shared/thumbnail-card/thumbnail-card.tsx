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
	title: string;
	date?: string | null;
	hrefLink: string;
	description?: string;
	downloadPath?: string;
};

const ThumbnailCard = React.memo(function ThumbnailCard({
	id,
	tags,
	thumbnailImage,
	title,
	date,
	hrefLink,
	description,
	downloadPath,
}: CardProps) {
	const getImageUrl = (path: string | null | undefined): string | undefined => {
		if (!path) return undefined;
		return `/storage/${path}`;
	};

	const imageUrl = getImageUrl(thumbnailImage);

	return (
		<article className="flex h-full flex-col">
			<div className="aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800">
				{imageUrl && (
					<img
						src={imageUrl}
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
