import ContentLayout from "@/layouts/content-layout";
import { ExternalLink, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-neutral-950 py-20 text-white md:py-24 lg:py-32">
			{/* Optional: Subtle background element for depth, like a very faint radial glow */}
			<div className="pointer-events-none absolute inset-0 bg-radial-gradient-to-t from-transparent via-neutral-900/10 to-transparent"></div>

			<ContentLayout>
				<div className="relative z-10 w-full px-6 md:px-8 lg:px-12">
					<div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
						{/* HPTLC Association - More prominent branding */}
						<div className="col-span-1 flex flex-col justify-between md:col-span-3 lg:col-span-2">
							<h4 className="font-extrabold text-4xl text-neutral-100 leading-tight tracking-tight lg:text-5xl">
								HPTLC
								<br className="md:hidden" /> ASSOCIATION
							</h4>
							<p className="mt-4 max-w-xs text-lg text-neutral-400">
								National Association, part of the International HPTLC
								Association.
							</p>
							<div className="mt-8 flex space-x-5">
								<a
									href="https://www.instagram.com/hptlc.id"
									className="block rounded-full bg-neutral-800 p-3 text-neutral-300 transition-all duration-300 ease-in-out hover:bg-green-600 hover:text-white hover:shadow-green-500/40 hover:shadow-lg"
									target="_blank"
									rel="noreferrer"
									aria-label="Instagram link to HPTLC ID"
								>
									<Instagram size={20} />
								</a>
								{/* Add more social icons as needed, e.g., LinkedIn, Twitter (X) */}
							</div>
						</div>

						{/* Contact & Location - Grouped for simplicity */}
						<div className="col-span-1 md:col-span-1 lg:col-span-1">
							<h5 className="mb-6 border-neutral-700 border-b pb-2 font-semibold text-green-400 text-lg">
								Connect With Us
							</h5>
							<div className="space-y-6">
								<div className="flex items-start">
									<Mail
										className="mt-0.5 mr-3 flex-shrink-0 text-green-300"
										size={18}
									/>
									<div>
										<p className="text-neutral-500 text-sm">Email</p>
										<a
											href="mailto:info@hptlc-indonesia.org"
											target="_blank"
											className="text-base text-neutral-200 transition-colors duration-200 hover:text-green-300"
											rel="noreferrer"
										>
											info@hptlc-indonesia.org
										</a>
									</div>
								</div>
								<div className="flex items-start">
									<Phone
										className="mt-0.5 mr-3 flex-shrink-0 text-green-300"
										size={18}
									/>
									<div>
										<p className="text-neutral-500 text-sm">Phone</p>
										<a
											href="tel:+62213101825"
											target="_blank"
											className="text-base text-neutral-200 transition-colors duration-200 hover:text-green-300"
											rel="noreferrer"
										>
											+6221 3101825
										</a>
									</div>
								</div>
								<div className="flex items-start">
									<MapPin
										className="mt-0.5 mr-3 flex-shrink-0 text-green-300"
										size={18}
									/>
									<div>
										<p className="text-neutral-500 text-sm">Location</p>
										<p className="max-w-[200px] text-base text-neutral-200 leading-relaxed">
											Jl. Raden Saleh No. 45 I, Cikini, Jakarta Pusat, Indonesia
											- 10330
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Quick Links (Example, can be customized) */}
						<div className="col-span-1 md:col-span-1 lg:col-span-1">
							<h5 className="mb-6 border-neutral-700 border-b pb-2 font-semibold text-green-400 text-lg">
								Quick Links
							</h5>
							<ul className="space-y-3">
								<li>
									<a
										href="/about"
										className="text-neutral-300 transition-colors duration-200 hover:text-green-300"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="/events"
										className="text-neutral-300 transition-colors duration-200 hover:text-green-300"
									>
										Events
									</a>
								</li>
								<li>
									<a
										href="/membership"
										className="text-neutral-300 transition-colors duration-200 hover:text-green-300"
									>
										Membership
									</a>
								</li>
								<li>
									<a
										href="/resources"
										className="text-neutral-300 transition-colors duration-200 hover:text-green-300"
									>
										Resources
									</a>
								</li>
								<li>
									<a
										href="/news"
										className="text-neutral-300 transition-colors duration-200 hover:text-green-300"
									>
										Latest News
									</a>
								</li>
							</ul>
						</div>

						{/* Sponsors - Clean, minimal list */}
						<div className="col-span-1 md:col-span-2 lg:col-span-1">
							<h5 className="mb-6 border-neutral-700 border-b pb-2 font-semibold text-green-400 text-lg">
								Our Esteemed Partners
							</h5>
							<ul className="space-y-3">
								<li>
									<a
										href="https://www.abadinusa.co.id/en"
										className="group flex items-center text-neutral-300 transition-colors duration-200 hover:text-green-300"
										target="_blank"
										rel="noreferrer"
									>
										<span className="mr-2">AbadiNusa</span>
										<ExternalLink
											size={14}
											className="text-neutral-400 transition-colors duration-200 group-hover:text-green-400"
										/>
									</a>
								</li>
								<li>
									<a
										href="https://id111311-pt-dharma-karya-makmur-sentosa.contact.page/"
										className="group flex items-center text-neutral-300 transition-colors duration-200 hover:text-green-300"
										target="_blank"
										rel="noreferrer"
									>
										<span className="mr-2">Darma Karya Makmur Sentosa</span>
										<ExternalLink
											size={14}
											className="text-neutral-400 transition-colors duration-200 group-hover:text-green-400"
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Footer Bottom / Copyright */}
					<div className="mt-20 border-neutral-800 border-t pt-8 text-center text-neutral-600 text-sm">
						<p>
							© {new Date().getFullYear()} HPTLC Association Indonesia Chapter.
							All rights reserved.
						</p>
						{/* Legal links can go here if needed, e.g., | Privacy Policy | Terms of Service */}
						<div className="mt-2 space-x-4">
							<a
								href="/privacy-policy"
								className="text-neutral-600 text-xs transition-colors hover:text-neutral-500"
							>
								Privacy Policy
							</a>
							<a
								href="/terms-of-service"
								className="text-neutral-600 text-xs transition-colors hover:text-neutral-500"
							>
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</ContentLayout>
		</footer>
	);
}
