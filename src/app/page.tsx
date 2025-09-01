import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="services">
        <ServicesSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}