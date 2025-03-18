import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
	id: string;
	label: string;
	type: string;
	placeholder?: string;
	required: boolean;
	value: string;
	error?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FormField({
	id,
	label,
	type,
	placeholder = "",
	required,
	value,
	error,
	onChange,
}: FormFieldProps) {
	return (
		<div className="grid gap-2">
			<div className="flex items-center justify-between">
				<Label htmlFor={id}>{label}</Label>
				{error && <span className="text-red-500 text-xs">{error}</span>}
			</div>
			<Input
				id={id}
				type={type}
				placeholder={placeholder}
				required={required}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
