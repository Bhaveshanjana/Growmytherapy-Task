import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-screen pt-24 md:pt-32">
            <div className="mx-auto grid max-w-8xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-24 lg:px-16">
                {/* Left: Arch Image */}
                <div className="order-1 flex justify-center md:justify-start">
                    <div className="relative aspect-3/4 w-full max-w-xl overflow-hidden rounded-t-[500px]">
                        <Image
                            src="https://images.unsplash.com/photo-1586752002496-cd05ccef47f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlcmFwaXN0fGVufDB8fDB8fHww"
                            alt="Woman holding flowers covering face"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="order-2 flex flex-col items-center text-center -mt-12 -translate-x-20 md:text-left">
                    <h1
                        className="mb-6 font-heading text-5xl font-medium leading-tight text-[#223614] md:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Live your life<br />
                        in full bloom
                    </h1>

                    <p className="mb-8 text-lg font-medium text-[#223614]">
                        Therapy for Adults in Santa Monica, CA.
                    </p>

                    <button
                        className="group flex items-center gap-2 border border-[#223614] bg-transparent px-8 py-3 text-sm font-medium text-[#223614] transition-all hover:bg-[#223614] hover:text-white md:px-10 md:py-4 md:text-base"
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
