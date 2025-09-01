"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Image } from "lucide-react";

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "Metallic Marble Garage Floor",
    category: "Residential",
    description: "Stunning metallic marble epoxy with deep depth and luxurious finish",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center",
    beforeImageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Industrial Warehouse Coating",
    category: "Commercial",
    description: "High-performance industrial epoxy coating for heavy-duty applications",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Decorative Flake Flooring",
    category: "Residential",
    description: "Colorful decorative flake system with superior durability",
    imageUrl: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d5d8?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Showroom Polished Concrete",
    category: "Commercial",
    description: "High-gloss polished concrete with exceptional clarity and shine",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Garage Transformation",
    category: "Residential",
    description: "Complete garage makeover with premium epoxy coating system",
    imageUrl: "https://images.unsplash.com/photo-1558618065-161bdc4e4e26?w=800&h=600&fit=crop&crop=center",
    beforeImageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Retail Store Flooring",
    category: "Commercial",
    description: "Seamless epoxy flooring perfect for high-traffic retail environments",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 7,
    title: "Basement Floor Coating",
    category: "Residential",
    description: "Moisture-resistant basement flooring with anti-slip properties",
    imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop&crop=center"
  },
  {
    id: 8,
    title: "Restaurant Kitchen Floor",
    category: "Commercial",
    description: "Food-safe epoxy flooring designed for commercial kitchen use",
    imageUrl: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center"
  }
];

const categories = ["All", "Residential", "Commercial"];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "showcase">("grid");

  const filteredProjects = portfolioProjects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the quality and craftsmanship that sets us apart. From stunning metallic finishes 
            to industrial-grade coatings, each project showcases our commitment to excellence.
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="flex items-center gap-2"
            >
              <LayoutGrid className="w-4 h-4" />
              Grid View
            </Button>
            <Button
              variant={viewMode === "showcase" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewMode("showcase")}
              className="flex items-center gap-2"
            >
              <Image className="w-4 h-4" />
              Showcase
            </Button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2 transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className={cn(
          "grid gap-8",
          viewMode === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        )}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                viewMode === "showcase" && "aspect-[4/3]"
              )}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={cn(
                    "w-full object-cover transition-all duration-700 group-hover:scale-110",
                    viewMode === "grid" ? "h-64" : "h-full"
                  )}
                />
                
                {/* Before/After Toggle for projects with before images */}
                {project.beforeImageUrl && hoveredProject === project.id && (
                  <img
                    src={project.beforeImageUrl}
                    alt={`${project.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 hover:opacity-100"
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Before/After Label */}
                {project.beforeImageUrl && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Hover for Before
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className={cn(
                "p-6",
                viewMode === "showcase" && "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              )}>
                <h3 className={cn(
                  "text-xl font-bold mb-2 transition-colors duration-300",
                  viewMode === "showcase" ? "text-white" : "text-foreground group-hover:text-primary"
                )} style={{ fontFamily: 'var(--font-heading)' }}>
                  {project.title}
                </h3>
                <p className={cn(
                  "text-sm line-clamp-2",
                  viewMode === "showcase" ? "text-gray-200" : "text-muted-foreground"
                )}>
                  {project.description}
                </p>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-primary/50 rounded-lg transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              Ready to Transform Your Space?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every project tells a story of transformation. Let us help you write yours with premium epoxy flooring solutions.
            </p>
            <Button size="lg" className="px-8 py-3">
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}