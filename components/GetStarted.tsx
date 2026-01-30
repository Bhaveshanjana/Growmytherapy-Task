import Link from "next/link";

export default function GetStarted() {
    return (
        <section className="bg-[#8a8b68] py-20 md:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center text-white md:px-12">
                <h2
                    className="mb-8 font-heading text-4xl font-medium md:text-5xl lg:text-6xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    Get started today.
                </h2>

                <div className="mx-auto mb-16 max-w-2xl space-y-4 text-lg font-medium leading-relaxed md:text-xl">
                    <p>
                        Ready to take the first step towards a happier, healthier you?
                    </p>
                    <p>
                        Contact me to book your first session. I look forward to starting this therapeutic journey with you.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Link
                        href="#contact"
                        className="group inline-flex items-center justify-center border border-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-[#8a8b68]"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                        <div className="flex flex-col items-center gap-1">
                            <span>GET IN</span>
                            <span className="flex items-center gap-2">
                                TOUCH
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
