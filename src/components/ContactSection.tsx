"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Phone, Check, MapPin, MessageSquareQuote } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.projectType) {
      toast.error("Please select a project type");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you for your interest! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space with premium epoxy flooring? Contact us for a free consultation and detailed quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Contact Information
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Get in touch with our epoxy flooring experts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="bg-primary rounded-full p-3">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a 
                      href="tel:(210)-797-8123" 
                      className="text-primary hover:text-primary/80 text-lg font-medium transition-colors"
                    >
                      (210) 797-8123
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="bg-primary rounded-full p-3">
                    <MessageSquareQuote className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a 
                      href="mailto:epoxymaster210@gmail.com" 
                      className="text-primary hover:text-primary/80 text-lg font-medium transition-colors"
                    >
                      epoxymaster210@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Service Area
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Proudly serving South Texas communities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">San Antonio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Austin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">New Braunfels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Boerne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Seguin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">Surrounding Areas</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  We provide professional epoxy flooring services throughout South Texas. 
                  Contact us to confirm service availability in your area.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <Card className="bg-card border border-border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Request Your Free Quote</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      placeholder="Enter your full name"
                      className="bg-background border-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      placeholder="(555) 123-4567"
                      className="bg-background border-input"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    placeholder="your.email@example.com"
                    className="bg-background border-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-foreground font-medium">
                    Project Type *
                  </Label>
                  <Select value={formData.projectType} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-background border-input">
                      <SelectValue placeholder="Select your project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-garage">Residential Garage</SelectItem>
                      <SelectItem value="commercial-warehouse">Commercial Warehouse</SelectItem>
                      <SelectItem value="retail-showroom">Retail Showroom</SelectItem>
                      <SelectItem value="basement-floor">Basement Floor</SelectItem>
                      <SelectItem value="workshop-studio">Workshop/Studio</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    placeholder="Please describe your project, including approximate square footage, current floor condition, and any specific requirements or preferences..."
                    className="bg-background border-input min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  {isLoading ? "Sending..." : "Get Free Quote"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted about your project. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;