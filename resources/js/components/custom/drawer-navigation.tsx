import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Link } from "@inertiajs/react";
import { X } from "lucide-react";
import type React from "react";
import { useState } from "react";

const items = [
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
		id: 3,
		title: "News",
		url: "/news",
	},
	{
		id: 4,
		title: "Events",
		url: "#",
	},
	{
		id: 5,
		title: "About Us",
		url: "#",
	},
];
export default function DrawerNavigation({
	children,
}: { children: React.ReactNode }) {
	const [open, setOpen] = useState(false);

	return (
		<Drawer direction="left" open={open} onOpenChange={setOpen}>
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle hidden={true} />
					<DrawerDescription hidden={true} />
					<DrawerClose asChild>
						<X className="size-8" />
					</DrawerClose>
				</DrawerHeader>
				{items.map((item, index) => (
					<div className="mx-6 py-6" key={item.id}>
						<Link href={item.url} onClick={() => setOpen(false)}>
							<h4 className="font-bold text-3xl tracking-tight">
								{item.title}
							</h4>
						</Link>
						<Separator orientation="horizontal" />
					</div>
				))}
			</DrawerContent>
		</Drawer>
	);
}
