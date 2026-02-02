import Image from "next/image";

export default function Specialties() {
    const specialties = [
        {
            title: "Anxiety & Panic",
            description: "Specializing in support for high-achieving adults struggling with constant worry, overthinking, and the physiological tension of panic.",
            image: "/specialties01.avif"
        },
        {
            title: "Trauma Recovery",
            description: "Utilizing evidence-based methods like EMDR and CBT to help clients navigate the impact of past experiences and reclaim a sense of safety.",
            image: "/specialties02.avif"
        },
        {
            title: "Burnout & Perfectionism",
            description: "Helping entrepreneurs and creatives reconnect with themselves while developing sustainable ways of managing high internal pressure.",
            image: "/specialties03.avif"
        }
    ];

    return (
        <section className=" py-16 md:py-[6.3rem]">
            <div className="mx-auto max-w-8xl px-6 sm:px-12">
                <h2
                    className="mb-12 text-center font-heading text-4xl font-medium text-[#223614] md:mb-16 md:text-5xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    My Specialties
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {specialties.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between border border-black bg-secondary/40 p-4 text-left"
                        >
                            <div>
                                <h3 className="mb-5 lg:mb-6 xl:mb-9 text-xl font-bold text-[#223614]">
                                    {item.title}
                                </h3>
                                <p className="mb-12 text-sm leading-relaxed text-[#223614]/90">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-auto md:-mt-7 xl:-mt-0 flex justify-center">
                                <div className="relative h-60 w-60 overflow-hidden rounded-full md:h-36 md:w-36 lg:h-52 lg:w-52 xl:h-80 xl:w-80">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
