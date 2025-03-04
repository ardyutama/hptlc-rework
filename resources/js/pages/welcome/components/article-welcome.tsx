import ThumbnailCard from "@/components/shared/thumbnail-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentLayout from "@/layouts/content-layout";
import { Link } from "@inertiajs/react";
import { MoveRight } from "lucide-react";

export default function ArticleWelcome() {
	return (
		<ContentLayout>
			<Link href={"/articles"} className="font-bold text-2xl tracking-tight">
				Articles
			</Link>
			<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
				{[1, 2, 3, 4].map((item) => (
					<ThumbnailCard
						key={item}
						thumbnailImage={"test"}
						topics={["Topic"]}
						title={
							"Figma ipsum component variant main layer. Boolean content strikethrough\n" +
							"\t\t\t\tpen background arrow. Bullet flows project duplicate variant component\n" +
							"\t\t\t\tvertical group vector thumbnail."
						}
						date={"18 Aug 2028"}
					/>
				))}
			</div>
			<Separator className="mt-10" />
			<div className="flex justify-center">
				<Button className="mt-8 items-center">
					<Link
						href="/articles"
						className="flex w-full items-center justify-center gap-2"
					>
						More Article
						<MoveRight />
					</Link>
				</Button>
			</div>
		</ContentLayout>
	);
}
