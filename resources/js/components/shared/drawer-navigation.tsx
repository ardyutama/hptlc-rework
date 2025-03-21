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

interface NavigationItem {
	id: string | number; // Unique identifier for each item
	title: string; // Title text to display
	url: string; // URL to navigate to when clicked
}

// Define the type for the items array
type NavigationItems = NavigationItem[];

export default function DrawerNavigation({
	items,
	children,
}: { items: NavigationItems; children: React.ReactNode }) {
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
				{items.map((item) => (
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
