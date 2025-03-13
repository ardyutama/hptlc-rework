import AuthLayout from "@/layouts/auth-layout";
import { RegisterForm } from "@/pages/register/components/register-form";
import type React from "react";
const RegisterPage = () => {
	return <RegisterForm />;
};

RegisterPage.layout = (page: React.ReactNode) => (
	<AuthLayout children={page} title="Join the HPTLC Community" />
);

export default RegisterPage;
