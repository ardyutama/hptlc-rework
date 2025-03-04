import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

interface CardProps {
	topics: string[];
	thumbnailImage?: string;
	title: string;
	date: string;
	downloadPath?: string;
}
export default function ThumbnailCard({
	topics,
	thumbnailImage,
	title,
	date,
	downloadPath,
}: CardProps) {
	return (
		<div className="flex flex-col gap-4 md:text-lg">
			{thumbnailImage && <div className="aspect-video max-h-40 bg-slate-50" />}
			<p>{topics[0]} </p>
			<p className="font-bold">{title}</p>
			<div className="flex justify-between">
				<p id="date">{date}</p>
				{downloadPath && <Button variant="ghost">Download PDF</Button>}
			</div>
		</div>
	);
}
