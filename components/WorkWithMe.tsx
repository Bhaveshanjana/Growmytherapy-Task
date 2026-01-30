import Image from "next/image";
import Link from "next/link";

export default function WorkWithMe() {
    return (
        <section className="bg-[#8a8b68]">
            <div className="grid md:grid-cols-2">
                {/* Left: Image (Desktop) / Top: Image (Mobile) */}
                <div className="relative min-h-[400px] w-full md:min-h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                        alt="Woman writing in notebook"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Text Content (Desktop) / Bottom: Text (Mobile) */}
                <div className="flex flex-col justify-between bg-[#8a8b68]">
                    <div className="px-6 pt-16 md:px-12 md:pt-24 lg:px-24 lg:pt-44 translate-y-12">
                        <h2
                            className="mb-8 font-heading text-4xl font-medium text-[#223614] md:text-5xl lg:text-6xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Safe, supportive, and effective.
                        </h2>

                        <div className="space-y-6 text-base text-[#223614] md:text-lg">
                            <p style={{ fontFamily: "var(--font-lato)" }}>
                                My approach is grounded in empathy and evidence-based practices. I provide a safe space where you can explore your thoughts and feelings without judgment.
                            </p>
                            <p style={{ fontFamily: "var(--font-lato)" }}>
                                Together, we will work towards understanding your unique challenges and developing strategies to overcome them, empowering you to live your best life.
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
