import ImageScientist from "@/assets/img/img_scientist.jpeg";
import ContentLayout from "@/layouts/content-layout";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
	return (
		<div className="relative overflow-hidden bg-green-500">
			<ContentLayout>
				<div className="container relative z-10 mx-auto md:px-6 lg:px-8">
					<div className="max-w-2xl text-white">
						<h4 className="flex items-center font-bold text-2xl tracking-tight md:text-3xl lg:text-4xl">
							About Us
							<ArrowRight size={18} className="ml-2" />
						</h4>
						<p className="pt-3 text-lg opacity-90 md:text-xl">
							Empowering Scientific Excellence HPTLC Association Indonesia
							Chapter
						</p>
						<div className="mt-6 h-1 w-20 rounded bg-white opacity-70" />
						<p className="mt-6 text-white/80">
							We are dedicated to advancing high-performance thin-layer
							chromatography techniques and applications throughout Indonesia,
							connecting scientists and promoting innovation in analytical
							science.
						</p>
					</div>
				</div>
			</ContentLayout>

			<div className="absolute top-0 right-0 z-0 h-full w-full overflow-hidden md:w-1/2 lg:w-2/5">
				<div className="absolute inset-0 z-10 bg-gradient-to-r from-green-500 via-green-500/90 to-transparent" />
				<img
					src={ImageScientist}
					alt="Scientist working in laboratory"
					className="absolute top-0 right-0 h-full w-full object-cover object-center"
				/>
			</div>
		</div>
	);
}
