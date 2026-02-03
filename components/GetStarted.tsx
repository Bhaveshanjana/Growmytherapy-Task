import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="bg-olive py-32 md:py-[10rem] xl:py-[8rem]">
      <div className="mx-auto max-w-4xl md:max-w-md xl:max-w-2xl px-6 text-center text-white md:px-12">
        <h2
          className="mb-8 font-heading text-4xl font-medium xl:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Get started today.
        </h2>

        <div className="mx-auto mb-16 max-w-2xl space-y-4 text-lg  leading-relaxed">
          <p>
            Finding the right therapist is about fit. If you are looking for a
            space to slow down, reconnect, and develop more sustainable ways of
            living, I may be the right support for you.
          </p>
        </div>

        <div className="flex justify-center md:py-5">
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center border border-dashed border-white px-7 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-[#8a8b68] duration-500"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <div className="flex items-center gap-1">
              <span>GET IN</span>
              <span className="flex items-center gap-2">
                TOUCH
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
