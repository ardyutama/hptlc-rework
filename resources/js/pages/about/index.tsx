import { Dna, Globe } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import { MainLayout } from "@/layouts/main-layout";

// Import GSAP and the ScrollTrigger plugin
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
    // A ref to the main container element. We'll use this as the scope for our animations.
    const main = useRef(null);

    // useEffect hook to run the animation code when the component mounts.
    useEffect(() => {
        // gsap.context() is the modern way to handle cleanup.
        // All GSAP animations created inside this function will be automatically reverted when the component unmounts.
        const ctx = gsap.context(() => {

            // --- HERO ANIMATION ---
            // Animate the main heading and paragraph on page load.
            gsap.fromTo(".hero-h1",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );
            gsap.fromTo(".hero-p",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
            );

            // --- SCROLL-TRIGGERED ANIMATIONS ---
            // Animate each section as it scrolls into view.

            // Vision Section
            gsap.from(".vision-section", {
                scrollTrigger: {
                    trigger: ".vision-section",
                    start: "top 85%", // Animation starts when the top of the element is 85% from the top of the viewport
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
            });

            // HPTLC Section (with staggered cards)
            gsap.from(".hptlc-section-content > *", {
                scrollTrigger: {
                    trigger: ".hptlc-section-content",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2, // Stagger the animation of direct children
            });

            // Community Section
            gsap.from(".community-section-content", {
                scrollTrigger: {
                    trigger: ".community-section-content",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
            });

            // Stagger the two profile cards
            gsap.from(".community-card", {
                scrollTrigger: {
                    trigger: ".community-cards-container",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 40,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.2
            });

            // Call to Action Section
            gsap.from(".cta-section > *", {
                scrollTrigger: {
                    trigger: ".cta-section",
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2,
            });

        }, main); // Scope the context to our main element

        // Cleanup function to revert all animations
        return () => ctx.revert();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        // Add the ref to the main container div
        <div ref={main}>
            <div className="bg-white text-gray-800">
                <section className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40"
                        style={{ backgroundImage: "url('/assets/img/lab-research.png')" }}
                    ></div>
                    <div className="container mx-auto px-6 text-center relative z-10">
                        {/* Added class names for GSAP targeting */}
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 hero-h1">
                            Advancing Chromatography Research in Indonesia
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto hero-p">
                            The premier digital hub for the nation's chromatography research community, enhancing visibility and fostering collaboration.
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-24 overflow-hidden">
                    {/* Added class names for GSAP targeting */}
                    <div className="container mx-auto px-6 text-center vision-section">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            To establish the HPTLC Indonesia web application as the definitive public resource for HPTLC knowledge in Indonesia, elevating the national and international profile of our researchers and becoming a primary resource for students and industry professionals.
                        </p>
                    </div>
                </section>

                <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
                    {/* Added class names for GSAP targeting */}
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center hptlc-section-content">
                        <div>
                            <span className="text-green-600 font-semibold">The Technology</span>
                            <h2 className="text-3xl font-bold mt-2 mb-4">What is HPTLC?</h2>
                            <p className="text-gray-700 mb-4">
                                <span className="font-bold">High-Performance Thin-Layer Chromatography (HPTLC)</span> is a sophisticated and advanced form of chromatography used for plant analysis and more. It ensures reproducible, reliable, and traceable results through a standardized methodology and software-controlled instruments.
                            </p>
                            <p className="text-gray-700">
                                Its benefits include shorter analysis times, reduced solvent consumption, and superior separation efficiency, making it a cornerstone of modern analytical science.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                <Dna className="w-12 h-12 text-green-500 mb-3" />
                                <h3 className="font-bold text-lg mb-1">High Resolution</h3>
                                <p className="text-sm text-gray-600">Achieve clear and precise component separation.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                                <Globe className="w-12 h-12 text-green-500 mb-3" />
                                <h3 className="font-bold text-lg mb-1">Standardized Methods</h3>
                                <p className="text-sm text-gray-600">Ensures results are globally recognized and reproducible.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 overflow-hidden">
                    <div className="container mx-auto px-6">
                        {/* Added class names for GSAP targeting */}
                        <div className="text-center mb-12 community-section-content">
                            <span className="text-green-600 font-semibold">Our Community</span>
                            <h2 className="text-3xl font-bold mt-2 mb-4">The Indonesian Chapter</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                The HPTLC Association's Indonesian chapter is a vibrant community of scientists, academics, and professionals dedicated to advancing chromatographic science within the nation. We serve as a central point for collaboration, knowledge sharing, and professional development.
                            </p>
                        </div>
                        {/* Added class names for GSAP targeting */}
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center community-cards-container">
                            <div className="bg-white p-6 rounded-lg border border-gray-200 community-card">
                                <h3 className="font-bold text-xl mb-2">President</h3>
                                <p className="text-gray-800">Dr. I Made Agus Gelgel Wirasuta</p>
                                <p className="text-gray-600">Udayana University, Bali</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 community-card">
                                <h3 className="font-bold text-xl mb-2">Secretary General</h3>
                                <p className="text-gray-800">Dr. Idha Kusumawati</p>
                                <p className="text-gray-600">Airlangga University, Surabaya</p>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <p className="text-gray-700">For inquiries, please contact us at: <a href="mailto:indonesia.chapter@hptlc-association.org" className="text-green-600 hover:underline">indonesia.chapter@hptlc-association.org</a></p>
                        </div>
                    </div>
                </section>

                <section className="bg-green-700 text-white">
                    {/* Added class names for GSAP targeting */}
                    <div className="container mx-auto px-6 py-16 text-center cta-section overflow-hidden">
                        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
                        <p className="text-green-200 max-w-2xl mx-auto mb-8">
                            Become a member to publish your work, connect with fellow researchers, and contribute to the future of HPTLC in Indonesia.
                        </p>
                        <a
                            href="/register"
                            className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 inline-block"
                        >
                            Register Now
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

AboutPage.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title="About Us" />
);

export default AboutPage;
