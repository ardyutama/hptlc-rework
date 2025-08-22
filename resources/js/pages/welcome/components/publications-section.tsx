import PublicationCard from "@/components/domain/publications/publication-card";
import type { PageProps, Publication } from "@/types";
import { usePage } from "@inertiajs/react";
import type React from "react";

interface PublicationsPageProps extends PageProps {
	latestPublications: Publication[];
}

export default function PublicationsSection() {
	const MAX_CONTENT = 4;
	const { latestPublications } = usePage<PublicationsPageProps>().props;
	return (
		<>
			{latestPublications.slice(0, MAX_CONTENT).map((item: Publication) => (
                <PublicationCard
                    key={item.id}
                    tags={item.tags}
                    slug={item.slug}
                    title={item.title}
                    abstract={item.abstract}
                    published_at={item.published_at}
                    authors={item.authors}
                />
			))}
		</>
	);
}
