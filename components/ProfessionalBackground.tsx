"use client";

import { useState } from "react";

export default function ProfessionalBackground() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const items = [
        {
            title: "Education",
            content: "Psy.D. in Clinical Psychology from Pepperdine University. B.A. in Psychology from UCLA. Specialization in Trauma-Informed Care and Cognitive Behavioral Therapy."
        },
        {
            title: "Licensure",
            content: "Licensed Clinical Psychologist in California (PSY 12345). Certified Provider of Cognitive Processing Therapy (CPT) for PTSD."
        },
        {
            title: "Certifications",
            content: "Certified in EMDR Therapy. Advanced Training in Mindfulness-Based Stress Reduction (MBSR). Member of the American Psychological Association (APA)."
        }
    ];

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#e8e4dc] py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-6 md:px-12">
                <h2
                    className="mb-12 text-center font-heading text-3xl font-medium text-[#223614] md:mb-16 md:text-4xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    My Professional Background
                </h2>

                <div className="border-t border-[#223614]/20">
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-[#223614]/20">
                            <button
                                onClick={() => toggleItem(index)}
                                className="flex w-full items-center justify-between py-6 text-left hover:bg-[#223614]/5 transition-colors px-2"
                            >
                                <span className="text-xl font-medium text-[#223614] md:text-2xl">
                                    {item.title}
                                </span>
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-2xl font-light text-[#223614]">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="pb-6 pt-2 text-base leading-relaxed text-[#223614]/80 md:text-lg">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
