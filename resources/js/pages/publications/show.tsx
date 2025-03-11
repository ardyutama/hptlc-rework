import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import PublicationPage from "@/pages/publications/index";
import { Link } from "@inertiajs/react";
import { ChevronLeft, Download } from "lucide-react";
import type React from "react";

function PublicationShow() {
	return (
		<ContentLayout className="my-24 min-h-screen">
			<div className="my-2">
				<h1 className="font-bold text-4xl tracking-tight">Tes Title</h1>
			</div>
			<Badge>#High-Performance Thin Layer Chromatography</Badge>
			<div className="my-4">
				<p className="text-gray-800">Abstract</p>
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
				<p className="text-gray-800">Download File</p>
				<div className="inline-flex items-center gap-6">
					<Button className="my-2">
						Nama File.pdf
						<Download />
					</Button>
				</div>
			</div>
		</ContentLayout>
	);
}

PublicationShow.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Title Publication" />
);

export default PublicationShow;
