import ThumbnailCard from "@/components/shared/thumbnail-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ContentLayout from "@/layouts/content-layout";
import { Link } from "@inertiajs/react";
import { MoveRight } from "lucide-react";
import React from "react";

interface ContentWelcomeSectionProps {
    hrefNav: string,
    title: string,
    children: React.ReactNode
}
export default function ContentWelcomeSection({hrefNav, title, children}: ContentWelcomeSectionProps) {
    return (
        <ContentLayout>
            <Link href={hrefNav} className="font-bold text-2xl tracking-tight">
                {title}
            </Link>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                {children}
            </div>
            <Separator className="mt-10" />
            <div className="flex justify-center">
                <Button className="mt-8 items-center">
                    <Link
                        href={hrefNav}
                        className="flex w-full items-center justify-center gap-2"
                    >
                        More {title}
                        <MoveRight />
                    </Link>
                </Button>
            </div>
        </ContentLayout>
    );
}
