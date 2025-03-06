import FeaturedHero from "@/components/shared/featured-hero";
import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type React from "react";

const PublicationPage = () => {
	return (
		<>
			<FeaturedHero title={"Publications"}>
				<ThumbnailCard
					tags={["Topic"]}
					title={
						"Figma ipsum component variant main layer. Boolean content strikethrough\n" +
						"\t\t\t\tpen background arrow. Bullet flows project duplicate variant component\n" +
						"\t\t\t\tvertical group vector thumbnail."
					}
					date={"18 Aug 2028"}
					downloadPath="#test"
				/>
			</FeaturedHero>
			<div className="min-h-svh">
				<div className="flex flex-1 flex-col">
					<div>Publications</div>
				</div>
			</div>
		</>
	);
};

PublicationPage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Publication" />
);

export default PublicationPage;
