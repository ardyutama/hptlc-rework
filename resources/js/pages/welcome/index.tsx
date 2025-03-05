import { MainLayout } from "@/layouts/main-layout";
import AboutUs from "@/pages/welcome/components/about-us";
import type React from "react";
import CarouselHero from "./components/carousel-hero";
import ContentWelcomeSection from "@/pages/welcome/components/content-welcome-section";
import ThumbnailCard from "@/components/shared/thumbnail-card";

const WelcomePage = () => {
	return (
		<>
			<div className="flex flex-1 flex-col">
				<CarouselHero />
				<ContentWelcomeSection hrefNav={"/articles"} title={"Articles"}>
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
                </ContentWelcomeSection>
				<AboutUs />
                <ContentWelcomeSection hrefNav={"/publications"} title={"Publications"}>
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
                </ContentWelcomeSection>
			</div>
		</>
	);
};

WelcomePage.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Welcome" />
);
export default WelcomePage;
