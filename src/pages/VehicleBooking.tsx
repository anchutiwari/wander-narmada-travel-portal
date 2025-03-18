
import { useState } from "react";
import { Motion } from "@/components/ui/motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";
import { vehicles } from "@/lib/constants";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ArrowRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const VehicleBooking = () => {
  const { toast } = useToast();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Booking Request Submitted",
        description: "We'll contact you shortly to confirm your booking details.",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Book Your Ride
                </span>
                <h1 className="heading-2 mb-4">
                  Book Your Vehicle
                </h1>
                <p className="text-foreground/80 mb-6">
                  Fill out the form below to book a vehicle for your journey through the beautiful Narmada Valley.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild variant="outline" size="sm">
                    <Link to="/vehicles">
                      Back to Vehicles
                    </Link>
                  </Button>
                </div>
              </div>
            </Motion>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="py-12 md:py-16">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Motion animation="slide-in-left">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                  <div className="aspect-video relative">
                    <img 
                      src="https://images.unsplash.com/photo-1549399542-7e8ee8c3c8b9?q=80&w=1169&auto=format&fit=crop"
                      alt="Vehicle booking" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h2 className="text-2xl font-bold mb-2">Hassle-Free Booking</h2>
                        <p className="text-white/90">Secure your transportation with our simple booking process</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Why Book With Us?</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Well-Maintained Vehicles</h4>
                            <p className="text-foreground/70 text-sm">All our vehicles are regularly serviced and sanitized.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Experienced Drivers</h4>
                            <p className="text-foreground/70 text-sm">Professional drivers with excellent knowledge of local routes.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">24/7 Customer Support</h4>
                            <p className="text-foreground/70 text-sm">Our team is always available to assist you during your journey.</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Transparent Pricing</h4>
                            <p className="text-foreground/70 text-sm">No hidden charges. What you see is what you pay.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                      <div className="flex items-start">
                        <Info className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">
                          After submitting your booking request, our team will contact you within 2 hours to confirm 
                          availability and provide payment details. A 25% advance payment is required to secure your booking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Motion>
              
              <Motion animation="slide-in-right">
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Booking Details</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="Enter your full name" required />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+91 98765 43210" required />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="vehicle">Select Vehicle</Label>
                        <select 
                          id="vehicle" 
                          value={selectedVehicle}
                          onChange={(e) => setSelectedVehicle(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          required
                        >
                          <option value="" disabled>Select a vehicle</option>
                          {vehicles.map(vehicle => (
                            <option key={vehicle.id} value={vehicle.id.toString()}>
                              {vehicle.name} - {vehicle.type} (₹{vehicle.price})
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="pickupDate">Pickup Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !pickupDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={pickupDate}
                                onSelect={setPickupDate}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                        
                        <div>
                          <Label htmlFor="returnDate">Return Date</Label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !returnDate && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={returnDate}
                                onSelect={setReturnDate}
                                initialFocus
                                disabled={(date) => date < (pickupDate || new Date())}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="passengers">Number of Passengers</Label>
                        <Input id="passengers" type="number" min="1" placeholder="4" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="pickupLocation">Pickup Location</Label>
                        <Input id="pickupLocation" placeholder="Enter pickup address" required />
                      </div>
                      
                      <div>
                        <Label htmlFor="notes">Special Requirements (Optional)</Label>
                        <Input id="notes" placeholder="Any special requests or requirements" />
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button type="submit" className="w-full" size="lg" disabled={loading}>
                        {loading ? "Processing..." : "Submit Booking Request"}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </form>
                </div>
              </Motion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VehicleBooking;
