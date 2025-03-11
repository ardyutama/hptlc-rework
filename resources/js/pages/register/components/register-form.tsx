import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type React from "react";

export function RegisterForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	return (
		<form className={cn("flex flex-col gap-6", className)} {...props}>
			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-xl tracking-tight">
					Create Your HPTLC Account
				</h1>
				<p className="text-balance text-muted-foreground text-sm">
					Join thousands of scientists and researchers using our advanced
					chromatography tools and resources
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="name">Full Name</Label>
					<Input
						id="name"
						type="text"
						placeholder="Enter your full name"
						required
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="Enter your professional or personal email address"
						required
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
					</div>
					<Input
						id="password"
						type="password"
						required
						placeholder="Create a secure password (minimum 8 characters)"
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="confimPassword">Confirmation Password</Label>
					</div>
					<Input
						id="confimPassword"
						type="password"
						required
						placeholder="Verify your password"
					/>
				</div>
				<Button type="submit" className="w-full">
					Register
				</Button>
			</div>
			<div className="text-center text-sm">
				Have an account?{" "}
				<a href="/login" className="underline underline-offset-4">
					Back to Login Page
				</a>
			</div>
		</form>
	);
}
