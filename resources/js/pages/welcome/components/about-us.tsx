import { Button } from "@/components/ui/button";
import ContentLayout from "@/layouts/content-layout";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
	return (
		<div className="bg-slate-50">
			<ContentLayout>
				<div className="w-full gap-2">
					<h4 className="flex items-center font-bold text-2xl tracking-tight">
						About Us
						<ArrowRight size="16" className="ml-1" />
					</h4>
					<p className="pt-2">
						Empowering Scientific Excellence HPTLC Association Indonesia Chapter
					</p>
				</div>
			</ContentLayout>
		</div>
	);
}
