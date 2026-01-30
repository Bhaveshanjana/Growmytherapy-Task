'use client' // Required for Next.js App Router

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 10) {
                // Scrolling DOWN -> Hide Navbar
                setIsVisible(false);
            } else {
                // Scrolling UP -> Show Navbar
                setIsVisible(true);
            }

            // Update tracking variable
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]); // Re-run effect when lastScrollY changes to keep closure fresh

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                } bg-transparent`} // Consider adding 'bg-[#fbf6f1]/90 backdrop-blur-md' here so text doesn't overlap content
        >
            <div className="w-full px-6 py-6 md:px-12 lg:px-16">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="font-heading text-xl font-semibold text-[#223614] transition-opacity hover:opacity-80 md:text-2xl"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        Dr. Maya Reynolds
                    </Link>

                    <div className="flex items-center gap-6 md:gap-8">
                        <Link
                            href="#blog"
                            className="text-sm font-medium text-[#223614] transition-colors hover:text-gray-400 md:text-base"
                        >
                            Blog
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-[#223614] transition-colors hover:text-gray-400 md:text-base"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
