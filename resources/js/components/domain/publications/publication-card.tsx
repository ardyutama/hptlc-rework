import { Badge } from "@/components/ui/badge";
import type { Publication } from "@/types";
import { Link } from "@inertiajs/react";
import { Calendar, Users } from "lucide-react";
import {formatDate} from "@/hooks/formatDate";

type PublicationCardProps = Pick<
	Publication,
	"slug" | "title" | "abstract" | "authors" | "tags" | "published_at"
>;

export default function PublicationCard({
	slug,
	title,
	abstract,
	authors,
	tags,
	published_at,
}: PublicationCardProps) {
	const formattedDate = published_at
		? formatDate(published_at)
		: "N/A";

	const authorList = authors
		.map((author) => `${author?.member?.first_name} ${author?.member?.last_name}`)
		.join(", ");

	return (
		<Link
			href={route("publications.show", slug)}
			className="group hover:-translate-y-1 flex h-full flex-col rounded-lg border bg-card text-card-foreground shadow-sm transition-transform duration-200 ease-in-out"
		>
			<div className="flex h-full flex-col justify-between p-6">
				<div>
					<div className="mb-3 flex flex-wrap gap-2">
						{tags.slice(0, 3).map((tag) => (
							<Badge key={tag.id} variant="secondary">
								{tag.name}
							</Badge>
						))}
					</div>

					<h2 className="mb-2 font-bold text-neutral-800 text-xl tracking-tight group-hover:text-blue-600 dark:text-neutral-200">
						{title}
					</h2>

					<p className="mb-4 line-clamp-3 text-neutral-600 text-sm dark:text-neutral-400">
						{abstract}
					</p>
				</div>

				<div className="mt-auto space-y-3 border-t pt-4 text-neutral-500 text-xs dark:text-neutral-400">
					<div className="flex items-start gap-2">
						<Users className="h-4 w-4 shrink-0" />
						<span className="font-medium">{authorList}</span>
					</div>
					<div className="flex items-center gap-2">
						<Calendar className="h-4 w-4 shrink-0" />
						<span>{formattedDate}</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
