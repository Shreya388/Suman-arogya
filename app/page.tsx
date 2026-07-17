import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DoctorsPreview from "@/components/DoctorsPreview";

export default function Home() {
  return (
    <>
    <Hero />

    <About />

    <DoctorsPreview />

    <Services />

    <Testimonials />

    <Contact />

    <Footer />
    </>
  );
}
