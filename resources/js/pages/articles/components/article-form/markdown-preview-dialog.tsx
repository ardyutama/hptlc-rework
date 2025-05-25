import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface MarkdownPreviewDialogProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	markdownPreview: string;
}

export default function MarkdownPreviewDialog({
	open,
	setOpen,
	markdownPreview,
}: MarkdownPreviewDialogProps) {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
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
	);
}
