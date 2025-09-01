"use client";

import { ShieldCheck, Diamond, MonitorSmartphone, LocateFixed } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    {
      icon: <LocateFixed className="w-8 h-8 text-primary" />,
      title: "Local South Texas Expertise",
      description: "Deep understanding of regional climate conditions, building codes, and customer needs specific to our area."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Proven Experience",
      description: "Years of professional experience with hundreds of successful installations across residential and commercial properties."
    },
    {
      icon: <Diamond className="w-8 h-8 text-primary" />,
      title: "Premium Quality Materials",
      description: "We use only the highest-grade epoxy systems and materials to ensure lasting durability and performance."
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
      title: "Complete Customer Satisfaction",
      description: "From initial consultation to project completion, we prioritize clear communication and exceeding expectations."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As South Texas's premier epoxy flooring contractor, we bring unmatched expertise, 
              quality craftsmanship, and local knowledge to every project we undertake.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Features Grid */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col items-start space-y-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Trust Factors */}
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Our Commitment to Excellence
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Licensed and insured for your protection and peace of mind</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Comprehensive warranties on all installation work</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Serving all of South Texas with reliable, on-time service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Free detailed consultations and transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional Work Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756755904261-pqp54z33mop.jpg"
                  alt="Professional epoxy flooring materials and tools"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Bottom Stats/Trust Section */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}