import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import ThumbnailCardsContent from "@/components/shared/thumbnail-card/thumbnail-cards-content";
import { publicationData } from "@/data/mock-data";
import { MainLayout } from "@/layouts/main-layout";
import AboutUs from "@/pages/welcome/components/about-us";
import ArticlesCardList from "@/pages/welcome/components/articles-card-list";
import ContentWelcomeSection from "@/pages/welcome/components/content-welcome-section";
import PublicationsCardList from "@/pages/welcome/components/publications-card-list";
import type React from "react";
import CarouselHero from "./components/carousel-hero";

const WelcomePage = () => {
	// console.log(publicationData);
	return (
		<>
			<CarouselHero />
			{/*<ContentWelcomeSection hrefNav={"/articles"} title={"Articles"}>*/}
			{/*    <ThumbnailCardsContent className="pt-7">*/}
			{/*        <ArticlesCardList data={}/>*/}
			{/*    </ThumbnailCardsContent>*/}
			{/*</ContentWelcomeSection>*/}
			<AboutUs />
			<ContentWelcomeSection hrefNav={"/publications"} title={"Publications"}>
				<ThumbnailCardsContent className="pt-7">
					<PublicationsCardList data={publicationData} />
				</ThumbnailCardsContent>
			</ContentWelcomeSection>
		</>
	);
};

WelcomePage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Welcome" />
);
export default WelcomePage;
