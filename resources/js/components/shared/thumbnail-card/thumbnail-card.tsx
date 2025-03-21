import EllipsisBadge from "@/components/shared/ellipsis-badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/hooks/formatDate";
import { Link } from "@inertiajs/react";
import { Tag } from "lucide-react";
import type React from "react";

type CardProps = {
	id?: string;
	tags: string[];
	thumbnailImage?: string;
	title: string;
	date: string;
	hrefLink: string;
	description?: string;
	downloadPath?: string;
};
export default function ThumbnailCard({
	id,
	tags,
	thumbnailImage,
	title,
	date,
	hrefLink,
	description,
	downloadPath,
}: CardProps) {
	return (
		<article>
			{thumbnailImage && (
				<div className="my-4 aspect-[4/3] max-h-52 w-full bg-slate-50" />
			)}
			<div className="my-2">
				{tags.map((tag) => (
					<EllipsisBadge
						key={tag}
						icon={<Tag className="h-3 w-3 flex-shrink-0" />}
						maxWidth="max-w-[200px] md:max-w-[300px]"
					>
						High-Performance Thin Layer Chromatography With A Very Long Name
						That Will Truncate
					</EllipsisBadge>
				))}
			</div>
			<Link href={hrefLink}>
				<h4 className="inline-block cursor-pointer pb-2 font-bold text-2xl tracking-tight hover:underline hover:decoration-solid">
					{title}
				</h4>
			</Link>
			{description && <p className="truncate py-2 text-sm">{description}</p>}
			<div className="flex items-center">
				<p className="text-base">{formatDate(date)}</p>
				{downloadPath && (
					<Button variant="ghost" className="ml-4">
						Download PDF
					</Button>
				)}
			</div>
		</article>
	);
}
