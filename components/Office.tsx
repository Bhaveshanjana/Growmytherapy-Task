import Image from "next/image";

export default function Office() {
    return (
        <section className="bg-[#afa499] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <h2
                            className="mb-6 font-heading text-4xl font-medium text-[#223614] md:text-5xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            A Calm Space for Healing
                        </h2>
                        <p className="mb-8 font-subheading text-lg leading-relaxed text-[#223614] md:text-xl" style={{ fontFamily: "var(--font-lato)" }}>
                            My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                        </p>
                        <div className="space-y-4 font-subheading text-base text-[#223614]/80" style={{ fontFamily: "var(--font-lato)" }}>
                            <p>📍 123th Street 45 W, Santa Monica, CA 90401</p>
                            <p>🌿 In-person & Hybrid Sessions Available</p>
                        </div>
                    </div>

                    {/* Images Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative h-64 w-full overflow-hidden rounded-tr-[80px] md:h-80">
                            <Image
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                                alt="Therapy office seating area"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative mt-12 h-64 w-full overflow-hidden rounded-bl-[80px] md:h-80">
                            <Image
                                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80"
                                alt="Green plants in office"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
