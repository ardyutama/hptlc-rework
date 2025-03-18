import { FormField } from "@/components/custom/form-field";
import type React from "react";

interface FormFieldsProps {
	data: Record<string, any>;
	errors: Record<string, string>;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FieldConfig {
	id: string;
	label: string;
	type: string;
	placeholder?: string;
	required: boolean;
}

export default function FormFields({
	data,
	errors,
	handleChange,
}: FormFieldsProps) {
	const fields: FieldConfig[] = [
		{
			id: "email",
			label: "Email",
			type: "email",
			required: true,
		},
		{
			id: "password",
			label: "Password",
			type: "password",
			required: true,
		},
	];

	return (
		<div className="grid gap-6">
			{fields.map((field) => (
				<FormField
					key={field.id}
					id={field.id}
					label={field.label}
					type={field.type}
					placeholder={field.placeholder}
					required={field.required}
					value={data[field.id] || ""}
					error={errors[field.id]}
					onChange={handleChange}
				/>
			))}
		</div>
	);
}
