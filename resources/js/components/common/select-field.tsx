import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const SelectField = ({
	label,
	value,
	onChange,
	disabled,
	error,
	options,
}: {
	label: string;
	value: string;
	onChange: (value: string) => void;
	disabled: boolean;
	error?: string;
	options: { value: string; label: string }[];
}) => (
	<div className="space-y-2">
		<Label htmlFor={label}>{label}</Label>
		<Select
			disabled={disabled}
			value={value}
			onValueChange={(value) => onChange(value)}
		>
			<SelectTrigger>
				<SelectValue placeholder={`Select ${label.toLowerCase()}`} />
			</SelectTrigger>
			<SelectContent>
				{options.map((option) => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
		{error && <p className="text-red-500 text-sm">{error}</p>}
	</div>
);

export default SelectField;
