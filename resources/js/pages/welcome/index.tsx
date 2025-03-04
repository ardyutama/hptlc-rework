import { MainLayout } from "@/layouts/main-layout";
import AboutUs from "@/pages/welcome/components/about-us";
import ArticleWelcome from "@/pages/welcome/components/article-welcome";
import PublicationWelcome from "@/pages/welcome/components/publication-welcome";
import type React from "react";
import CarouselHero from "./components/carousel-hero";

const WelcomePage = () => {
	return (
		<>
			<div className="flex flex-1 flex-col">
				<CarouselHero />
				<ArticleWelcome />
				<AboutUs />
				<PublicationWelcome />
			</div>
		</>
	);
};

WelcomePage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Welcome" />
);
export default WelcomePage;
