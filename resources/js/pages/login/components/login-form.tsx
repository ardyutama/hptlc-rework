import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useForm } from "@inertiajs/react";
import type React from "react";
import FormFields from "./form-fields";
import FormFooter from "./form-footer";
import FormHeader from "./form-header";

export interface LoginFormData {
	email: string;
	password: string;
	remember: boolean;
}

type LoginFormProps = React.ComponentPropsWithoutRef<"form">;

export function LoginForm({ className, ...props }: LoginFormProps) {
	const form = useForm({
		email: "",
		password: "",
		remember: false as boolean,
	});

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { id, value, type, checked } = e.target;

		if (type === "checkbox") {
			form.setData(id as keyof LoginFormData, checked);
		} else {
			form.setData(id as keyof LoginFormData, value);
		}
	}

	function submit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		form.post(route("login"));
	}

	return (
		<form
			className={cn("flex flex-col gap-6", className)}
			onSubmit={submit}
			{...props}
		>
			<FormHeader />

			<div className="grid gap-6">
				<FormFields
					data={form.data}
					errors={form.errors}
					handleChange={handleChange}
					disabled={form.processing}
				/>

				<div className="flex items-center space-x-2">
					<Checkbox
						id="remember"
						checked={form.data.remember}
						onCheckedChange={(checked) =>
							form.setData("remember", checked as boolean)
						}
					/>
					<label
						htmlFor="remember"
						className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Remember Me
					</label>
				</div>
				<Button type="submit" className="w-full" disabled={form.processing}>
					Login
				</Button>
			</div>
			<FormFooter />
		</form>
	);
}
