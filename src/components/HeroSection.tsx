"use client";

import { Button } from "@/components/ui/button";
import { Phone, Quote } from "lucide-react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756755914688-yslrpyuvpnr.jpg"
          alt="Professional epoxy flooring installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="w-12 h-12 mx-auto mb-6 text-primary opacity-80" />
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl" style={{ fontFamily: 'var(--font-heading)', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            South Texas Premier
            <span className="block text-primary drop-shadow-2xl">Epoxy Flooring Specialists</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            Transform your concrete floors with professional-grade epoxy solutions. 
            Serving San Antonio and surrounding areas with unmatched quality and craftsmanship.
          </p>

          {/* Value Proposition */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm md:text-base">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                <span className="text-gray-100 drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>Local South Texas Experts</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                <span className="text-gray-100 drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>Premium Materials & Techniques</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                <span className="text-gray-100 drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>Lifetime Quality Guarantee</span>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button
              size="lg"
              className="w-full sm:w-48 h-14 text-lg font-semibold bg-primary hover:bg-primary/90 text-white border-2 border-primary transition-all duration-200"
              onClick={() => scrollToSection('contact')}
            >
              Get a Free Quote
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-48 h-14 text-lg font-semibold bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-primary hover:text-primary transition-all duration-200"
              asChild
            >
              <a href="tel:210-797-8123" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                (210) 797-8123
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4 drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>Trusted by South Texas homeowners and businesses</p>
            <div className="flex flex-wrap justify-center gap-8 text-xs text-gray-400">
              <span className="drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>✓ Licensed & Insured</span>
              <span className="drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>✓ 10+ Years Experience</span>
              <span className="drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>✓ Free Estimates</span>
              <span className="drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>✓ Same-Day Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/20 rounded-full opacity-30"></div>
    </section>
  );
}