import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Save } from "lucide-react";

interface FormFooterProps {
	processing: boolean;
	isEdit: boolean;
}

export default function FormFooter({ processing, isEdit }: FormFooterProps) {
	return (
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
						? "Update Publication"
						: "Create Publication"}
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
	);
}
