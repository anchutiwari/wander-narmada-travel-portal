
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function VehicleHomeSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Motion animation="slide-in-left">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop"
                  alt="Vehicle Rental" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg md:max-w-xs">
                <span className="text-primary font-semibold">Premium Service</span>
                <h3 className="text-xl font-bold mt-2 mb-3">Comfortable Transportation</h3>
                <p className="text-foreground/80 text-sm">
                  Travel in comfort with our well-maintained vehicles driven by experienced drivers who know the region intimately.
                </p>
              </div>
            </div>
          </Motion>
          
          <Motion animation="slide-in-right">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Vehicle Services
            </span>
            <h2 className="heading-2 mb-6">
              Reliable Car Rental Services
            </h2>
            <p className="text-foreground/80 mb-8">
              Explore the Narmada Valley at your own pace with our reliable car rental services. We offer a range of comfortable vehicles with experienced drivers who are familiar with the region.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Well-Maintained Vehicles</h4>
                  <p className="text-foreground/70 text-sm">Modern, regularly serviced cars for a smooth journey.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Experienced Drivers</h4>
                  <p className="text-foreground/70 text-sm">Professional drivers with excellent knowledge of local routes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Flexible Rental Options</h4>
                  <p className="text-foreground/70 text-sm">Choose from hourly, daily, or weekly rental plans.</p>
                </div>
              </li>
            </ul>
            
            <Button asChild size="lg" className="group">
              <Link to="/vehicles">
                <span>Explore Vehicles</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Motion>
        </div>
      </div>
    </section>
  );
}
