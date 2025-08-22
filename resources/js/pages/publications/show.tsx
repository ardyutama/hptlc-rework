import { MainLayout } from "@/layouts/main-layout";
import type { PageProps, Publication } from "@/types";
import { ArrowLeft, Download, Tag as TagIcon } from "lucide-react";
import ContentLayout from "@/layouts/content-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PublicationCard from "@/components/domain/publications/publication-card";
import { format } from "date-fns";

interface PublicationShowProps extends PageProps {
    publication: Publication;
    relatedPublications: Publication[];
}

const PublicationShowPage = ({ publication, relatedPublications }: PublicationShowProps) => {

    const formattedDate = publication.published_at
        ? format(new Date(publication.published_at), "MMMM d, yyyy")
        : "Date not available";

    return (
        <ContentLayout>
            <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Publications
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
                <article className="md:col-span-2 min-h-[500px]">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <TagIcon className="h-4 w-4 text-gray-400" />
                        {publication.tags.map((tag) => (
                            <Badge key={tag.id} variant="secondary">{tag.name}</Badge>
                        ))}
                    </div>

                    <h1 className="font-bold text-4xl mb-4">{publication.title}</h1>
                    <p className="text-gray-500 mb-2">
                        Published on {formattedDate}
                    </p>
                    <p className="text-gray-500 mb-6">
                        By: {publication.authors?.map((author) => `${author?.member?.first_name} ${author?.member?.last_name}`).join(", ")}
                    </p>

                    <a href={publication.publication_file_url} download target="_blank" rel="noopener noreferrer">
                        <Button className="mb-8 gap-2">
                            <Download className="h-4 w-4" />
                            Download PDF
                        </Button>
                    </a>

                    <div className="prose max-w-none">
                        <p>{publication.abstract}</p>
                    </div>
                </article>

                <aside className="md:col-span-1 mt-12 md:mt-0">
                    <h2 className="font-bold text-2xl mb-4 border-b pb-2">Related Publications</h2>
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
                            <p className="text-sm text-gray-500">No related publications found.</p>
                        )}
                    </div>
                </aside>
            </div>
        </ContentLayout>
    );
};

PublicationShowPage.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title={ (page as any).props.publication.title } />
);

export default PublicationShowPage;
