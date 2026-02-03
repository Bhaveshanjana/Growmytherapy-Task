"use client";

import { useState } from "react";

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: "Education",
      content:
        "Psy.D. in Clinical Psychology. Specialization in trauma, anxiety, panic, and burnout recovery for high-achieving adults.",
    },
    {
      title: "Licensure",
      content:
        "Licensed Clinical Psychologist in California. Based in Santa Monica, offering in-person and secure telehealth sessions.",
    },
    {
      title: "Clinical Methods",
      content:
        "Integrative approach using Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness-Based Practices, and Body-Oriented Techniques.",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-secondary py-24 md:py-52 xl:py-36">
      <div className="mx-auto max-w-3xl md:max-w-sm lg:max-w-[30rem] xl:max-w-xl px-6 md:px-2">
        <h2
          className="mb-6 text-center font-heading text-3xl font-medium text-[#223614] md:text-4xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          My Professional Background
        </h2>

        <div className="border-t border-[#223614]/20 -space-y-2 md:-space-y-0">
          {items.map((item, index) => (
            <div key={index} className="border-b border-[#223614]/20">
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between py-4 text-left hover:bg-[#223614]/5 transition-colors px-2"
              >
                <span className="text-xl font-medium text-[#223614] md:text-2xl">
                  {item.title}
                </span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-2xl font-light text-[#223614]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-6 pt-1 text-base leading-relaxed text-[#223614]/80 md:text-lg max-w-[18rem] xl:max-w-[23rem] mx-auto">
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
