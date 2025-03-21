import ThumbnailGrid from "@/components/shared/thumbnail-card/thumbnail-grid";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentLayout from "@/layouts/content-layout";
import { Link } from "@inertiajs/react";
import { MoveRight } from "lucide-react";
import type React from "react";

interface ContentWelcomeSectionProps {
	hrefNav: string;
	title: string;
	children: React.ReactNode;
}
export default function WelcomeSection({
	hrefNav,
	title,
	children,
}: ContentWelcomeSectionProps) {
	return (
		<ContentLayout>
			<Link href={hrefNav} className="font-bold text-2xl tracking-tight">
				{title}
			</Link>
			<ThumbnailGrid className="pt-7">{children}</ThumbnailGrid>
			<Separator className="mt-10" />
			<div className="flex justify-center">
				<Button
					className="mt-8 items-center bg-blue-500 hover:bg-blue-400"
					asChild
				>
					<Link
						href={hrefNav}
						className="flex items-center justify-center gap-2"
					>
						More {title}
						<MoveRight />
					</Link>
				</Button>
			</div>
		</ContentLayout>
	);
}
