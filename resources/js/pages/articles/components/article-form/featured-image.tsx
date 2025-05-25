import { Button } from "@/components/ui/button";
import { ImageIcon, X } from "lucide-react";
import { useRef } from "react";
import type { ArticleFormData, FormErrors } from "./types";

interface FeaturedImageProps {
	imagePreview: string | null;
	setImagePreview: (preview: string | null) => void;
	setData: (
		key: keyof ArticleFormData,
		value: ArticleFormData[keyof ArticleFormData],
	) => void;
	errors: FormErrors;
}

export default function FeaturedImage({
	imagePreview,
	setImagePreview,
	setData,
	errors,
}: FeaturedImageProps) {
	const imageInputRef = useRef<HTMLInputElement>(null);

	const triggerImageFileInput = () => {
		if (imageInputRef.current) {
			imageInputRef.current.click();
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
		setData("remove_featured_image", true);
		setImagePreview(null);
		if (imageInputRef.current) {
			imageInputRef.current.value = "";
		}
	};

	return (
		<div
			className="space-y-2"
			data-error={errors.featured_image ? true : undefined}
		>
			<label htmlFor="featured-image" className="block font-medium text-base">
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
	);
}
