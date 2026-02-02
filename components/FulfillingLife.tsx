import Image from "next/image";
import Link from "next/link";

export default function FulfillingLife() {
    return (
        <section className="bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Left: Text Content */}
                <div className="order-2 md:order-1 flex flex-col justify-between ">
                    <div className="px-6 pt-1 pb-14 sm:pb-0 md:px-6 md:pt-24 lg:px-16 lg:py-40 translate-y-12">
                        <h2
                            className="mb-8 font-heading text-3xl font-medium text-black md:text-4xl leading-normal"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Functional on the outside.<br />
                            Exhausted on the inside.
                        </h2>

                        <div className="space-y-6 text-base md:text-[18px]">
                            <p style={{ fontFamily: "var(--font-lato)" }}>
                                You’ve spent years pushing through stress, meeting expectations, and keeping it all together. But lately, the strategies that used to work feel like they’re finally wearing thin.
                            </p>
                            <p style={{ fontFamily: "var(--font-lato)" }}>
                                You don't have to keep bracing for the next shoe to drop. Therapy is a space to finally drop the mask, slow down, and understand the root of your anxiety.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 w-full">
                        <div className="w-full border-t border-[#4f404037]"></div>
                        <div className="flex justify-center pb-6 pt-6 hover:bg-olive transition-all duration-500 cursor-pointer group">
                            <Link
                                href="#contact"
                                className=" flex items-center text-xs font-bold tracking-widest uppercase transition-colors hover:text-black"
                                style={{ fontFamily: "var(--font-montserrat)" }}
                            >
                                Get in Touch
                                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="order-1 md:order-2 relative min-h-[250px] sm:min-h-full w-full ">
                    <Image
                        src="/fullfilllifestyle-image2.avif"
                        alt="Flat lay with coffee, book, and flowers"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
