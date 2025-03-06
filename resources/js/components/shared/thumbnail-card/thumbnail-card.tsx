import { Button } from "@/components/ui/button";
import type { Tag } from "@/types";

interface CardProps {
	tags: Tag[];
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
					<div className="aspect-video max-h-40 bg-slate-50" />
				)}
				{tags.map((tag) => (
					<p> {tag.name} </p>
				))}
				<p className="font-bold">{title}</p>
				<div className="flex items-center">
					<p className="text-base">{date}</p>
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
