
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { DestinationCard } from "@/components/DestinationCard";
import { Motion } from "@/components/ui/motion";
import { destinations } from "@/lib/constants";

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero 
          title="Discover Enchanting Destinations"
          subtitle="Explore Narmada Valley"
          description="Embark on a journey through the captivating destinations of the Narmada Valley, where natural beauty meets rich cultural heritage."
          image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          ctaText="Book Your Journey"
          ctaLink="/contact"
          fullHeight={false}
        />
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="max-w-3xl mb-12">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  All Destinations
                </span>
                <h2 className="heading-2 mb-6">
                  Explore Our Curated Destinations
                </h2>
                <p className="text-foreground/80">
                  Discover the hidden gems and popular attractions of the Narmada Valley region. From ancient temples to serene natural landscapes, our curated destinations offer something for every traveler.
                </p>
              </div>
            </Motion>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {destinations.map((destination, index) => (
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Destinations;
