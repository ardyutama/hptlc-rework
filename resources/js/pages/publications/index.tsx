import FeaturedHero from "@/components/shared/featured-hero/featured-hero";
import { MainLayout } from "@/layouts/main-layout";
import FeaturedPublicationHeroList from "@/pages/publications/components/featured-publication-hero-list";
import PublicationList from "@/pages/publications/components/publication-list";
import type React from "react";

const PublicationPage = () => {
	return (
		<>
			<FeaturedHero title={"Publications"}>
				<FeaturedPublicationHeroList />
			</FeaturedHero>
			<PublicationList />
		</>
	);
};

PublicationPage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Publication" />
);

export default PublicationPage;
