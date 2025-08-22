import { FlashMessageHandler } from "@/components/common/flash-message-handler";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { Toaster } from "@/components/ui/sonner";
import { Head } from "@inertiajs/react";
import type React from "react";

interface MainLayoutProps {
	title?: string;
	children: React.ReactNode;
}
export function MainLayout({ title, children }: MainLayoutProps) {
	return (
		<>
			<Head title={title} />
			<FlashMessageHandler />
			<Toaster richColors position="bottom-right" duration={1500} />
			<main className="relative flex min-h-svh flex-1 flex-col bg-background">
				<Header />
				{children}
				<Footer />
			</main>
		</>
	);
}
