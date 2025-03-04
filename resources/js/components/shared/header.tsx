import DrawerNavigation from "@/components/custom/drawer-navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
export default function Header() {
	return (
		<header className="flex h-[100px] w-full justify-center bg-gray-100">
			<div className="relative flex w-full max-w-screen-md items-center justify-between">
				<div className="ml-6">
					<DrawerNavigation>
						<Button size="icon" variant="ghost">
							<Menu />
						</Button>
					</DrawerNavigation>
				</div>
				<img
					src="/assets/img/hptlc-indonesia-logo.png"
					width="148"
					alt="hptlc_logo"
				/>
				<Button variant="outline" className="mr-2 h-8 rounded-2xl">
					Sign In
				</Button>
			</div>
		</header>
	);
}
