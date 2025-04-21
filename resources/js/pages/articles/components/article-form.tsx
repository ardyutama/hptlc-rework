import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import type { ArticleFormProps } from "@/types";
import { useForm } from "@inertiajs/react";
import { FileText, Image as ImageIcon, Save, Upload, X } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function ArticleForm({
	article,
	markdownContent,
	tags,
	statuses,
	isEdit = false,
}: ArticleFormProps) {
	const { data, setData, post, put, processing, errors, reset, clearErrors } =
		useForm({
			title: article?.title || "",
			excerpt: article?.excerpt || "",
			markdown_content: markdownContent || "",
			featured_image: null as File | null,
			tags: article?.tags?.map((tag) => tag.id) || [],
			status: article?.status || "draft",
			remove_featured_image: false,
		});

	const [markdownFile, setMarkdownFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(
		article?.featured_image ? `/storage/${article.featured_image}` : null,
	);
	const [showMarkdownPreview, setShowMarkdownPreview] = useState(false);
	const [markdownPreview, setMarkdownPreview] = useState("");
	const markdownInputRef = useRef<HTMLInputElement>(null);
	const imageInputRef = useRef<HTMLInputElement>(null);

    console.log(errors);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		clearErrors();

		if (isEdit && article?.id) {
			put(route("articles.update", article.id), {
				onSuccess: () => {
					toast("Article updated", {
						description: "Your article has been updated successfully.",
					});
				},
				onError: () => {
					const firstErrorElement = document.querySelector("[data-error]");
					if (firstErrorElement) {
						firstErrorElement.scrollIntoView({
							behavior: "smooth",
							block: "center",
						});
					}
				},
			});
		} else {
			post(route("articles.store"), {
				onSuccess: () => {
					// reset();
					// setMarkdownFile(null);
					// setImagePreview(null);
					toast("Article created", {
						description: "Your article has been created successfully.",
					});
				},
				onError: () => {
					// Scroll to the first error
					const firstErrorElement = document.querySelector("[data-error]");
					if (firstErrorElement) {
						firstErrorElement.scrollIntoView({
							behavior: "smooth",
							block: "center",
						});
					}
				},
			});
		}
	};

	const handleMarkdownUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			if (file.type !== "text/markdown" && !file.name.endsWith(".md")) {
				toast("Invalid file", {
					description: "Please upload a markdown (.md) file.",
				});
				return;
			}

			setMarkdownFile(file);
			const reader = new FileReader();
			reader.onload = (e) => {
				const content = e.target?.result as string;
				setData("markdown_content", content);
			};
			reader.readAsText(file);
		}
	};

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setData("featured_image", file);
			setData("remove_featured_image", false);

			const reader = new FileReader();
			reader.onload = (e) => {
				setImagePreview(e.target?.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleRemoveImage = () => {
		setData("featured_image", null);
		// @ts-ignore
		setData("remove_featured_image", true);
		setImagePreview(null);
		if (imageInputRef.current) {
			imageInputRef.current.value = "";
		}
	};

	const triggerMarkdownFileInput = () => {
		if (markdownInputRef.current) {
			markdownInputRef.current.click();
		}
	};

	const triggerImageFileInput = () => {
		if (imageInputRef.current) {
			imageInputRef.current.click();
		}
	};

	const handlePreviewMarkdown = () => {
		setMarkdownPreview(data.markdown_content);
		setShowMarkdownPreview(true);
	};

	const handleTagToggle = (tagId: string) => {
		const currentTags = [...data.tags];
		const tagIndex = currentTags.indexOf(tagId);

		if (tagIndex === -1) {
			currentTags.push(tagId);
		} else {
			currentTags.splice(tagIndex, 1);
		}

		setData("tags", currentTags);
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
						<div
							className="space-y-2"
							data-error={errors.title ? true : undefined}
						>
							<label htmlFor="title" className="block font-medium text-base">
								Title
							</label>
							<Input
								id="title"
								name="title"
								value={data.title}
								onChange={(e) => setData("title", e.target.value)}
								placeholder="Enter article title"
								className="text-lg"
							/>
							{errors.title && (
								<p className="mt-1 font-medium text-red-500 text-sm">
									{errors.title}
								</p>
							)}
						</div>

						<div
							className="space-y-2"
							data-error={errors.status ? true : undefined}
						>
							<label htmlFor="status" className="block font-medium text-base">
								Status
							</label>
							<Select
								value={data.status}
								onValueChange={(value) => setData("status", value)}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select status" />
								</SelectTrigger>
								<SelectContent>
									{statuses.map((status) => (
										<SelectItem key={status} value={status}>
											<span className="capitalize">{status}</span>
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							{errors.status && (
								<p className="mt-1 font-medium text-red-500 text-sm">
									{errors.status}
								</p>
							)}
							<p className="text-gray-500 text-sm">
								Draft: Save without publishing. Published: Visible to readers.
								Archived: Hidden from listings.
							</p>
						</div>

						<div
							className="space-y-2"
							data-error={errors.excerpt ? true : undefined}
						>
							<label htmlFor="excerpt" className="block font-medium text-base">
								Excerpt
							</label>
							<Textarea
								id="excerpt"
								name="excerpt"
								value={data.excerpt}
								onChange={(e) => setData("excerpt", e.target.value)}
								placeholder="Brief summary of the article (optional)"
								className="h-24 resize-y"
							/>
							{errors.excerpt && (
								<p className="mt-1 font-medium text-red-500 text-sm">
									{errors.excerpt}
								</p>
							)}
							<p className="text-gray-500 text-sm">
								A short summary that appears in article listings (max 500
								characters).
							</p>
						</div>

						<div
							className="space-y-2"
							data-error={errors.tags ? true : undefined}
						>
							<Label htmlFor="tags" className="block font-medium text-base">
								Tags
							</Label>
							<div className="flex flex-wrap gap-2 rounded-md border p-2">
								{tags.map((tag) => (
									<Badge
										id="tags"
										key={tag.id}
										variant={data.tags.includes(tag.id) ? "default" : "outline"}
										className="cursor-pointer"
										onClick={() => handleTagToggle(tag.id)}
									>
										{tag.name}
									</Badge>
								))}
							</div>
							{errors.tags && (
								<p className="mt-1 font-medium text-red-500 text-sm">
									{errors.tags}
								</p>
							)}
						</div>

						<Separator />

						<div
							className="space-y-2"
							data-error={errors.markdown_content ? true : undefined}
						>
							<label
								htmlFor="markdown_content"
								className="block font-medium text-base"
							>
								Article Content (Markdown)
							</label>
							<div className="flex flex-col gap-2">
								<div className="flex flex-wrap items-center gap-2">
									<Button
										type="button"
										onClick={triggerMarkdownFileInput}
										variant="outline"
										className="flex items-center gap-2"
									>
										<Upload size={16} />
										Upload Markdown
									</Button>
									{data.markdown_content && (
										<Button
											type="button"
											onClick={handlePreviewMarkdown}
											variant="outline"
											className="flex items-center gap-2"
										>
											<FileText size={16} />
											Preview
										</Button>
									)}
									{markdownFile && (
										<Badge
											variant="outline"
											className="flex items-center gap-1"
										>
											<FileText size={14} />
											{markdownFile.name}
										</Badge>
									)}
									{!markdownFile && data.markdown_content && (
										<Badge
											variant="outline"
											className="flex items-center gap-1"
										>
											<FileText size={14} />
											Content loaded
										</Badge>
									)}
								</div>
								<input
									id="markdown_content"
									type="file"
									ref={markdownInputRef}
									onChange={handleMarkdownUpload}
									accept=".md,text/markdown"
									className="hidden"
								/>
								<Textarea
									name="markdown_content"
									value={data.markdown_content}
									onChange={(e) => setData("markdown_content", e.target.value)}
									className="h-64 resize-y font-mono text-sm"
									placeholder="# Your article content in Markdown format"
								/>
								{errors.markdown_content && (
									<p className="mt-1 font-medium text-red-500 text-sm">
										{errors.markdown_content}
									</p>
								)}
							</div>
						</div>

						<Separator />

						<div
							className="space-y-2"
							data-error={errors.featured_image ? true : undefined}
						>
							<label
								htmlFor="featured-image"
								className="block font-medium text-base"
							>
								Featured Image
							</label>
							<div className="flex flex-col gap-4">
								<div className="flex items-center gap-2">
									<Button
										type="button"
										onClick={triggerImageFileInput}
										variant="outline"
										className="flex items-center gap-2"
									>
										<ImageIcon size={16} />
										{imagePreview ? "Change Image" : "Upload Image"}
									</Button>
									{imagePreview && (
										<Button
											type="button"
											onClick={handleRemoveImage}
											variant="outline"
											className="flex items-center gap-2"
										>
											<X size={16} />
											Remove
										</Button>
									)}
								</div>
								<input
									id="featured-image"
									type="file"
									ref={imageInputRef}
									onChange={handleImageUpload}
									accept="image/*"
									className="hidden"
								/>
								{imagePreview && (
									<div className="relative mt-2 w-full max-w-md overflow-hidden rounded-md border border-gray-200">
										<img
											src={imagePreview}
											alt="Featured preview"
											className="h-auto max-h-60 w-full object-cover"
										/>
									</div>
								)}
								{errors.featured_image && (
									<p className="mt-1 font-medium text-red-500 text-sm">
										{errors.featured_image}
									</p>
								)}
								<p className="text-gray-500 text-sm">
									Upload an image to represent your article. Max size: 2MB.
								</p>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col items-center gap-4 border-t p-6 sm:flex-row sm:justify-between">
						<Button
							type="submit"
							disabled={processing}
							className="flex w-full items-center gap-2 sm:w-auto"
						>
							<Save size={16} />
							{processing
								? "Saving..."
								: isEdit
									? "Update Article"
									: "Create Article"}
						</Button>
						<Button
							type="button"
							variant="outline"
							onClick={() => window.history.back()}
							className="w-full sm:w-auto"
						>
							Cancel
						</Button>
					</CardFooter>
				</form>
			</Card>

			<Dialog open={showMarkdownPreview} onOpenChange={setShowMarkdownPreview}>
				<DialogContent className="max-h-[80vh] max-w-4xl overflow-y-auto">
					<DialogHeader>
						<DialogTitle>Markdown Preview</DialogTitle>
						<DialogDescription>
							Preview how your markdown content will be rendered
						</DialogDescription>
					</DialogHeader>
					<div className="prose prose-sm sm:prose mt-4 max-w-none rounded-md border bg-gray-50 p-4">
						<pre className="whitespace-pre-wrap font-mono text-sm">
							{markdownPreview}
						</pre>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
