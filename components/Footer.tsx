import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            {/* Main Footer Content */}
            <div className="bg-[#fbf6f1] py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                    <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">

                        {/* Column 1: Brand & Contact */}
                        <div className="flex flex-col items-center md:items-start">
                            <h2
                                className="mb-8 font-heading text-3xl font-medium text-[#223614] md:text-4xl"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Dr. Maya Reynolds
                            </h2>
                            <div className="space-y-6 text-base text-[#223614]">
                                <p>
                                    123th Street 45 W<br />
                                    Santa Monica, CA 90401
                                </p>
                                <div className="flex flex-col gap-1">
                                    <a href="mailto:email@example.com" className="underline decoration-1 underline-offset-4 hover:opacity-80">
                                        email@example.com
                                    </a>
                                    <a href="tel:5555555555" className="hover:opacity-80">
                                        (555) 555-5555
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Hours */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3
                                className="mb-6 font-heading text-2xl font-medium text-[#223614]"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Hours
                            </h3>
                            <div className="text-base text-[#223614]">
                                <p>Monday – Friday</p>
                                <p>10am – 6pm</p>
                            </div>
                        </div>

                        {/* Column 3: Find */}
                        <div className="flex flex-col items-center md:items-end">
                            <h3
                                className="mb-6 font-heading text-2xl font-medium text-[#223614]"
                                style={{ fontFamily: "var(--font-playfair)" }}
                            >
                                Find
                            </h3>
                            <nav className="flex flex-col gap-2 text-base text-[#223614] md:text-right">
                                <Link href="/" className="underline decoration-1 underline-offset-4 hover:opacity-80">
                                    Home
                                </Link>
                                <Link href="#contact" className="underline decoration-1 underline-offset-4 hover:opacity-80">
                                    Contact
                                </Link>
                                <Link href="#blog" className="underline decoration-1 underline-offset-4 hover:opacity-80">
                                    Blog
                                </Link>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#e8e4dc] py-12 text-center text-sm text-[#223614]">
                <div className="mx-auto max-w-7xl px-6 space-y-6">

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 underline decoration-1 underline-offset-2">
                        <Link href="#" className="hover:opacity-80">Privacy & Cookies Policy</Link>
                        <Link href="#" className="hover:opacity-80">Good Faith Estimate</Link>
                        <Link href="#" className="hover:opacity-80">Website Terms & Conditions</Link>
                        <Link href="#" className="hover:opacity-80">Disclaimer</Link>
                    </div>

                    <p>
                        Website Template Credits: <a href="#" className="underline decoration-1 underline-offset-2 hover:opacity-80">Go Bloom Creative</a>
                    </p>

                    <p>
                        All Rights Reserved © 2024 Your Business Name Here, LLC.
                    </p>
                </div>
            </div>
        </footer>
    );
}
