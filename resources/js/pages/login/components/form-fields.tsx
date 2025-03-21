import { FormField } from "@/components/shared/form-field";
import type { LoginFormData } from "@/pages/login/components/login-form";
import type React from "react";

interface FormFieldsProps {
	data: LoginFormData;
	errors: Record<string, string>;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	disabled: boolean;
}

interface FieldConfig {
	id: keyof Omit<LoginFormData, "remember">;
	label: string;
	type: string;
	placeholder?: string;
	required: boolean;
}

export default function FormFields({
	data,
	errors,
	handleChange,
	disabled,
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
					disabled={disabled}
					onChange={handleChange}
				/>
			))}
		</div>
	);
}
