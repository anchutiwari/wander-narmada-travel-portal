
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Motion } from "@/components/ui/motion";
import { Users, Fuel, Car, BatteryCharging } from "lucide-react";
import { Vehicle } from "@/lib/types";

interface VehicleCardProps {
  vehicle: Vehicle;
  delay?: number;
}

export function VehicleCard({ vehicle, delay = 0 }: VehicleCardProps) {
  return (
    <Motion 
      animation="fade-in-up" 
      delay={delay}
      className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${vehicle.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="py-1 px-2 bg-primary/80 text-primary-foreground text-xs font-medium rounded">
              {vehicle.type}
            </span>
            <span className="py-1 px-2 bg-white/80 text-foreground text-xs font-medium rounded">
              <span>₹{vehicle.price}</span> / day
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm">{vehicle.capacity} Seats</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="h-4 w-4 text-primary" />
            <span className="text-sm">{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="h-4 w-4 text-primary" />
            <span className="text-sm">{vehicle.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <BatteryCharging className="h-4 w-4 text-primary" />
            <span className="text-sm">{vehicle.airConditioned ? "AC" : "Non-AC"}</span>
          </div>
        </div>
        
        <p className="text-foreground/80 mb-4 line-clamp-2">
          {vehicle.description}
        </p>
        
        <Button asChild size="sm" className="w-full">
          <Link to="/vehicles/book" className="w-full flex items-center justify-center">
            Book Now
          </Link>
        </Button>
      </div>
    </Motion>
  );
}
