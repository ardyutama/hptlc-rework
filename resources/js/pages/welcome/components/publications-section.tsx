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
					id={item.id}
					tags={item.tags.map((tag) => tag.name)}
					hrefLink={item.slug}
					title={item.title}
					description={item.abstract}
					date={item.published_at}
					publicationPdfUrl={item.publication_file}
				/>
			))}
		</>
	);
}
