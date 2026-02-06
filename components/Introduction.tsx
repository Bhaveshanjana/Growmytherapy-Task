import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return (
        <section className="bg-secondary md:py-[6rem] md:pb-[9.5rem]">
            <div className="mx-auto max-w-7xl px-6 md:px-14 xl:px-2">
                <div className="grid pb-20 md:pb-0 md:grid-cols-2 md:items-center lg:gap-24">

                    {/* Text Content */}
                    <div className="order-2 md:order-1 flex flex-col  md:text-left">
                        <h2
                            className="-mt-10 md:-mt-0 mb-6 font-heading text-4xl font-medium text-[#223614] md:mb-8 md:text-4xl xl:text-5xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Hi, I&apos;m Dr. Maya.
                        </h2>

                        <div className="flex items-center justify-center flex-col">
                            <p
                                className="mb-8 text-base leading-relaxed text-[#223614] md:text-lg lg:text-xl"
                                style={{ fontFamily: "var(--font-lato)" }}
                            >
                                Based in Santa Monica, my goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself. Together, we can create a space to slow down, reconnect, and develop more sustainable ways of living and working.
                            </p>

                            <Link
                                href="#contact"
                                className="group flex items-center border border-dashed border-[#223614] bg-transparent px-8 py-3 text-xs font-bold tracking-widest text-[#223614] uppercase transition-all duration-500 hover:bg-olive hover:text-white w-fit xl:translate-y-12"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                Let&apos;s Chat
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right: Images (Desktop) / Top: Images (Mobile) */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative h-[450px] w-full max-w-sm md:h-[480px] xl:h-[650px] md:translate-x-6 lg:translate-x-0 xl:-translate-x-20">
                            <div className="absolute top-[4.8rem] right-20 h-[65%] w-[55%] overflow-hidden rounded-t-[500px] md:top-0 md:right-auto md:left-0 md:h-full md:w-[80%] lg:w-[90%] xl:w-full md:mr-0">
                                <Image
                                    src="/MayaReynolds.png"
                                    alt="Dr. Maya holding flowers"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="absolute bottom-20 md:-bottom-12 xl:translate-y-20 right-[3rem] sm:-right-6 md:right-8 lg:-right-4 xl:-right-28 xl:bottom-6 h-30 w-30 md:h-50 md:w-50 overflow-hidden rounded-full xl:h-72 xl:w-72">
                                <Image
                                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JlZW4lMjBsZWFmfGVufDB8fDB8fHww" // Green Leaf Texture
                                    alt="Nature detail texture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
