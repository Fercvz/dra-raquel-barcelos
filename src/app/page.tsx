import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HealthyCare from "@/components/HealthyCare";
import WhenToSeekHelp from "@/components/WhenToSeekHelp";
import Services from "@/components/Services";
import FirstVisit from "@/components/FirstVisit";
import VideoCarousel from "@/components/VideoCarousel";
import FAQ from "@/components/FAQ";
import Office from "@/components/Office";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <HealthyCare />
        <WhenToSeekHelp />
        <Services />
        <FirstVisit />
        <VideoCarousel />
        <FAQ />
        <Office />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTA />
    </>
  );
}
