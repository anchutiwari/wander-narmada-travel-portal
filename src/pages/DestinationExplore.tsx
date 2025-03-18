
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "@/lib/constants";
import { Motion } from "@/components/ui/motion";
import { useState, useEffect } from "react";

const DestinationExplore = () => {
  const { id } = useParams<{ id: string }>();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Find the destination by ID
  const destination = destinations.find((dest) => dest.id === Number(id));
  
  useEffect(() => {
    if (destination) {
      const img = new Image();
      img.src = destination.image;
      img.onload = () => setImageLoaded(true);
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [destination]);
  
  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
            <p className="text-foreground/70 mb-6">The destination you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/destinations">Back to Destinations</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${destination.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <Motion animation="fade-in-up">
                <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm mb-4" asChild>
                  <Link to="/destinations">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Back to Destinations</span>
                  </Link>
                </Button>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {destination.name}
                </h1>
                <p className="text-white/90 max-w-2xl text-lg md:text-xl">
                  {destination.shortDescription}
                </p>
              </Motion>
            </div>
          </div>
        </section>
        
        {/* Details Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <Motion animation="fade-in-up" className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">About {destination.name}</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {destination.description}
                  </p>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Experience the rich cultural heritage and natural beauty of {destination.name}. This destination 
                    offers visitors a unique blend of history, spirituality, and scenic landscapes that make it 
                    a must-visit location in the Narmada Valley region.
                  </p>
                </div>
                
                {destination.activities && destination.activities.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-bold mb-4">Popular Activities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {destination.activities.map((activity, index) => (
                        <Card key={index} className="bg-muted/50">
                          <CardContent className="p-4">
                            <div className="flex items-start">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-primary font-bold">{index + 1}</span>
                              </div>
                              <div>
                                <p className="font-medium">{activity}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </Motion>
              
              <Motion animation="fade-in-up" delay={100} className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Plan Your Visit</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-foreground/70">
                            {destination.name}, Madhya Pradesh, India
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Best Time to Visit</p>
                          <p className="text-sm text-foreground/70">
                            October to March
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Recommended Duration</p>
                          <p className="text-sm text-foreground/70">
                            1-2 Days
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Ideal For</p>
                          <p className="text-sm text-foreground/70">
                            Families, Couples, Solo Travelers
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button className="w-full" asChild>
                        <Link to="/contact">Book This Destination</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Transportation?</h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      Explore our range of vehicles available for your journey to {destination.name}.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/vehicles">View Available Vehicles</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Motion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationExplore;
