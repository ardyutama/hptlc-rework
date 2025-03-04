import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import type React from "react";

const items = [
    {
        title: "Publications",
        url: "#",
    },
    {
        title: "Articles",
        url: "#",
    },
    {
        title: "News",
        url: "#",
    },
    {
        title: "Events",
        url: "#",
    },
]
export default function DrawerNavigation({
	children,
}: { children: React.ReactNode }) {
	return (
		<Drawer direction="left">
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerClose asChild>
						<Button size="icon" variant="ghost">
							<X className="size-8" />
						</Button>
					</DrawerClose>
				</DrawerHeader>
                {
                    items.map(item =>
                        <div className="mx-6 py-6">
                            <h4 className="font-bold text-3xl tracking-tight">{item.title}</h4>
                        </div>
                    )
                }
			</DrawerContent>
		</Drawer>
	);
}
