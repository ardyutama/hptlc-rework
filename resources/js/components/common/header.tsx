import type { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { Menu } from "lucide-react";
import DrawerNavigation from "./drawer-navigation";
import GuestNavigation from "./guest-navigation";
import UserNavigation from "./user-navigation";

const navItems = [
	{
		id: 1,
		title: "Publications",
		url: "/publications",
	},
	{
		id: 2,
		title: "Articles",
		url: "/articles",
	},
	{
		id: 5,
		title: "About Us",
		url: "#",
	},
];

export default function Header() {
	const { auth } = usePage<PageProps>().props;
	const isAuthenticated = !!auth?.user;

	return (
		<header className="sticky top-0 z-40 flex w-full justify-center border-b bg-background/95 backdrop-blur">
			<div className="container flex h-16 items-center justify-between px-4 py-4">
				<div className="flex items-center gap-4">
					<div className="md:hidden">
						<DrawerNavigation items={navItems}>
							<Menu className="h-5 w-5" />
						</DrawerNavigation>
					</div>

					<Link href="/" className="flex items-center">
						<img
							src="/assets/img/hptlc-indonesia-logo.png"
							width="140"
							alt="HPTLC Indonesia Logo"
						/>
					</Link>

					<nav className="hidden items-center gap-6 text-sm md:flex">
						{navItems.map((item) => (
							<Link
								key={item.id}
								href={item.url}
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								{item.title}
							</Link>
						))}
					</nav>
				</div>

				<div className="flex items-center gap-2">
					{isAuthenticated ? (
						<UserNavigation user={auth?.user} />
					) : (
						<GuestNavigation />
					)}
				</div>
			</div>
		</header>
	);
}
