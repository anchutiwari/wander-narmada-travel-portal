
import { Hero } from "@/components/Hero";
import { FeaturedDestinations } from "@/components/FeaturedDestinations";
import { DestinationOfMonth } from "@/components/DestinationOfMonth";
import { VehicleHomeSection } from "@/components/VehicleHomeSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { packages } from "@/lib/constants";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <FeaturedDestinations />
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Curated Experiences
                </span>
                <h2 className="heading-2 mb-4">
                  Explore Our Exclusive Packages
                </h2>
                <p className="text-foreground/80">
                  Discover our carefully crafted travel packages designed to provide you with the most authentic and memorable experiences in the Narmada Valley.
                </p>
              </div>
            </Motion>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {packages.slice(0, 2).map((pkg, index) => (
                <Motion 
                  key={pkg.id} 
                  animation="fade-in-up" 
                  delay={index * 100}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm card-hover"
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="py-1 px-2 bg-primary/80 text-primary-foreground text-xs font-medium rounded">
                          {pkg.duration}
                        </span>
                        <span className="py-1 px-2 bg-white/80 text-foreground text-xs font-medium rounded">
                          {pkg.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="block text-sm text-foreground/70 mb-1">Starting from</span>
                        <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                        <span className="text-sm text-foreground/70 ml-1">per person</span>
                      </div>
                      <Button asChild size="sm" variant="outline" className="group">
                        <Link to={`/packages/${pkg.id}`}>
                          <span>View Details</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                    
                    <p className="text-foreground/80 line-clamp-2">{pkg.description}</p>
                  </div>
                </Motion>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="group">
                <Link to="/packages">
                  <span>View All Packages</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <DestinationOfMonth />
        
        <VehicleHomeSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
