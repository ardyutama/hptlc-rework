import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import PublicationPage from "@/pages/publications/index";
import { Link } from "@inertiajs/react";
import { ChevronLeft, Download } from "lucide-react";
import type React from "react";
import ThumbnailGrid from "@/components/shared/thumbnail-card/thumbnail-grid";
import {publicationData} from "@/data/mock-data";
import type {Publication} from "@/types";
import ThumbnailCard from "@/components/shared/thumbnail-card/thumbnail-card";
import {Separator} from "@/components/ui/separator";

function PublicationShow() {
    const MAX_CONTENT = 4;
	return (
		<ContentLayout className="my-24 min-h-screen">
			<div className="my-2">
				<h1 className="font-bold text-4xl tracking-tight">Tes Title</h1>
			</div>
			<Badge>#High-Performance Thin Layer Chromatography</Badge>
			<div className="my-4">
				<p className="text-gray-800 py-2 font-semibold">Abstract</p>
				<p className="text-justify font-semibold text-lg">
					"This study explores advancements in High-Performance Thin Layer
					Chromatography (HPTLC), a powerful analytical technique used for the
					separation and quantification of compounds in various samples. HPTLC
					provides enhanced resolution, improved reproducibility, and the
					ability to analyze multiple samples simultaneously. This study focuses
					on recent improvements in stationary phases, solvent systems, and
					detection methods, making HPTLC an essential tool in pharmaceuticals,
					forensics, food sciences, and environmental analysis. We present
					experimental findings, discuss analytical performance, and compare
					HPTLC with other chromatography techniques. Additionally, the study
					delves into automation, software integration, and emerging
					applications of HPTLC in personalized medicine and drug development.
					(Study 1)"
				</p>
			</div>
			<div className="my-4">
				<p className="text-gray-800 py-2 font-semibold">Download File</p>
				<div className="inline-flex items-center gap-6">
					<Button className="my-2">
						Nama File.pdf
						<Download />
					</Button>
				</div>
			</div>
            <Separator orientation='horizontal'/>
            <div className="my-4">
                <p className="text-gray-800 py-2 font-bold text-lg tracking-tight">Related Publications</p>
                <ThumbnailGrid>
                    {publicationData.slice(0, MAX_CONTENT).map((item: Publication) => (
                        <ThumbnailCard
                            key={item.id}
                            id={item.id}
                            tags={item.tags.map((tag) => tag.name)}
                            hrefLink={"publications/show"}
                            title={item.title}
                            description={item.abstract}
                            date={item.published_at}
                            downloadPath={item.publication_file}
                        />
                    ))}
                </ThumbnailGrid>
            </div>
		</ContentLayout>
	);
}

PublicationShow.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Title Publication" />
);

export default PublicationShow;
