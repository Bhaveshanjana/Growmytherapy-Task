import Image from "next/image";
import Link from "next/link";

export default function FulfillingLife() {
    return (
        <section className="bg-[#afa499]">
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left: Text Content 
        Change: Added 'order-2' (for mobile) and 'md:order-1' (restores it for desktop) 
    */}
                <div className="order-2 md:order-1 flex flex-col justify-between bg-[#afa499]">
                    <div className="px-6 pt-16 md:px-12 md:pt-24 lg:px-24 lg:py-44 translate-y-12">
                        <h2
                            className="mb-8 font-heading text-4xl font-medium text-[#223614] md:text-5xl lg:text-6xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Live a fulfilling life.
                        </h2>

                        <div className="space-y-6 text-base text-[#223614] md:text-lg">
                            <p style={{ fontFamily: "var(--font-lato)" }}>
                                Life can be challenging—especially when you're trying to balance your personal and professional life.
                            </p>
                            <p style={{ fontFamily: "var(--font-lato)" }}>
                                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 w-full">
                        <div className="w-full border-t border-[#223614]/20"></div>
                        <div className="flex justify-center pb-6 pt-6">
                            <Link
                                href="#contact"
                                className="group flex items-center text-xs font-bold tracking-widest text-[#223614] uppercase transition-colors hover:text-black"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                Get in Touch
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right: Image 
        Change: Added 'order-1' (moves to top on mobile) and 'md:order-2' (moves to right on desktop)
    */}
                <div className="order-1 md:order-2 relative min-h-[400px] w-full md:min-h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80"
                        alt="Flat lay with coffee, book, and flowers"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
