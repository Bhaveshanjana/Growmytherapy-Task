"use client";

import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do you take insurance?",
            answer: "I am an out-of-network provider. This means I do not bill insurance directly, but I can provide you with a monthly superbill to submit to your insurance company for potential reimbursement."
        },
        {
            question: "What are your rates?",
            answer: "My fee for a 50-minute individual therapy session is $250. Limited sliding scale spots are available based on financial need."
        },
        {
            question: "Do you have any openings?",
            answer: "I currently have a few openings for new clients. Please schedule a consultation call so we can discuss your needs and see if we're a good fit."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#fbf6f1] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <div className="grid gap-12 md:grid-cols-2 md:items-start lg:gap-24">

                    {/* Left: Arch Image (Desktop) / Top: Image (Mobile) */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative h-[400px] w-full max-w-sm overflow-hidden rounded-t-[500px] md:h-[500px] bg-black">
                            <Image
                                src="https://images.unsplash.com/photo-1586752002496-cd05ccef47f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlcmFwaXN0fGVufDB8fDB8fHww"
                                alt="Dried flowers in vase"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right: FAQ Content */}
                    <div className="flex flex-col">
                        <h2
                            className="mb-8 font-heading text-4xl font-medium text-[#223614] md:mb-12 md:text-5xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            FAQs
                        </h2>

                        <div className="border-t border-[#223614]/20">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-[#223614]/20">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="flex w-full items-center gap-6 py-6 text-left"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-2xl font-light text-[#223614]">
                                            {openIndex === index ? "−" : "+"}
                                        </span>
                                        <span className="text-xl font-medium text-[#223614] md:text-2xl">
                                            {faq.question}
                                        </span>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="pb-6 pl-12 text-base leading-relaxed text-[#223614]/80 md:text-lg">
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
