import { FormField } from "./form-field";

interface FormFieldsProps {
	data: Record<string, string>;
	errors: Record<string, string>;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FieldConfig {
	id: string;
	label: string;
	type: string;
	placeholder: string;
	required: boolean;
}

export function FormFields({ data, errors, handleChange }: FormFieldsProps) {
	const fields: FieldConfig[] = [
		{
			id: "first_name",
			label: "First Name",
			type: "text",
			placeholder: "Enter your first name",
			required: true,
		},
		{
			id: "last_name",
			label: "Last Name",
			type: "text",
			placeholder: "Enter your last name",
			required: true,
		},
		{
			id: "email",
			label: "Email",
			type: "email",
			placeholder: "Enter your professional or personal email address",
			required: true,
		},
		{
			id: "password",
			label: "Password",
			type: "password",
			placeholder: "Create a secure password (minimum 8 characters)",
			required: true,
		},
		{
			id: "password_confirmation",
			label: "Confirmation Password",
			type: "password",
			placeholder: "Verify your password",
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
