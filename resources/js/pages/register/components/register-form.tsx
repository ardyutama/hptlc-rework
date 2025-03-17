import { Button } from "@/components/ui/button";
import {useForm, usePage} from "@inertiajs/react";
import type React from "react";
import { FormFields } from "./form-fields";
import { FormFooter } from "./form-footer";
import { FormHeader } from "./form-header";

interface RegisterFormData {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

interface RegisterFormProps extends React.ComponentPropsWithoutRef<"form"> {
	className?: string;
}

export function RegisterForm({ className, ...props }: RegisterFormProps) {
	const form = useForm({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password_confirmation: "",
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { id, value } = e.target;
		form.setData(id as keyof RegisterFormData, value);
	}

	function submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		form.post(route("register"));
    }

	return (
		<form
			className={`flex flex-col gap-6 ${className || ""}`}
			onSubmit={submit}
			{...props}
		>
			<FormHeader />

			<FormFields data={form.data} errors={form.errors} handleChange={handleChange} />

			<Button type="submit" className="w-full" disabled={form.processing}>
				Register
			</Button>

			<FormFooter />
		</form>
	);
}
