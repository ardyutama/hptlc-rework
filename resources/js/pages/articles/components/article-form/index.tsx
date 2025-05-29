import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import ArticleBasicInfo from "./article-basic-info";
import ContentEditor from "./content-editor";
import FeaturedImage from "./featured-image";
import FormFooter from "./form-footer";
import MarkdownPreviewDialog from "./markdown-preview-dialog";
import TagsSelector from "./tag-selector";
import type { ArticleFormData, ArticleFormProps, FormErrors } from "./types";

export default function ArticleForm({
	article,
	markdownContent,
	tags,
	statuses,
	isEdit = false,
}: ArticleFormProps) {
	const { data, setData, post, put, processing, errors, clearErrors } =
		useForm<ArticleFormData>({
			title: article?.title || "",
			excerpt: article?.excerpt || "",
			markdown_content: markdownContent || "",
			featured_image: null,
			existing_tag_ids: article?.tags?.map((tag) => tag.id) || [],
			new_tag_names: [],
			status: article?.status || "draft",
			remove_featured_image: false,
		});

	const [markdownFile, setMarkdownFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(
		article?.featured_image ? `/storage/${article.featured_image}` : null,
	);
	const [showMarkdownPreview, setShowMarkdownPreview] =
		useState<boolean>(false);
	const [markdownPreview, setMarkdownPreview] = useState<string>("");

	console.log(data);
    console.log(errors);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		clearErrors();

		if (isEdit && article?.id) {
			put(route("articles.update", article.id) , {
				forceFormData: true,
				onError: scrollToFirstError,
				onSuccess: () => {
					console.log('Articles Updated with this Data', data)
				}
			});
		} else {
			post(route("articles.store"), {
				forceFormData: true,
				onError: scrollToFirstError,
				onSuccess: () => {
					console.log('Articles Created with this Data', data)
				}
			});
		}
	};

	const scrollToFirstError = () => {
        console.log('Error with this Data', data)
		const firstErrorElement = document.querySelector("[data-error]");
		if (firstErrorElement) {
			firstErrorElement.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};

	const handlePreviewMarkdown = () => {
		setMarkdownPreview(data.markdown_content);
		setShowMarkdownPreview(true);
	};

	return (
		<div className="mx-auto max-w-4xl pb-12">
			<Card className="shadow-md">
				<CardHeader>
					<CardTitle className="font-bold text-2xl">
						{isEdit ? "Edit Article" : "Create New Article"}
					</CardTitle>
					<CardDescription>
						{isEdit
							? "Update your article details, content, and settings."
							: "Create a new article by filling out the form below."}
					</CardDescription>
				</CardHeader>
				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-6 p-6">
						<ArticleBasicInfo
							data={data}
							setData={setData}
							errors={errors as FormErrors}
							statuses={statuses}
						/>

						<TagsSelector
							tags={tags}
							selectedExistingTagIds={data.existing_tag_ids}
							setSelectedExistingTagIds={(ids) =>
								setData("existing_tag_ids", ids)
							}
							newTagNames={data.new_tag_names}
							setNewTagNames={(names) => setData("new_tag_names", names)}
							errors={errors as FormErrors}
						/>

						<Separator />

						<ContentEditor
							data={data}
							setData={setData}
							errors={errors as FormErrors}
							markdownFile={markdownFile}
							setMarkdownFile={setMarkdownFile}
							handlePreviewMarkdown={handlePreviewMarkdown}
						/>

						<Separator />

						<FeaturedImage
							imagePreview={imagePreview}
							setImagePreview={setImagePreview}
							setData={setData}
							errors={errors as FormErrors}
						/>
					</CardContent>

					<FormFooter processing={processing} isEdit={isEdit} />
				</form>
			</Card>

			<MarkdownPreviewDialog
				open={showMarkdownPreview}
				setOpen={setShowMarkdownPreview}
				markdownPreview={markdownPreview}
			/>
		</div>
	);
}
