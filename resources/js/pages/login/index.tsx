import AuthLayout from "@/layouts/auth-layout";
import type React from "react";
import { LoginForm } from "./components/login-form";

const LoginPage = () => {
	return <LoginForm />;
};

LoginPage.layout = (page: React.ReactNode) => (
	<AuthLayout children={page} title="HPTLC Portal Login" />
);
export default LoginPage;
