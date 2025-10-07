import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type { PageProps, Publication, Tag, User } from "@/types";
import type React from "react";
import PublicationForm from "./components/publication-form";

interface PublicationEditPageProps extends PageProps {
	publication: Publication;
	tags: Tag[];
	users: User[];
}

function PublicationEditPage({ publication, tags }: PublicationEditPageProps) {
	return (
		<ContentLayout>
			<PublicationForm publication={publication} tags={tags} isEdit={true} />
		</ContentLayout>
	);
}

PublicationEditPage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Create Publication" />
);

export default PublicationEditPage;
