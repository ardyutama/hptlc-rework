import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentLayout from "@/layouts/content-layout";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { MoveRight } from "lucide-react";
import type React from "react";

interface ContentWelcomeSectionProps {
	hrefNav: string;
	title: string;
	children: React.ReactNode;
}
export default function ContentWelcomeSection({
	hrefNav,
	title,
	children,
}: ContentWelcomeSectionProps) {
	return (
		<div className="m-7 flex flex-1 justify-center md:mx-10">
			<div className="w-full max-w-4xl">
				<Link href={hrefNav} className="font-bold text-2xl tracking-tight">
					{title}
				</Link>
				{children}
				<Separator className="mt-10" />
				<div className="flex justify-center">
					<Button className="mt-8 items-center">
						<Link
							href={hrefNav}
							className="flex w-full items-center justify-center gap-2"
						>
							More {title}
							<MoveRight />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
