import EllipsisBadge from "@/components/common/ellipsis-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type { Publication } from "@/types";
import { Link } from "@inertiajs/react";
import { Calendar, ChevronLeft, Download, FileText, Tag } from "lucide-react";
import type React from "react";

function PublicationShow({ publication }: Publication) {
	console.log(publication);
	return (
		<ContentLayout className="min-h-screen py-6 md:py-12 lg:py-16">
			<Link
				href={"/publications"}
				className="group mb-6 inline-flex items-center gap-2 font-medium text-gray-600 text-sm hover:text-gray-900"
			>
				<ChevronLeft className="group-hover:-translate-x-1 h-4 w-4 transition-transform" />
				Back to Publications
			</Link>

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
				{/* Main Content */}
				<div className="lg:col-span-8">
					<Card className="overflow-hidden">
						<CardContent className="p-6">
							{/* Publication Header */}
							<div className="mb-6">
								<h1 className="mb-4 font-bold text-2xl tracking-tight md:text-3xl lg:text-4xl">
									Tes Title
								</h1>

								<div className="mb-4 flex flex-wrap gap-2">
									<EllipsisBadge
										icon={<Tag className="h-3 w-3 flex-shrink-0" />}
										maxWidth="max-w-[200px] md:max-w-[300px]" // Responsive max width
									>
										High-Performance Thin Layer Chromatography With A Very Long
										Name That Will Truncate
									</EllipsisBadge>

									<EllipsisBadge
										icon={<Calendar className="h-3 w-3 flex-shrink-0" />}
										maxWidth="max-w-[150px]"
									>
										Publication Date
									</EllipsisBadge>
								</div>
							</div>

							{/* Abstract Section */}
							<div className="mb-6">
								<h2 className="mb-3 font-semibold text-gray-800 text-lg">
									Abstract
								</h2>
								<p className="text-justify text-gray-700">
									"This study explores advancements in High-Performance Thin
									Layer Chromatography (HPTLC), a powerful analytical technique
									used for the separation and quantification of compounds in
									various samples. HPTLC provides enhanced resolution, improved
									reproducibility, and the ability to analyze multiple samples
									simultaneously. This study focuses on recent improvements in
									stationary phases, solvent systems, and detection methods,
									making HPTLC an essential tool in pharmaceuticals, forensics,
									food sciences, and environmental analysis. We present
									experimental findings, discuss analytical performance, and
									compare HPTLC with other chromatography techniques.
									Additionally, the study delves into automation, software
									integration, and emerging applications of HPTLC in
									personalized medicine and drug development. (Study 1)"
								</p>
							</div>

							{/* Download Section */}
							<div>
								<h2 className="mb-3 font-semibold text-gray-800 text-lg">
									Download File
								</h2>
								<Button className="flex items-center gap-2">
									<FileText className="h-4 w-4" />
									Nama File.pdf
									<Download className="ml-1 h-4 w-4" />
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Sidebar - can contain authors info, publication details, etc. */}
				<div className="lg:col-span-4">
					<Card>
						<CardContent className="p-6">
							<h2 className="mb-4 font-semibold text-lg">
								Publication Details
							</h2>

							<div className="space-y-4">
								<div>
									<h3 className="font-medium text-gray-500 text-sm">Authors</h3>
									<p className="text-gray-800">Author names would go here</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-500 text-sm">
										Published Date
									</h3>
									<p className="text-gray-800">Date would go here</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-500 text-sm">
										Publisher
									</h3>
									<p className="text-gray-800">Publisher name would go here</p>
								</div>

								<div>
									<h3 className="font-medium text-gray-500 text-sm">DOI</h3>
									<p className="text-gray-800">DOI reference would go here</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Related Publications */}
			<div className="mt-12">
				<h2 className="mb-6 font-bold text-xl tracking-tight md:text-2xl">
					Related Publications
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{/*{publicationData.slice(0, MAX_CONTENT).map((item: Publication) => (*/}
					{/*	<ThumbnailCard*/}
					{/*		key={item.id}*/}
					{/*		id={item.id}*/}
					{/*		tags={item.tags.map((tag) => tag.name)}*/}
					{/*		hrefLink="publications/show"*/}
					{/*		title={item.title}*/}
					{/*		description={item.abstract}*/}
					{/*		date={item.published_at}*/}
					{/*		downloadPath={item.publication_file}*/}
					{/*	/>*/}
					{/*))}*/}
				</div>
			</div>
		</ContentLayout>
	);
}

PublicationShow.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Publication Detail" />
);

export default PublicationShow;
