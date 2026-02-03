import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-footer py-7 md:py-12 md:pb-24 lg:pb-36">
        <div className="mx-auto max-w-8xl px-6 lg:px-14">
          <div className="grid gap-8 text-center md:grid-cols-2 md:text-left">
            {/* Left Side: Brand & Contact */}
            <div className="flex flex-col items-center md:items-start">
              <h2
                className="mb-8 font-heading text-3xl font-medium text-white md:text-4xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Dr. Maya Reynolds
              </h2>
              <div className="space-y-10 text-lg text-white">
                <p>
                  123th Street 45 W<br />
                  Santa Monica, CA 90401
                </p>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:email@example.com"
                    className="underline decoration-1 underline-offset-4 hover:opacity-80"
                  >
                    email@example.com
                  </a>
                  <a href="tel:5555555555" className="hover:opacity-80">
                    (555) 555-5555
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Wrapper for Hours & Find */}
            <div className="flex flex-col gap-8 md:flex-row md:justify-end md:gap-12 lg:gap-64">
              {/* Hours */}
              <div className="flex flex-col items-center md:items-start">
                <h3
                  className="mb-8 font-heading text-3xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Hours
                </h3>
                <div className="text-lg text-white">
                  <p>Monday – Friday</p>
                  <p>10am – 6pm</p>
                </div>
              </div>

              {/* Find */}
              <div className="flex flex-col items-center md:items-start">
                <h3
                  className="mb-8 font-heading text-3xl font-medium text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Find
                </h3>
                <nav className="flex flex-col gap-2 text-lg text-white md:text-right">
                  <Link
                    href="/"
                    className="underline decoration-1 underline-offset-4 hover:opacity-80"
                  >
                    Home
                  </Link>
                  <Link
                    href="#contact"
                    className="underline decoration-1 underline-offset-4 hover:opacity-80"
                  >
                    Contact
                  </Link>
                  <Link
                    href="#blog"
                    className="underline decoration-1 underline-offset-4 hover:opacity-80"
                  >
                    Blog
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-footer relative pt-2 pb-3 md:pt-12 md:py-2 xl:pt-14 xl:pb-6 text-center text-[16px] text-white border-t border-gray-600">
        <div className="mx-auto max-w-7xl px-6 space-y-5">
          <div className="flex flex-wrap justify-center gap-x-6 md:gap-y-2 md:pb-0 underline decoration-1 underline-offset-2">
            <Link href="#" className="hover:opacity-80">
              Privacy & Cookies Policy
            </Link>
            <Link href="#" className="hover:opacity-80">
              Good Faith Estimate
            </Link>
            <Link href="#" className="hover:opacity-80">
              Website Terms & Conditions
            </Link>
            <Link href="#" className="hover:opacity-80">
              Disclaimer
            </Link>
          </div>
          <p className="max-w-[17rem] sm:max-w-full mx-auto">
            Website Template Credits:{" "}
            <a
              href="#"
              className="underline decoration-1 underline-offset-2 hover:opacity-80"
            >
              Go Bloom Creative
            </a>
          </p>
          <p className="max-w-sm mx-auto md:max-w-full sm:pt-4 xl:pt-8">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
