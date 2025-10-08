import { Dna, Globe } from 'lucide-react';
import React from 'react';
import {MainLayout} from "@/layouts/main-layout";

const AboutPage = () => {
    return (
        <>
            <div className="bg-white text-gray-800">
                <section className="relative bg-gray-900 text-white py-20 md:py-32">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40"
                        style={{ backgroundImage: "url('/assets/img/lab-research.png')" }}
                    ></div>
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                            Advancing Chromatography Research in Indonesia
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                            The premier digital hub for the nation's chromatography research community, enhancing visibility and fostering collaboration.
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                            To establish the HPTLC Indonesia web application as the definitive public resource for HPTLC knowledge in Indonesia, elevating the national and international profile of our researchers and becoming a primary resource for students and industry professionals.
                        </p>
                    </div>
                </section>

                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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

                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <span className="text-green-600 font-semibold">Our Community</span>
                            <h2 className="text-3xl font-bold mt-2 mb-4">The Indonesian Chapter</h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                The HPTLC Association's Indonesian chapter is a vibrant community of scientists, academics, and professionals dedicated to advancing chromatographic science within the nation. We serve as a central point for collaboration, knowledge sharing, and professional development.
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="font-bold text-xl mb-2">President</h3>
                                <p className="text-gray-800">Dr. I Made Agus Gelgel Wirasuta</p>
                                <p className="text-gray-600">Udayana University, Bali</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
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

                {/* Call to Action */}
                <section className="bg-green-700 text-white">
                    <div className="container mx-auto px-6 py-16 text-center">
                        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
                        <p className="text-green-200 max-w-2xl mx-auto mb-8">
                            Become a member to publish your work, connect with fellow researchers, and contribute to the future of HPTLC in Indonesia.
                        </p>
                        <a
                            href="/register"
                            className="bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300"
                        >
                            Register Now
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

AboutPage.layout = (page: React.ReactNode) => (
    <MainLayout children={page} title="About Us" />
);

export default AboutPage;
