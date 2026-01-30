import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
    return (
        <section className="bg-[#e8e4dc] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-24">

                    {/* Text Content */}
                    <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
                        <h2
                            className="mb-6 font-heading text-4xl font-medium text-[#223614] md:mb-8 md:text-5xl lg:text-6xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Hi, I&apos;m Dr. Maya.
                        </h2>

                        <p
                            className="mb-8 text-base leading-relaxed text-[#223614] md:text-lg"
                            style={{ fontFamily: "var(--font-lato)" }}
                        >
                            I&apos;m committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we&apos;ll work together to navigate the challenges life throws your way.
                        </p>

                        <Link
                            href="#contact"
                            className="group flex items-center border border-[#223614] bg-transparent px-8 py-3 text-xs font-bold tracking-widest text-[#223614] uppercase transition-colors hover:bg-[#223614] hover:text-white"
                            style={{ fontFamily: "var(--font-montserrat)" }}
                        >
                            Let&apos;s Chat
                            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    {/* Right: Images (Desktop) / Top: Images (Mobile) */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative h-[400px] w-full max-w-md md:h-[500px]">
                            {/* Arch Image */}
                            <div className="absolute top-0 right-10 h-[85%] w-[85%] overflow-hidden rounded-t-[500px] md:right-auto md:left-0 md:h-[90%] md:w-[90%]">
                                <Image
                                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80"
                                    alt="Dr. Maya holding flowers"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Circular Overlay Image */}
                            <div className="absolute bottom-0 right-0 h-40 w-40 overflow-hidden rounded-full border-4 border-[#fbf6f1] shadow-lg md:h-56 md:w-56">
                                <Image
                                    src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=500&q=80"
                                    alt="White flowers detail"
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
