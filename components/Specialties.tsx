import Image from "next/image";

export default function Specialties() {
    const specialties = [
        {
            title: "Self-Esteem",
            description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
            image: "https://images.unsplash.com/photo-1510940788648-9c488f785a96?auto=format&fit=crop&w=600&q=80" // Man by window/thoughtful
        },
        {
            title: "Relationships",
            description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
            image: "https://images.unsplash.com/photo-1621125211029-23c27181f72d?auto=format&fit=crop&w=600&q=80" // Woman sitting/contemplative
        },
        {
            title: "Burnout",
            description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
            image: "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=600&q=80" // Organizing/shelf/calm
        }
    ];

    return (
        <section className=" py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <h2
                    className="mb-12 text-center font-heading text-4xl font-medium text-[#223614] md:mb-16 md:text-5xl"
                    style={{ fontFamily: "var(--font-playfair)" }}
                >
                    My Specialties
                </h2>

                <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                    {specialties.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between border border-[#223614]/20 bg-[#e8e4dc]/50 p-4 text-left transition-colors hover:bg-[#e8e4dc]"
                        >
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-[#223614] md:text-2xl">
                                    {item.title}
                                </h3>
                                <p className="mb-8 text-sm leading-relaxed text-[#223614]/90 md:text-base">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-auto flex justify-center">
                                <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white/30 shadow-sm md:h-56 md:w-56">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
