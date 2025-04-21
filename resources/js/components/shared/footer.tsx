import ContentLayout from "@/layouts/content-layout";
import { ExternalLink, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<ContentLayout>
				<div className="w-full px-4 py-16">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
						<div className="space-y-4">
							<h4 className="inline-block border-green-500 border-b pb-2 font-bold text-xl tracking-tight">
								HPTLC ASSOCIATION
							</h4>
							<p className="max-w-xs text-gray-300">
								National Association that is a part/chapter of the International
								HPTLC Association
							</p>
							<div className="flex space-x-4 pt-4">
								<a
									href="https://www.instagram.com/hptlc.id"
									className="text-white transition-colors hover:text-green-400"
									target="_blank"
									rel="noreferrer"
								>
									<div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
										<Instagram size={16} />
									</div>
								</a>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="inline-block border-green-500 border-b pb-2 font-bold text-xl tracking-tight">
								Contact Us
							</h4>
							<div className="space-y-3">
								<div className="flex items-start">
									<Mail className="mt-1 mr-3 text-green-500" size={18} />
									<div>
										<p className="text-gray-300">Email:</p>
										<a
											href="mailto:info@hptlc-indonesia.org"
											target="_blank"
											className="transition-colors hover:text-green-400"
											rel="noreferrer"
										>
											info@hptlc-indonesia.org
										</a>
									</div>
								</div>
								<div className="flex items-start">
									<Phone className="mt-1 mr-3 text-green-500" size={18} />
									<div>
										<p className="text-gray-300">Phone:</p>
										<a
											href="tel:+62213101825"
											target="_blank"
											className="transition-colors hover:text-green-400"
											rel="noreferrer"
										>
											+6221 3101825
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="inline-block border-green-500 border-b pb-2 font-bold text-xl tracking-tight">
								Location
							</h4>
							<div className="flex items-start">
								<MapPin className="mt-1 mr-3 text-green-500" size={48} />
								<p className="text-gray-300">
									Jl. Raden Saleh No. 45 I, Cikini, Jakarta Pusat, Indonesia -
									10330
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<h4 className="inline-block border-green-500 border-b pb-2 font-bold text-xl tracking-tight">
								Sponsors
							</h4>
							<div className="space-y-2">
								<div className="rounded bg-gray-900 p-3 transition-colors hover:bg-gray-800">
									<a
										href="https://www.abadinusa.co.id/en"
										className="flex items-center justify-between"
										target="_blank"
										rel="noreferrer"
									>
										<span>AbadiNusa</span>
										<ExternalLink size={14} className="text-green-500" />
									</a>
								</div>
								<div className="rounded bg-gray-900 p-3 transition-colors hover:bg-gray-800">
									<a
										href="https://id111311-pt-dharma-karya-makmur-sentosa.contact.page/"
										className="flex items-center justify-between"
										target="_blank"
										rel="noreferrer"
									>
										<span>Darma Karya Makmur Sentosa</span>
										<ExternalLink size={14} className="text-green-500" />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-12 border-gray-800 border-t pt-8 text-center text-gray-400">
						<p>
							© {new Date().getFullYear()} HPTLC Association Indonesia Chapter.
							All rights reserved.
						</p>
					</div>
				</div>
			</ContentLayout>
		</footer>
	);
}
