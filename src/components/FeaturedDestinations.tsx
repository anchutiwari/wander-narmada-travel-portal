
import { cn } from "@/lib/utils";
import { DestinationCard } from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { destinations } from "@/lib/constants";

interface FeaturedDestinationsProps {
  className?: string;
  limit?: number;
  showViewAll?: boolean;
}

export function FeaturedDestinations({
  className,
  limit = 4,
  showViewAll = true,
}: FeaturedDestinationsProps) {
  const featuredDestinations = destinations
    .filter(dest => dest.featured)
    .slice(0, limit);
  
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container-custom">
        <Motion animation="fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                Featured
              </span>
              <h2 className="heading-2 mb-4">
                Discover Enchanting Destinations
              </h2>
              <p className="text-foreground/80 max-w-2xl">
                Explore the most breathtaking destinations in the Narmada Valley, from ancient temples to natural wonders.
              </p>
            </div>
            
            {showViewAll && (
              <div className="mt-6 md:mt-0">
                <Button asChild variant="outline" className="group">
                  <Link to="/destinations">
                    <span>View All Destinations</span>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </Motion>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              name={destination.name}
              image={destination.image}
              description={destination.description}
              shortDescription={destination.shortDescription}
              activities={destination.activities}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
