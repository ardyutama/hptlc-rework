import {Publication, Tag} from "@/types";
import {useForm} from "@inertiajs/react";

export interface PublicationFormProps {
    publication ?: Publication;
    tags: Tag;
    isEdit: false;
}

export interface PublicationFormData {
    title: string;
    abstract: string;
}

export default function PublicationForm({
    publication,
tags
}: PublicationFormProps) {
    const {data, setData, post, put, processing, errors, clearErrors} =
        useForm<PublicationFormData>({
            title: publication?.title || "",
            abstract: publication?.abstract || "",
        });

}
