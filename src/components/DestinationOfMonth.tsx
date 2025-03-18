
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { monthlyDestination } from "@/lib/constants";
import { useState, useEffect } from "react";

interface DestinationOfMonthProps {
  className?: string;
}

export function DestinationOfMonth({ className }: DestinationOfMonthProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = monthlyDestination.image;
    img.onload = () => setImageLoaded(true);
  }, []);
  
  return (
    <section className={cn("py-16 md:py-24 bg-muted/50", className)}>
      <div className="container-custom">
        <Motion animation="fade-in-up">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
            Featured This Month
          </span>
          <h2 className="heading-2 mb-8">
            Destination of the Month
          </h2>
        </Motion>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Motion animation="slide-in-left" className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">{monthlyDestination.name}</h3>
            <p className="text-foreground/80 mb-6">
              {monthlyDestination.description}
            </p>
            
            {monthlyDestination.activities && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3">Top Activities:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {monthlyDestination.activities.map((activity, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-2 text-foreground/80"
                    >
                      <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <Button asChild className="group">
              <Link to={`/destinations/${monthlyDestination.id}`}>
                <span>Explore {monthlyDestination.name}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Motion>
          
          <Motion animation="slide-in-right" className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-lg">
              <div 
                className={cn(
                  "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}
                style={{ backgroundImage: `url(${monthlyDestination.image})` }}
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
