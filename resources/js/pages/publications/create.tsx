import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type { PageProps } from "@/types";
import type React from "react";

interface PublicationCreatePageProps extends PageProps {
    tags: { id: string; name: string }[];
}

function PublicationCreatePage({ tags }: PublicationCreatePageProps) {
    return (
        <ContentLayout>
            <div className="mb-8 ">
                <h1 className="font-bold text-3xl tracking-tight">
                    Create New Publication
                </h1>
                <p className="mt-2 text-gray-500">
                    Compose a new article using Markdown formatting.
                </p>
            </div>
            {/*<ArticleForm tags={tags} statuses={statuses} isEdit={false} />*/}
        </ContentLayout>
    );
}

PublicationCreatePage.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title="Create Publication" />
);

export default PublicationCreatePage;
