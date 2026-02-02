'use client'

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only trigger hide logic if menu is CLOSED
            if (!isMenuOpen) {
                if (currentScrollY > lastScrollY && currentScrollY > 10) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMenuOpen]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out 
                ${isVisible ? "translate-y-0" : "-translate-y-full"} 
                ${isMenuOpen ? "bg-transparent" : "backdrop-blur-md bg-white/10"}`}
            >
                <div className="w-full px-6 py-4 md:px-12 lg:px-16">

                    {/* --- DESKTOP VIEW (Hidden on Mobile/Tablet) --- */}
                    <div className="hidden lg:flex items-center justify-between">
                        <Link
                            href="/"
                            className="font-heading text-xl font-semibold text-[#223614] transition-opacity hover:opacity-80 md:text-3xl"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Dr. Maya Reynolds
                        </Link>

                        <div className="flex items-center gap-10">
                            <Link
                                href="#blog"
                                className="text-lg font-medium text-[#223614] transition-colors hover:text-gray-400"
                            >
                                Blog
                            </Link>
                            <Link
                                href="#contact"
                                className="text-lg font-medium text-[#223614] transition-colors hover:text-gray-400"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* --- MOBILE/TABLET VIEW (Hidden on Desktop) --- */}
                    <div className="flex lg:hidden items-center justify-between my-6">
                        {/* Hamburger Icon (Left) */}
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="text-[#223614] focus:outline-none"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M4 16H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </button>

                        {/* Brand Name (Right) */}
                        <Link
                            href="/"
                            className="font-heading text-xl font-semibold text-[#223614]"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Dr. Maya Reynolds
                        </Link>
                    </div>
                </div>
            </nav>

            {/* --- FULL SCREEN MOBILE MENU OVERLAY --- */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-[#FFFBF5] text-[#223614] flex flex-col h-screen w-full animate-in fade-in duration-200">

                    {/* Menu Header: Close (Left) & Name (Right) */}
                    <div className="w-full px-8 py-6 flex items-center justify-between">
                        {/* Close Icon (Left) */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[#223614] focus:outline-none p-4"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Brand Name (Right) */}
                        <span
                            className="font-heading text-xl font-semibold mr-4"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Dr. Maya Reynolds
                        </span>
                    </div>

                    {/* Menu Links (Centered) */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-8">
                        <Link
                            href="#blog"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl font-medium font-heading hover:opacity-70 transition-opacity"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Blog
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl font-medium font-heading hover:opacity-70 transition-opacity"
                            style={{ fontFamily: "var(--font-playfair)" }}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};