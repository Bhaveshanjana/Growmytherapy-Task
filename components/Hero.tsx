import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen pt-24 md:pt-[7.4rem]">
            <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-24 lg:px-16">
                {/* Left: Arch Image */}
                {/* Mobile: Order 1 (Top) | Tablet/Desktop: Order 1 (Left) */}
                <div className="order-1 flex justify-center md:justify-start mt-14 sm:mt-52 xl:mt-0">
                    <div className="relative aspect-2/3 w-full max-w-44 md:max-w-xl overflow-hidden rounded-t-full">
                        <Image
                            src="/Hero-image.avif"
                            alt="Monstera leaf with shadow"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="order-2 flex flex-col items-center text-center xl:text-start -mt-10 sm:mt-52 lg:mt-40 xl:-mt-40 lg:-translate-x-0 xl:-translate-x-20">
                    <h1
                        className="mb-6 font-heading text-4xl sm:text-5xl font-medium leading-tight text-[#223614] md:text-5xl xl:text-6xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Stop just <br className="hidden xl:block" />
                        functioning <br className="hidden xl:block" />
                        Start truly living.
                    </h1>

                    {/* Added md:ml-7 to ensure it's centered on mobile but keeps your indentation on desktop */}
                    <p className="mb-8 xl:ml-6 text-[15px] font-medium text-[#223614]">
                        Grounded therapy for high-achievers navigating anxiety & burnout.
                    </p>

                    <button
                        className="group flex items-center gap-2 border border-dashed border-[#223614] bg-transparent px-8 py-3 text-sm font-medium text-[#223614] transition-all duration-500 hover:bg-olive hover:text-white md:text-base cursor-pointer"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        CONNECT WITH ME
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}