import PublicationCard from "@/components/domain/publications/publication-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type { PageProps, Publication } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { format } from "date-fns";
import { ArrowLeft, Download, Pencil, Tag as TagIcon } from "lucide-react";

interface PublicationShowProps extends PageProps {
	publication: Publication;
	relatedPublications: Publication[];
}

const PublicationShowPage = ({
	publication,
	relatedPublications,
}: PublicationShowProps) => {
	const { auth } = usePage<PageProps>().props;
	const user = auth?.user;
	const formattedDate = publication.published_at
		? format(new Date(publication.published_at), "MMMM d, yyyy")
		: "Date not available";

	const canEdit = (() => {
		if (!user) return false;

		if (user.role.includes("admin") || user.role.includes("editor")) {
			return true;
		}

		// const isAuthor = publication.authors.some(
		// 	(author) => author.id === user.id,
		// );
		// if (isAuthor && ["needs_revision", "draft"].includes(publication.status)) {
		// 	return true;
		// }

		return false;
	})();

	return (
		<ContentLayout>
			<div className="mb-8 flex items-center justify-between">
				<button
					type="button"
					onClick={() => window.history.back()}
					className="inline-flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900"
				>
					<ArrowLeft className="h-4 w-4" />
                    <p className="">
                        Back to Publications
                    </p>
				</button>

				{canEdit && (
					<Link href={route("publications.edit", publication.slug)}>
						<Button variant="outline" className="gap-2">
							<Pencil className="h-4 w-4" />
							Edit Publication
						</Button>
					</Link>
				)}
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
				<article className="min-h-[500px] md:col-span-2">
					<div className="mb-4 flex flex-wrap items-center gap-2">
						<TagIcon className="h-4 w-4 text-gray-400" />
						{publication.tags.map((tag) => (
							<Badge key={tag.id} variant="secondary">
								{tag.name}
							</Badge>
						))}
					</div>

					<h1 className="mb-4 font-bold text-4xl">{publication.title}</h1>
					<p className="mb-2 text-gray-500">Published on {formattedDate}</p>
					<p className="mb-6 text-gray-500">
						By:{" "}
						{publication.authors
							?.map(
								(author) =>
									`${author?.member?.first_name} ${author?.member?.last_name}`,
							)
							.join(", ")}
					</p>

					<a
						href={publication.publication_file_url ?? '#'}
						download
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button className="mb-8 gap-2">
							<Download className="h-4 w-4" />
							Download PDF
						</Button>
					</a>

					<div className="prose max-w-none">
						<p>{publication.abstract}</p>
					</div>
				</article>

				<aside className="mt-12 md:col-span-1 md:mt-0">
					<h2 className="mb-4 border-b pb-2 font-bold text-2xl">
						Related Publications
					</h2>
					<div className="space-y-8">
						{relatedPublications.length > 0 ? (
							relatedPublications.map((related) => (
								<PublicationCard
									key={related.id}
									tags={related.tags}
									slug={related.slug}
									title={related.title}
									abstract={related.abstract}
									published_at={related.published_at}
									authors={related.authors}
								/>
							))
						) : (
							<p className="text-gray-500 text-sm">
								No related publications found.
							</p>
						)}
					</div>
				</aside>
			</div>
		</ContentLayout>
	);
};

PublicationShowPage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title={(page as any).props.publication.title} />
);

export default PublicationShowPage;
