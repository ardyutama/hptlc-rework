import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";
import type { ArticleFormData, FormErrors } from "./types";

interface ContentEditorProps {
	data: ArticleFormData;
	setData: (
		key: keyof ArticleFormData,
		value: ArticleFormData[keyof ArticleFormData],
	) => void;
	errors: FormErrors;
	markdownFile: File | null;
	setMarkdownFile: (file: File | null) => void;
	handlePreviewMarkdown: () => void;
}

export default function ContentEditor({
	data,
	setData,
	errors,
	markdownFile,
	setMarkdownFile,
	handlePreviewMarkdown,
}: ContentEditorProps) {
	const markdownInputRef = useRef<HTMLInputElement>(null);

	const triggerMarkdownFileInput = () => {
		if (markdownInputRef.current) {
			markdownInputRef.current.click();
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

	return (
		<div
			className="space-y-2"
			data-error={errors.markdown_content ? true : undefined}
		>
			<label htmlFor="markdown_content" className="block font-medium text-base">
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
						<Badge variant="outline" className="flex items-center gap-1">
							<FileText size={14} />
							{markdownFile.name}
						</Badge>
					)}

					{!markdownFile && data.markdown_content && (
						<Badge variant="outline" className="flex items-center gap-1">
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
	);
}
