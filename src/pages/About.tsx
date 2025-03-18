
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Motion } from "@/components/ui/motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { companyInfo } from "@/lib/constants";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero 
          title="About Aaradhya Tourism Package"
          subtitle="Our Story"
          description="Discover our journey, vision, and commitment to providing authentic travel experiences in the enchanting Narmada Valley region."
          image="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          ctaText="Contact Us"
          ctaLink="/contact"
          fullHeight={false}
        />
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Motion animation="slide-in-left">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Narmada Valley" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg max-w-xs">
                    <span className="text-primary font-semibold">Established 2012</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">A Decade of Excellence</h3>
                    <p className="text-foreground/80 text-sm">
                      More than 10 years of creating memorable travel experiences in the Narmada Valley region.
                    </p>
                  </div>
                </div>
              </Motion>
              
              <Motion animation="slide-in-right">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Our Company
                </span>
                <h2 className="heading-2 mb-6">
                  The Aaradhya Tourism Story
                </h2>
                <p className="text-foreground/80 mb-8">
                  {companyInfo.description}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-foreground/80">
                      {companyInfo.vision}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-foreground/80">
                      {companyInfo.mission}
                    </p>
                  </div>
                </div>
                
                <Button asChild className="group">
                  <Link to="/contact">
                    <span>Plan Your Journey</span>
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Motion>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Leadership
                </span>
                <h2 className="heading-2 mb-6">
                  Meet Our Visionary Leader
                </h2>
                <p className="text-foreground/80">
                  Get to know the passionate individual driving our mission to showcase the beauty and cultural richness of the Narmada Valley.
                </p>
              </div>
            </Motion>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Motion animation="slide-in-left">
                  <h3 className="text-2xl font-bold mb-2">{companyInfo.leader.name}</h3>
                  <p className="text-primary font-medium mb-6">{companyInfo.leader.designation}</p>
                  <p className="text-foreground/80 mb-8">
                    {companyInfo.leader.description}
                  </p>
                  
                  <Button asChild variant="outline" className="group">
                    <Link to="/contact">
                      <span>Get in Touch</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Motion>
              </div>
              
              <div className="order-1 lg:order-2">
                <Motion animation="slide-in-right">
                  <div className="relative">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                      <img 
                        src={companyInfo.leader.image}
                        alt={companyInfo.leader.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 right-4 bg-card p-4 rounded-lg shadow-lg">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mr-2" />
                        <span className="text-foreground/80 text-sm">Passionate about sustainable tourism</span>
                      </div>
                    </div>
                  </div>
                </Motion>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Our Values
                </span>
                <h2 className="heading-2 mb-6">
                  What Sets Us Apart
                </h2>
                <p className="text-foreground/80">
                  Our core values guide every aspect of our operations, ensuring that we deliver exceptional travel experiences while making a positive impact.
                </p>
              </div>
            </Motion>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Motion animation="fade-in-up" delay={0} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Experiences</h3>
                <p className="text-foreground/80">
                  We go beyond traditional tourism to offer immersive, authentic experiences that connect travelers with the true essence of the Narmada Valley.
                </p>
              </Motion>
              
              <Motion animation="fade-in-up" delay={200} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 mb-6">
                  <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Tourism</h3>
                <p className="text-foreground/80">
                  We are committed to environmentally responsible tourism practices that preserve the natural beauty of the region for future generations.
                </p>
              </Motion>
              
              <Motion animation="fade-in-up" delay={400} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Involvement</h3>
                <p className="text-foreground/80">
                  We work closely with local communities, ensuring that tourism benefits the people who call the Narmada Valley home.
                </p>
              </Motion>
              
              <Motion animation="fade-in-up" delay={600} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 mb-6">
                  <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Attention to Detail</h3>
                <p className="text-foreground/80">
                  We meticulously plan every aspect of our tours to ensure comfort, safety, and memorable experiences for our travelers.
                </p>
              </Motion>
              
              <Motion animation="fade-in-up" delay={800} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                  <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Respect</h3>
                <p className="text-foreground/80">
                  We promote a deep respect for the local cultures, traditions, and sacred sites, ensuring that our tourism activities are culturally sensitive.
                </p>
              </Motion>
              
              <Motion animation="fade-in-up" delay={1000} className="bg-card border border-border rounded-xl p-6 card-hover">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary/10 mb-6">
                  <div className="w-6 h-6 rounded-full bg-secondary/30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer-Centric</h3>
                <p className="text-foreground/80">
                  Your satisfaction is our priority. We listen to your needs and preferences to craft personalized travel experiences that exceed expectations.
                </p>
              </Motion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
