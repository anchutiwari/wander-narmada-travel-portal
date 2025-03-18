
import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Package, Car, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { destinations, packages, vehicles } from "@/lib/constants";

type SearchType = "destinations" | "packages" | "vehicles" | "all";

export function SearchBox() {
  const [open, setOpen] = useState(false);
  const [searchType, setSearchType] = useState<SearchType>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter search results based on search type and query
  const getFilteredResults = () => {
    const query = searchQuery.toLowerCase();
    
    if (!query) return { destinations: [], packages: [], vehicles: [] };
    
    const filteredDestinations = searchType === "all" || searchType === "destinations" 
      ? destinations.filter(item => 
          item.name.toLowerCase().includes(query) || 
          item.shortDescription.toLowerCase().includes(query))
      : [];
      
    const filteredPackages = searchType === "all" || searchType === "packages"
      ? packages.filter(item => 
          item.name.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query))
      : [];
      
    const filteredVehicles = searchType === "all" || searchType === "vehicles" 
      ? vehicles.filter(item => 
          item.name.toLowerCase().includes(query) || 
          item.type.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query))
      : [];
      
    return {
      destinations: filteredDestinations,
      packages: filteredPackages,
      vehicles: filteredVehicles
    };
  };

  const filteredResults = getFilteredResults();
  const hasResults = filteredResults.destinations.length > 0 || 
                     filteredResults.packages.length > 0 || 
                     filteredResults.vehicles.length > 0;

  // Focus input when dropdown opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          role="combobox" 
          aria-expanded={open} 
          aria-label="Search for anything"
          className="w-[260px] justify-between bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
          onClick={() => setOpen(true)}
        >
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 shrink-0 opacity-50" />
            <span className="text-sm text-muted-foreground">Search for anything...</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[90vw] p-0 max-w-[650px]" align="start">
        <div className="flex border-b">
          <Button
            variant={searchType === "all" ? "default" : "ghost"}
            className="rounded-none flex-1 h-11"
            onClick={() => setSearchType("all")}
          >
            <Search className="mr-2 h-4 w-4" />
            All
          </Button>
          <Button
            variant={searchType === "destinations" ? "default" : "ghost"}
            className="rounded-none flex-1 h-11"
            onClick={() => setSearchType("destinations")}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Destinations
          </Button>
          <Button
            variant={searchType === "packages" ? "default" : "ghost"}
            className="rounded-none flex-1 h-11"
            onClick={() => setSearchType("packages")}
          >
            <Package className="mr-2 h-4 w-4" />
            Packages
          </Button>
          <Button
            variant={searchType === "vehicles" ? "default" : "ghost"}
            className="rounded-none flex-1 h-11"
            onClick={() => setSearchType("vehicles")}
          >
            <Car className="mr-2 h-4 w-4" />
            Vehicles
          </Button>
        </div>
        <Command>
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              ref={inputRef}
              placeholder={`Search ${searchType === "all" ? "everything" : searchType}...`}
              className="h-11 w-full border-0 outline-none focus:ring-0 text-sm placeholder:text-muted-foreground"
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                className="h-8 w-8 p-0"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          <CommandList className="max-h-[400px] overflow-auto p-2">
            {!hasResults && searchQuery && (
              <CommandEmpty>No results found for "{searchQuery}"</CommandEmpty>
            )}
            
            {filteredResults.destinations.length > 0 && (
              <CommandGroup heading="Destinations">
                {filteredResults.destinations.map((destination) => (
                  <CommandItem key={`destination-${destination.id}`} className="p-2">
                    <Link 
                      to={`/destinations/${destination.id}`} 
                      className="flex items-start gap-3 w-full"
                      onClick={() => setOpen(false)}
                    >
                      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={destination.image} 
                          alt={destination.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{destination.name}</span>
                        <span className="text-sm text-muted-foreground line-clamp-2">
                          {destination.shortDescription}
                        </span>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            {filteredResults.packages.length > 0 && (
              <CommandGroup heading="Packages">
                {filteredResults.packages.map((pkg) => (
                  <CommandItem key={`package-${pkg.id}`} className="p-2">
                    <Link 
                      to={`/packages/${pkg.id}`} 
                      className="flex items-start gap-3 w-full"
                      onClick={() => setOpen(false)}
                    >
                      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{pkg.name}</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {pkg.duration}
                          </span>
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-0.5 rounded-full">
                            {pkg.type}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground line-clamp-1 mt-1">
                          {pkg.description}
                        </span>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            
            {filteredResults.vehicles.length > 0 && (
              <CommandGroup heading="Vehicles">
                {filteredResults.vehicles.map((vehicle) => (
                  <CommandItem key={`vehicle-${vehicle.id}`} className="p-2">
                    <Link 
                      to={`/vehicles/book?vehicle=${vehicle.id}`} 
                      className="flex items-start gap-3 w-full"
                      onClick={() => setOpen(false)}
                    >
                      <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <img 
                          src={vehicle.image} 
                          alt={vehicle.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{vehicle.name}</span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                            {vehicle.type}
                          </span>
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                            Capacity: {vehicle.capacity}
                          </span>
                        </div>
                        <span className="text-sm text-primary font-medium mt-1">
                          ₹{vehicle.price}/day
                        </span>
                      </div>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
