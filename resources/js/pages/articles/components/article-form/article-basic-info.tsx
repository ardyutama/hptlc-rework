import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ArticleFormData, FormErrors } from "./types";

interface ArticleBasicInfoProps {
	data: ArticleFormData;
	setData: (
		key: keyof ArticleFormData,
		value: ArticleFormData[keyof ArticleFormData],
	) => void;
	errors: FormErrors;
	statuses: string[];
}

export default function ArticleBasicInfo({
	data,
	setData,
	errors,
	statuses,
}: ArticleBasicInfoProps) {
	return (
		<>
			<div className="space-y-2" data-error={errors.title ? true : undefined}>
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

			<div className="space-y-2" data-error={errors.status ? true : undefined}>
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

			<div className="space-y-2" data-error={errors.excerpt ? true : undefined}>
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
					A short summary that appears in article listings (max 500 characters).
				</p>
			</div>
		</>
	);
}
