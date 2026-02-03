import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FulfillingLife from "@/components/FulfillingLife";
import Specialties from "@/components/Specialties";
import WorkWithMe from "@/components/WorkWithMe";
import Introduction from "@/components/Introduction";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import Office from "@/components/Office";
import GetStarted from "@/components/GetStarted";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FulfillingLife />
      <Specialties />
      <WorkWithMe />
      <Introduction />
      <FAQ />
      <ProfessionalBackground />
      <Office />
      <GetStarted />
      <Footer />
    </div>
  );
}
