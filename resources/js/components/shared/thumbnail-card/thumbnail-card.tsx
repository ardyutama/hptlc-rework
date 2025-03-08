import { Button } from "@/components/ui/button";
import { DateTime } from "luxon";
import {formatDate} from "@/utils/formatDate";

type CardProps = {
	tags: string[];
	thumbnailImage?: string;
	title: string;
	date: string;
	slug: string;
	downloadPath?: string;
}
export default function ThumbnailCard({
	tags,
	thumbnailImage,
	title,
	date,
	slug,
	downloadPath,
}: CardProps) {
	return (
		<>
			<div className="flex flex-col gap-4 md:text-lg">
				{thumbnailImage && (
					<div className="aspect-[4/3] max-h-52 bg-slate-50" />
				)}
				{tags.map((tag) => (
					<p key={tag}> {tag} </p>
				))}
				<p className="font-bold">{title}</p>
				<div className="flex items-center">
					<p className="text-base">{formatDate(date)}</p>
					{downloadPath && (
						<Button variant="ghost" className="ml-4">
							Download PDF
						</Button>
					)}
				</div>
			</div>
		</>
	);
}
