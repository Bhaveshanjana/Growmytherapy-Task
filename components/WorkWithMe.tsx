import Image from "next/image";
import Link from "next/link";

export default function WorkWithMe() {
    return (
        <section className="bg-office">
            <div className="grid md:grid-cols-2">
                {/* Left: Image (Desktop) / Top: Image (Mobile) */}
                <div className="relative min-h-[400px] w-full md:min-h-[600px]">
                    <Image
                        src="/workwithme-image.avif"
                        alt="Woman writing in notebook"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Text Content (Desktop) / Bottom: Text (Mobile) */}
                <div className="flex flex-col justify-between">
                    <div className="px-6 pt-12 md:px-12 md:pt-24 lg:px-16 xl:pt-28">
                        <h2
                            className="mb-8 font-heading text-4xl font-medium text-[#223614] md:text-5xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            You don&apos;t have to do this all alone.
                        </h2>

                        <div className="space-y-6 text-[17px] text-[#223614] md:text-lg">
                            <p style={{ fontFamily: "var(--font-lato)" }}>
                                Many of the people I work with are high-achieving and self-aware, but internally feel:
                            </p>

                            <ul
                                className="list-disc pl-12 space-y-3"
                                style={{ fontFamily: "var(--font-lato)" }}
                            >
                                <li>Overwhelmed by anxiety, stress, or past experiences</li>
                                <li>Stuck in overthinking or emotionally on edge</li>
                                <li>Functioning on the outside, but exhausted on the inside</li>
                                <li>Constant worry or tension in the body</li>
                                <li>A sense that you are always bracing for something to go wrong</li>
                            </ul>

                            <p style={{ fontFamily: "var(--font-lato)" }} className="">
                                My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 w-full">
                        <div className="w-full border-t border-[#223614]/20"></div>
                        <div className="flex justify-center pb-6 pt-6 hover:bg-olive group transition-all duration-500">
                            <Link
                                href="#contact"
                                className="flex items-center text-xs font-bold tracking-widest text-[#223614] uppercase transition-colors hover:text-black"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                Work with me
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
