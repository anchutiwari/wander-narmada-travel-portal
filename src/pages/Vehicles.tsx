
import { Motion } from "@/components/ui/motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VehicleCard } from "@/components/VehicleCard";
import { VehicleBenefits } from "@/components/VehicleBenefits";
import { vehicles } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Car, Users, Fuel, Route } from "lucide-react";
import { Link } from "react-router-dom";

const Vehicles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Motion animation="fade-in-up">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Reliable Transportation
                </span>
                <h1 className="heading-1 mb-4">
                  Explore Narmada Valley <br />
                  <span className="text-primary">With Our Fleet</span>
                </h1>
                <p className="text-foreground/80 mb-8 text-lg">
                  Discover the beautiful Narmada Valley region with our comfortable, 
                  well-maintained vehicles driven by experienced drivers who know every 
                  corner of the region.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link to="/vehicles/book">
                      Book a Vehicle
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="#vehicle-options">
                      View Our Fleet
                    </Link>
                  </Button>
                </div>
              </Motion>
              
              <Motion animation="fade-in" delay={100}>
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1170&auto=format&fit=crop"
                    alt="Vehicle Fleet" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white">
                    <span className="font-medium">Comfort & Safety Guaranteed</span>
                  </div>
                </div>
              </Motion>
            </div>
          </div>
        </section>
        
        {/* Our Fleet Section */}
        <section id="vehicle-options" className="py-16 md:py-24">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Our Fleet
                </span>
                <h2 className="heading-2 mb-4">
                  Choose Your Perfect Vehicle
                </h2>
                <p className="text-foreground/80">
                  We offer a range of well-maintained vehicles to suit your travel needs, 
                  from compact cars for couples to spacious SUVs for families and groups.
                </p>
              </div>
            </Motion>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map((vehicle, index) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} delay={index * 100} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/vehicles/book">
                  Book a Vehicle Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <VehicleBenefits />
        
        {/* Booking Process Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Easy Booking
                </span>
                <h2 className="heading-2 mb-4">
                  Simple Booking Process
                </h2>
                <p className="text-foreground/80">
                  Booking a vehicle with us is quick and easy. Follow these simple steps to secure your transportation.
                </p>
              </div>
            </Motion>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Vehicle",
                  description: "Select the vehicle that best suits your travel needs and group size.",
                  icon: <Car className="w-10 h-10 text-primary" />
                },
                {
                  step: "2",
                  title: "Select Dates",
                  description: "Choose your pickup and drop-off dates and locations.",
                  icon: <Route className="w-10 h-10 text-primary" />
                },
                {
                  step: "3",
                  title: "Provide Details",
                  description: "Fill in your contact information and specific requirements.",
                  icon: <Users className="w-10 h-10 text-primary" />
                },
                {
                  step: "4",
                  title: "Confirm Booking",
                  description: "Review your booking details and make the payment to confirm.",
                  icon: <Fuel className="w-10 h-10 text-primary" />
                }
              ].map((step, index) => (
                <Motion key={step.step} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-card border border-border rounded-xl p-6 text-center relative hover:shadow-md transition-shadow duration-300">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="mt-6 mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </div>
                </Motion>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/vehicles/book">
                  Start Booking Now
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <Motion animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  FAQs
                </span>
                <h2 className="heading-2 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-foreground/80">
                  Find answers to common questions about our vehicle rental services.
                </p>
              </div>
            </Motion>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "Do you provide drivers with all vehicles?",
                  answer: "Yes, all our vehicles come with experienced drivers who are familiar with the Narmada Valley region."
                },
                {
                  question: "What documents do I need to book a vehicle?",
                  answer: "You'll need a valid ID proof (Aadhar Card, Passport, Driving License) for booking. The original ID should be carried during travel."
                },
                {
                  question: "Can I modify or cancel my booking?",
                  answer: "Yes, bookings can be modified or cancelled up to 48 hours before the scheduled pickup time. Cancellation charges may apply."
                },
                {
                  question: "Are there any additional charges?",
                  answer: "The rental price includes driver allowance, fuel, and taxes. Toll charges, parking fees, and interstate permits (if applicable) are extra."
                },
                {
                  question: "What happens if the vehicle breaks down?",
                  answer: "In the rare event of a breakdown, we provide immediate replacement vehicles to ensure your journey continues without major disruptions."
                },
                {
                  question: "Do you offer customized rental packages?",
                  answer: "Yes, we can create customized packages for long-term rentals, specific routes, or special requirements. Please contact us for details."
                }
              ].map((faq, index) => (
                <Motion key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-foreground/80">{faq.answer}</p>
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

export default Vehicles;
