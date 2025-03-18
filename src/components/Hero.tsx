
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  fullHeight?: boolean;
}

export function Hero({
  title = "Explore Narmada Valley with Us",
  subtitle = "Aaradhya Tourism Package",
  description = "Discover the serene beauty, rich culture, and spiritual heritage of the enchanting Narmada Valley with our curated travel experiences.",
  image = "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ctaText = "Explore Packages",
  ctaLink = "/packages",
  className,
  fullHeight = true,
}: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoaded(true);
  }, [image]);
  
  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden",
        fullHeight ? "min-h-screen" : "min-h-[60vh]",
        className
      )}
    >
      {/* Background image with parallax effect */}
      <div 
        className={cn(
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
          loaded ? "opacity-100" : "opacity-0"
        )}
        style={{ 
          backgroundImage: `url(${image})`,
          transform: "scale(1.05)",
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
      
      {/* Content */}
      <div className="relative container-custom flex flex-col justify-center items-start h-full z-10 pt-32 pb-24">
        <div className="max-w-3xl">
          <Motion animation="fade-in">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              {subtitle}
            </span>
          </Motion>
          
          <Motion animation="fade-in-up" delay={200}>
            <h1 className="heading-1 text-foreground mb-6">
              {title}
            </h1>
          </Motion>
          
          <Motion animation="fade-in-up" delay={400}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
              {description}
            </p>
          </Motion>
          
          <Motion animation="fade-in-up" delay={600}>
            <Button asChild size="lg" className="group">
              <Link to={ctaLink}>
                {ctaText}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Motion>
        </div>
      </div>
    </div>
  );
}
