"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do you take insurance?",
            answer: "Answer goes here."
        },
        {
            question: "What are your rates?",
            answer: "Answer goes here."
        },
        {
            question: "Do you have any openings?",
            answer: "Answer goes here."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-background py-16 md:py-36 lg:py-48 xl:py-12 xl:pb-40">
            <div className="mx-auto max-w-8xl px-6 md:px-6 lg:px-16">
                <div className="grid gap-12 md:grid-cols-2 md:items-start lg:gap-20 xl:gap-6">

                    {/* Left: Arch Image (Desktop) / Top: Image (Mobile) */}
                    <div className="flex justify-center md:justify-start md:pl-24">
                        <div className="relative h-[200px] w-[35%] sm:w-full md:h-[350px] lg:h-[470px] md:translate-y-2 lg:translate-y-14 xl:h-[700px] max-w-md overflow-hidden rounded-t-[500px] bg-black">
                            <Image
                                src="/faq-image.avif"
                                alt="Dried flowers in vase"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: FAQ Content */}
                    <div className="flex flex-col lg:mt-32">
                        <h2
                            className="mb-8 font-heading text-4xl font-medium text-[#223614] xl:mb-12 xl:text-5xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            FAQs
                        </h2>

                        <div className="border-t border-[#223614]/20">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-[#223614]/20">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center gap-8 py-6 md:py-4 lg:py-6 text-left"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-6xl font-extralight text-[#223614]">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                        <span className="text-3xl font-medium text-[#223614] lg:text-3xl xl:text-4xl">
                                            {faq.question}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="pb-6 text-base leading-relaxed text-[#223614]/80 md:text-lg">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
