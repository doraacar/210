"use client";

import Image from "next/image";
import { LayoutGrid, DiamondPlus, Grid3x3 } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  icon: React.ReactNode;
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const services: Service[] = [
  {
    id: "metallic-marble",
    title: "Epoxy Metallic Marble Coatings",
    description: "Transform your floors with our premium metallic marble epoxy coatings that create stunning, unique patterns resembling natural marble with unmatched durability.",
    benefits: [
      "Unique metallic marble patterns",
      "Superior chemical resistance", 
      "Non-slip surface options",
      "Easy maintenance and cleaning"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756755890523-m2wmf7nnis.jpg",
    icon: <DiamondPlus className="w-8 h-8" />
  },
  {
    id: "garage-floor",
    title: "Polyaspartic Garage Floor Coatings",
    description: "Fast-curing, ultra-durable polyaspartic coatings designed specifically for garage floors, offering superior protection against oil, chemicals, and heavy traffic.",
    benefits: [
      "Fast 24-hour cure time",
      "Extreme durability and impact resistance",
      "Oil and chemical resistant",
      "UV stable colors that won't fade"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756755892564-tich51ydnyc.jpg",
    icon: <LayoutGrid className="w-8 h-8" />
  },
  {
    id: "flake-flooring",
    title: "Epoxy Flake Flooring",
    description: "Professional decorative flake epoxy systems that combine beauty with performance, perfect for residential and commercial applications requiring both aesthetics and durability.",
    benefits: [
      "Decorative flake patterns",
      "Slip-resistant textured surface",
      "Seamless and hygienic finish",
      "Long-lasting color stability"
    ],
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756755907214-sumdt16ray.jpg",
    icon: <Grid3x3 className="w-8 h-8" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Flooring Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in three distinct epoxy flooring systems, each engineered for specific applications and designed to deliver exceptional performance, beauty, and longevity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li
                        key={benefitIndex}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                <button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  onClick={() => scrollToSection('contact')}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Floors?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Contact us today for a free consultation and discover which epoxy solution is perfect for your space.
            </p>
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}