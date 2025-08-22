import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { User } from "@/types";
import { Link } from "@inertiajs/react";
import { BookText, LogOut, Newspaper, User as UserIcon } from "lucide-react";

interface UserNavigationProps {
	user: User;
}

const getInitials = (firstName?: string, lastName?: string) => {
	const nameParts = [];
	if (firstName) nameParts.push(firstName[0]);
	if (lastName) nameParts.push(lastName[0]);
	return nameParts.join("").toUpperCase().substring(0, 2) || "U";
};

export default function UserNavigation({ user }: UserNavigationProps) {
	const userInitials = getInitials(
		user.member?.first_name,
		user.member?.last_name,
	);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="relative h-9 w-9 rounded-full">
					<Avatar className="h-9 w-9">
						<AvatarFallback>{userInitials}</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<div className="flex flex-col space-y-1 p-2">
					<p className="font-medium text-sm">
						{user.member?.first_name} {user.member?.last_name}
					</p>
					<p className="truncate text-muted-foreground text-xs">{user.email}</p>
				</div>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href={"/profile"} className="w-full cursor-pointer">
						<UserIcon className="mr-2 h-4 w-4" />
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={"/articles/create"} className="w-full cursor-pointer">
						<Newspaper className="mr-2 h-4 w-4" />
						Create Article
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={"/publications/create"} className="w-full cursor-pointer">
						<BookText className="mr-2 h-4 w-4" />
						Create Publication
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link
						href={"/logout"}
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
	);
}
