import EllipsisBadge from "@/components/common/ellipsis-badge";
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
	publicationPdfUrl?: File;
};

const PublicationCard = React.memo(function PublicationCard({
	id,
	tags,
	title,
	date,
	hrefLink,
	description,
}: CardProps) {
	return (
		<article className="flex h-full flex-col">
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
			<Link href={`/publications/${hrefLink}`} className="flex-grow">
				<h4 className="inline-block cursor-pointer pb-2 font-bold text-2xl tracking-tight hover:underline hover:decoration-solid">
					{title}
				</h4>
			</Link>
			{description && <p className="truncate py-2 text-sm">{description}</p>}
			<div className="mt-auto flex items-center">
				<p className="text-base">{date ? formatDate(date) : ""}</p>
			</div>
		</article>
	);
});

export default PublicationCard;
