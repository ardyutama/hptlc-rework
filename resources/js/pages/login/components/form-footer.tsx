import { Link } from "@inertiajs/react";
import type React from "react";

export default function FormFooter() {
	return (
		<>
			<Link href={"#"} className="flex text-sm md:justify-end">
				Forgot Password?
			</Link>
			<div className="text-center text-sm">
				New to HPTLC? <br />
				<Link href="/register" className="underline underline-offset-4">
					Register for an account to access our complete suite of chromatography
					tools
				</Link>
			</div>
		</>
	);
}
