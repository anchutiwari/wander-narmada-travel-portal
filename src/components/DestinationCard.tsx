
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";

interface DestinationCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  className?: string;
  activities?: string[];
  delay?: number;
}

export function DestinationCard({
  id,
  name,
  image,
  description,
  shortDescription,
  className,
  activities,
  delay = 0,
}: DestinationCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Motion 
      animation="fade-in-up"
      delay={delay} 
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border card-hover",
        className
      )}
    >
      <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-t-xl">
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${image})` }}
          onLoad={() => setImageLoaded(true)}
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      
      <div className="relative p-6">
        <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-primary">
          {name}
        </h3>
        
        <p className="text-foreground/80 text-sm mb-4">
          {shortDescription}
        </p>
        
        <div className="mt-auto pt-2">
          <Button asChild variant="outline" size="sm" className="w-full group">
            <Link to={`/destinations/${id}`}>
              <span>Explore</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Motion>
  );
}
