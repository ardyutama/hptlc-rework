import DrawerNavigation from "@/components/custom/drawer-navigation";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { Menu } from "lucide-react";
export default function Header() {
	return (
		<header className="flex h-[100px] w-full justify-center bg-gray-100">
			<div className="relative flex w-full max-w-screen-md items-center justify-between">
				<div className="ml-6">
					<DrawerNavigation>
						<Menu />
					</DrawerNavigation>
				</div>
				<Link href="/">
					<img
						src="/assets/img/hptlc-indonesia-logo.png"
						width="148"
						alt="hptlc_logo"
					/>
				</Link>
				<div className="flex gap-2">
					<Link href={"/register"}>
						<Button variant="outline" className="mr-2 h-8 rounded-2xl">
							Join us
						</Button>
					</Link>
					<Link href={"/login"}>
						<Button className="mr-2 hidden h-8 rounded-2xl md:inline-flex">
							Log in
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
}
