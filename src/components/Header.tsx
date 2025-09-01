"use client";

import { useState } from "react";
import { Menu, House, PhoneCall, ContactRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756756890484-nyqd6tz94gk.jpg"
              alt="Epoxy Master Flooring 210 Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="text-2xl font-bold font-heading text-primary">
              Epoxy Master Flooring 210
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:210-797-8123"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="font-medium">(210) 797-8123</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              <ContactRound className="h-4 w-4" />
              <span className="font-medium">Get Quote</span>
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="flex md:hidden lg:hidden items-center space-x-4">
            <a
              href="tel:210-797-8123"
              className="flex items-center text-primary"
            >
              <PhoneCall className="h-5 w-5" />
            </a>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756756890484-nyqd6tz94gk.jpg"
                      alt="Epoxy Master Flooring 210 Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <div className="text-lg font-bold font-heading text-primary">
                      Epoxy Master Flooring 210
                    </div>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-2 text-left cursor-pointer"
                      >
                        {item.name}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile Contact Info */}
                  <div className="border-t border-border pt-6 mt-8">
                    <div className="flex flex-col space-y-4">
                      <a
                        href="tel:210-797-8123"
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200"
                      >
                        <PhoneCall className="h-5 w-5" />
                        <span className="font-medium">(210) 797-8123</span>
                      </a>
                      <a
                        href="mailto:info@epoxymasterflooring210.com"
                        className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200"
                      >
                        <ContactRound className="h-5 w-5" />
                        <span className="font-medium">info@epoxymasterflooring210.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Tablet Navigation Menu */}
          <div className="hidden md:flex lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1756756890484-nyqd6tz94gk.jpg"
                      alt="Epoxy Master Flooring 210 Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <div className="text-lg font-bold font-heading text-primary">
                      Epoxy Master Flooring 210
                    </div>
                  </div>
                  
                  {/* Tablet Contact Info */}
                  <div className="flex flex-col space-y-4 border-b border-border pb-6 mb-6">
                    <a
                      href="tel:210-797-8123"
                      className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <PhoneCall className="h-5 w-5" />
                      <span className="font-medium">(210) 797-8123</span>
                    </a>
                    <a
                      href="mailto:info@epoxymasterflooring210.com"
                      className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <ContactRound className="h-5 w-5" />
                      <span className="font-medium">info@epoxymasterflooring210.com</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}