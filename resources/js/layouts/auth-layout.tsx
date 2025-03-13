import { Head, Link } from "@inertiajs/react";
import type React from "react";

type AuthLayoutProps = {
	title: string;
	children: React.ReactNode;
};
const AuthLayout = ({ title, children }: AuthLayoutProps) => {
	return (
		<>
			<Head title={title} />
			<div className="grid min-h-svh lg:grid-cols-2">
				<div className="relative hidden bg-muted lg:block">
					<div className="h-full w-full bg-slate-50" />
				</div>
				<div className="flex flex-col gap-4 p-6 md:p-10">
					<div className="flex flex-1 items-center justify-center">
						<div className="flex w-full max-w-sm flex-col">
							<Link href="/">
								<img
									src="/assets/img/hptlc-indonesia-logo.png"
									width="240"
									alt="hptlc_logo"
									className="my-8"
								/>
							</Link>
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthLayout;
