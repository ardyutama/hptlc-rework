import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentLayout from "@/layouts/content-layout";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { MoveRight } from "lucide-react";
import type React from "react";
import ThumbnailGrid from "@/components/shared/thumbnail-card/thumbnail-grid";

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
            <ThumbnailGrid className="pt-7">
			    {children}
            </ThumbnailGrid>
			<Separator className="mt-10" />
			<div className="flex justify-center">
				<Button className="mt-8 items-center" asChild>
					<Link
						href={hrefNav}
						className="flex w-full items-center justify-center gap-2"
					>
						More {title}
						<MoveRight />
					</Link>
				</Button>
			</div>
		</ContentLayout>
	);
}
