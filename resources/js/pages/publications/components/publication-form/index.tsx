import {Publication, Tag} from "@/types";
import {useForm} from "@inertiajs/react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import type {FormErrors} from "@/pages/articles/components/article-form/types";
import TagsSelector from "@/pages/articles/components/article-form/tag-selector";
import PublicationBasicInfo from "@/pages/publications/components/publication-form/publication-basic-info";
import FormFooter from "@/pages/publications/components/publication-form/form-footer";
import PublicationFileUpload from "@/pages/publications/components/publication-form/publication-file-upload";
import ConfirmationDialog from "@/components/common/confirmation-dialog";
import {useState} from "react";

export interface PublicationFormProps {
    publication ?: Publication;
    tags: Tag[];
    isEdit?: false;
}

export type PublicationFormData = {
    title: string;
    abstract: string;
    publication_file: File | null;
    existing_tag_ids: string[];
    new_tag_names: string[];
}

export default function PublicationForm({
    publication,
    tags,
    isEdit = false
}: PublicationFormProps) {
    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
    const {data, setData, post, put, processing, errors, clearErrors} =
        useForm<PublicationFormData>({
            title: publication?.title || "",
            abstract: publication?.abstract || "",
            publication_file: publication?.publication_file || null,
            existing_tag_ids: publication?.tags?.map((tag) => tag.id) || [],
            new_tag_names: [],
        });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        clearErrors();
        setConfirmModalOpen(true);
    };

    const handleConfirmSubmit = () => {
        const url = isEdit && publication?.id
            ? route("publications.update", publication.id)
            : route("publications.store");

        post(url, {
            forceFormData: true,
            onSuccess: () => setConfirmModalOpen(false),
            onError: () => setConfirmModalOpen(false),
        });
    };

    return (
        <>
            <div className="mx-auto max-w-4xl pb-12">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            {isEdit ? "Edit Publication" : "Create New Publication"}
                        </CardTitle>
                        <CardDescription>
                            {isEdit
                                ? "Update your publication details, content, and settings."
                                : "Create a new publication by filling out the form below."}
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-6 p-6">
                            <PublicationBasicInfo
                                data={data}
                                setData={setData}
                                errors={errors as FormErrors}/>
                            <PublicationFileUpload
                                file={data.publication_file}
                                onFileChange={(file) => setData("publication_file", file)}
                                error={errors.publication_file}
                                isProcessing={processing}/>
                            <TagsSelector
                                tags={tags}
                                selectedExistingTagIds={data.existing_tag_ids}
                                setSelectedExistingTagIds={(ids) => setData("existing_tag_ids", ids)}
                                newTagNames={data.new_tag_names}
                                setNewTagNames={(names) => setData("new_tag_names", names)}
                                errors={errors as FormErrors}/>
                        </CardContent>

                        <FormFooter processing={processing} isEdit={isEdit}/>
                    </form>
                </Card>
            </div>
            <ConfirmationDialog
                open={isConfirmModalOpen}
                onOpenChange={setConfirmModalOpen}
                onConfirm={handleConfirmSubmit}
                isProcessing={processing}
                title="Confirm Submission"
                description="Are you sure you want to submit this publication for review? You will not be able to edit it while it is being reviewed."
                confirmText="Submit for Review"
            />
        </>
    )
}
