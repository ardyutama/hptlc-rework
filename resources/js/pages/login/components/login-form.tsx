import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function LoginForm({
	className,
	...props
}: React.ComponentPropsWithoutRef<"form">) {
	return (
		<form className={cn("flex flex-col gap-6", className)} {...props}>
			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-xl tracking-tight">
					Welcome Back to Your HPTLC Portal
				</h1>
				<p className="text-balance text-muted-foreground text-sm">
					Access your personalized chromatography resources, analysis tools, and
					research materials
				</p>
			</div>
			<div className="grid gap-6">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
						<p className="ml-auto text-sm underline-offset-4 hover:underline">
							Forgot your password?
						</p>
					</div>
					<Input id="password" type="password" required />
				</div>
				<Button type="submit" className="w-full">
					Login
				</Button>
			</div>
			<div className="text-center text-sm">
				New to HPTLC? <br />
				<a href="/register" className="underline underline-offset-4">
					Register for an account to access our complete suite of chromatography
					tools
				</a>
			</div>
		</form>
	);
}
