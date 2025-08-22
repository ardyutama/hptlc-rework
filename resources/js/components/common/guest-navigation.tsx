import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { UserPlus } from "lucide-react";

export default function GuestNavigation() {
	return (
		<>
			<Link href={"/register"}>
				<Button variant="outline" size="sm" className="hidden md:flex">
					<UserPlus className="mr-2 h-4 w-4" />
					Join Us
				</Button>
			</Link>
			<Link href={"/login"}>
				<Button size="sm" className="bg-blue-500">
					Login
				</Button>
			</Link>
		</>
	);
}
