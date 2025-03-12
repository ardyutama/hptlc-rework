import ThumbnailGrid from "@/components/shared/thumbnail-card/thumbnail-grid";
import { MainLayout } from "@/layouts/main-layout";
import AboutUs from "@/pages/welcome/components/about-us";
import ArticlesSection from "@/pages/welcome/components/articles-section";
import WelcomeSection from "@/pages/welcome/components/welcome-section";
import PublicationsSection from "@/pages/welcome/components/publications-section";
import React, {Suspense} from "react";
import EventCarouselHero from "./components/event-carousel-hero";

const WelcomePage = () => {
	return (
		<>
			<EventCarouselHero />
			<WelcomeSection hrefNav={"/articles"} title={"Articles"}>
                <ArticlesSection />
			</WelcomeSection>
			<AboutUs />
			<WelcomeSection hrefNav={"/publications"} title={"Publications"}>
                <PublicationsSection />
			</WelcomeSection>
		</>
	);
};

WelcomePage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Welcome" />
);
export default WelcomePage;
