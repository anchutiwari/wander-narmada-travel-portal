
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Clock, Users, CheckCircle2 } from "lucide-react";
import { packages } from "@/lib/constants";
import { Motion } from "@/components/ui/motion";
import { useState, useEffect } from "react";

const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Find the package by ID
  const packageItem = packages.find((pkg) => pkg.id === Number(id));
  
  useEffect(() => {
    if (packageItem) {
      const img = new Image();
      img.src = packageItem.image;
      img.onload = () => setImageLoaded(true);
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [packageItem]);
  
  if (!packageItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
            <p className="text-foreground/70 mb-6">The package you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/packages">Back to Packages</Link>
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
            style={{ backgroundImage: `url(${packageItem.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <Motion animation="fade-in-up">
                <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm mb-4" asChild>
                  <Link to="/packages">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <span>Back to Packages</span>
                  </Link>
                </Button>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="py-1 px-2 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                    {packageItem.duration}
                  </span>
                  <span className="py-1 px-2 bg-background/80 backdrop-blur-sm text-foreground text-xs font-medium rounded">
                    {packageItem.type}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {packageItem.name}
                </h1>
                <p className="text-white/90 max-w-2xl text-lg md:text-xl">
                  {packageItem.description}
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6">About This Package</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {packageItem.description}
                  </p>
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    Experience the rich cultural heritage and natural beauty of the Narmada Valley with our {packageItem.name}. 
                    This carefully curated journey will take you through some of the most breathtaking landscapes and 
                    historical sites in the region. Our expert guides will ensure that you have a memorable and 
                    authentic experience throughout your journey.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {packageItem.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">What's Not Included</h3>
                    <ul className="space-y-3">
                      {packageItem.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0 text-center">×</span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Motion>
              
              <Motion animation="fade-in-up" delay={100} className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Package Overview</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Destinations Covered</p>
                          <p className="text-sm text-foreground/70">
                            Narmada Valley, Madhya Pradesh, India
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Duration</p>
                          <p className="text-sm text-foreground/70">
                            {packageItem.duration}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Tour Type</p>
                          <p className="text-sm text-foreground/70">
                            {packageItem.type}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Group Size</p>
                          <p className="text-sm text-foreground/70">
                            Max 15 people
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="mb-4">
                        <span className="block text-sm text-foreground/70 mb-1">Package Price</span>
                        <span className="text-2xl font-bold text-primary">{packageItem.price}</span>
                        <span className="text-sm text-foreground/70 ml-1">per person</span>
                      </div>
                      <Button className="w-full" asChild>
                        <Link to="/contact">Book This Package</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Transportation?</h3>
                    <p className="text-sm text-foreground/70 mb-4">
                      Explore our range of vehicles available for your journey.
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

export default PackageDetails;
