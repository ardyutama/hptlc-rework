import ThumbnailCard from "@/components/shared/thumbnail-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentLayout from "@/layouts/content-layout";
import { MoveRight } from "lucide-react";

export default function PublicationWelcome() {
	return (
		<ContentLayout>
			<h2 className="pb-8 font-bold text-2xl tracking-tight">Publications</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{[1, 2, 3, 4].map((item) => (
					<ThumbnailCard
						key={item}
						topics={["Topic"]}
						title={
							"Figma ipsum component variant main layer. Boolean content strikethrough\n" +
							"\t\t\t\tpen background arrow. Bullet flows project duplicate variant component\n" +
							"\t\t\t\tvertical group vector thumbnail."
						}
						date={"18 Aug 2028"}
						downloadPath="#test"
					/>
				))}
			</div>
			<Separator className="mt-10" />
			<div className="mt-10 flex w-full justify-center">
				<Button>
					More Publication
					<MoveRight />
				</Button>
			</div>
		</ContentLayout>
	);
}
