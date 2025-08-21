import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type {PageProps, Tag} from "@/types";
import type React from "react";
import PublicationForm from "@/pages/publications/components/publication-form";

interface PublicationCreatePageProps extends PageProps {
    tags: Tag[];
}

function PublicationCreatePage({ tags }: PublicationCreatePageProps) {
    return (
        <ContentLayout>
            <PublicationForm tags={tags} />
        </ContentLayout>
    );
}

PublicationCreatePage.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title="Create Publication" />
);

export default PublicationCreatePage;
