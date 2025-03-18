
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { packages } from "@/lib/constants";

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero 
          title="Curated Travel Packages"
          subtitle="Unforgettable Experiences"
          description="Discover our expertly designed travel packages that showcase the best of the Narmada Valley, offering authentic experiences and memorable adventures."
          image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          ctaText="Book Your Package"
          ctaLink="/contact"
          fullHeight={false}
        />
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="max-w-3xl mb-12">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Tour Packages
                </span>
                <h2 className="heading-2 mb-6">
                  Explore Our Curated Travel Packages
                </h2>
                <p className="text-foreground/80">
                  Choose from our carefully crafted travel packages designed to provide you with the most authentic and memorable experiences in the Narmada Valley. Each package is thoughtfully planned to showcase the region's natural beauty, cultural heritage, and spiritual significance.
                </p>
              </div>
            </Motion>
            
            <div className="space-y-12">
              {packages.map((pkg, index) => (
                <Motion 
                  key={pkg.id} 
                  animation="fade-in-up"
                  delay={index * 100}
                  className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                      <div className="relative h-full">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${pkg.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t" />
                        <div className="relative p-6 flex flex-col h-full lg:justify-end">
                          <div className="mb-4 flex flex-wrap gap-2">
                            <span className="py-1 px-2 bg-primary/80 text-primary-foreground text-xs font-medium rounded">
                              {pkg.duration}
                            </span>
                            <span className="py-1 px-2 bg-white/80 text-foreground text-xs font-medium rounded">
                              {pkg.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                          <div className="text-white/90 lg:hidden">{pkg.description}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <div className="hidden lg:block mb-4">
                        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                        <p className="text-foreground/80">{pkg.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Inclusions</h4>
                          <ul className="space-y-2">
                            {pkg.inclusions.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                                <span className="text-foreground/80">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Exclusions</h4>
                          <ul className="space-y-2">
                            {pkg.exclusions.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0 text-center">×</span>
                                <span className="text-foreground/80">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-6 mt-auto">
                        <div>
                          <span className="block text-sm text-foreground/70 mb-1">Package Price</span>
                          <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                          <span className="text-sm text-foreground/70 ml-1">per person</span>
                        </div>
                        
                        <Button asChild size="lg" className="group">
                          <Link to="/contact">
                            <span>Book This Package</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Motion>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Packages;
