import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/formatDate";
import { Link } from "@inertiajs/react";
import { DateTime } from "luxon";

type CardProps = {
	tags: string[];
	thumbnailImage?: string;
	title: string;
	date: string;
	slug: string;
	description?: string;
	downloadPath?: string;
};
export default function ThumbnailCard({
	tags,
	thumbnailImage,
	title,
	date,
	slug,
	description,
	downloadPath,
}: CardProps) {
	return (
		<div>
			{thumbnailImage && (
				<div className="my-4 aspect-[4/3] max-h-52 w-full bg-slate-50" />
			)}
			<div className="my-2">
				{tags.map((tag) => (
					<Badge key={tag}>#{tag}</Badge>
				))}
			</div>
			<h4 className="pb-2 font-bold text-2xl tracking-tight">{title}</h4>
			{description && <p className="truncate py-2 text-sm">{description}</p>}
			<div className="flex items-center">
				<p className="text-base">{formatDate(date)}</p>
				{downloadPath && (
					<Button variant="ghost" className="ml-4">
						Download PDF
					</Button>
				)}
			</div>
		</div>
	);
}
