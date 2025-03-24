import type React from "react";
import {MainLayout} from "@/layouts/main-layout";

function CreateArticle() {
    return (
        <div>This is Create Article</div>
    )
}

CreateArticle.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title="Create Articles" />
);

export default CreateArticle;
