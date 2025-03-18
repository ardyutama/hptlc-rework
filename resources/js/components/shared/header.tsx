import DrawerNavigation from "@/components/custom/drawer-navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { PageProps } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { LogOut, Menu, Settings, User, UserPlus } from "lucide-react";

export default function Header() {
	const { auth } = usePage<PageProps>().props;

	console.log(auth);
	// Get initials for avatar
	const getInitials = (name: string) => {
		if (!name) return "U";
		return name
			.split(" ")
			.map((part: string) => part[0])
			.join("")
			.toUpperCase()
			.substring(0, 2);
	};

	const userInitials = auth?.user
		? getInitials(`${auth.user.first_name} ${auth.user.last_name}`)
		: "";

	return (
		<header className="sticky top-0 z-40 flex w-full justify-center border-b bg-background/95 backdrop-blur">
			<div className="container flex h-16 items-center justify-between px-4 py-4">
				<div className="flex items-center gap-4">
					<div className="md:hidden">
						<DrawerNavigation>
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
						<Link
							href="/publications"
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							Publications
						</Link>
						<Link
							href="/articles"
							className="text-muted-foreground transition-colors hover:text-foreground"
						>
							Articles
						</Link>
					</nav>
				</div>

				<div className="flex items-center gap-2">
					{auth?.user ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="ghost"
									className="relative h-9 w-9 rounded-full"
								>
									<Avatar className="h-9 w-9">
										<AvatarFallback>{userInitials}</AvatarFallback>
									</Avatar>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<div className="flex flex-col space-y-1 p-2">
									<p className="font-medium text-sm">
										{auth.user.first_name} {auth.user.last_name}
									</p>
									<p className="truncate text-muted-foreground text-xs">
										{auth.user.email}
									</p>
								</div>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/profile" className="w-full cursor-pointer">
										<User className="mr-2 h-4 w-4" />
										Profile
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/profile" className="w-full cursor-pointer">
										<Settings className="mr-2 h-4 w-4" />
										Settings
									</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link
										href="/logout"
										method="post"
										as="button"
										className="w-full cursor-pointer text-red-500 hover:text-red-600"
									>
										<LogOut className="mr-2 h-4 w-4" />
										Logout
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<>
							<Link href="/register">
								<Button variant="outline" size="sm" className="hidden md:flex">
									<UserPlus className="mr-2 h-4 w-4" />
									Join Us
								</Button>
							</Link>
							<Link href="/login">
								<Button size="sm">Login</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
}
