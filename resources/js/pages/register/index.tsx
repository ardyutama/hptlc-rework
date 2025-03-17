import AuthLayout from "@/layouts/auth-layout";
import { RegisterForm } from "@/pages/register/components/register-form";
import type React from "react";
const RegisterPage = () => {
	return (
		<div className="container mx-auto max-w-md py-8">
			<RegisterForm />
		</div>
	);
};

RegisterPage.layout = (page: React.ReactNode) => (
	<AuthLayout children={page} title="Join the HPTLC Community" />
);

export default RegisterPage;
