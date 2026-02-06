import type { Metadata } from "next";
import { Playfair_Display, Inter, Lato, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Licensed Clinical Psychologist",
  description: "Licensed Clinical Psychologist in Santa Monica, California. Offering therapy for anxiety, trauma, burnout, and stress.",
  keywords: ["Clinical Psychologist", "Santa Monica", "Therapy", "Anxiety", "Trauma", "Burnout", "Mental Health", "Dr. Maya Reynolds", "California", "Psychotherapy"],
  metadataBase: new URL("https://reynolds-template.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Maya Reynolds | Licensed Clinical Psychologist",
    description: "Licensed Clinical Psychologist in Santa Monica, California. Offering therapy for anxiety, trauma, burnout, and stress.",
    url: "/",
    siteName: "Dr. Maya Reynolds",
    images: [
      {
        url: "/MayaReynolds.png",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${lato.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
