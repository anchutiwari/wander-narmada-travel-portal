
import { Motion } from "@/components/ui/motion";
import { Shield, MapPin, Clock, Users } from "lucide-react";

export function VehicleBenefits() {
  const benefits = [
    {
      title: "Safety First",
      description: "All our vehicles undergo regular maintenance checks and are equipped with essential safety features.",
      icon: <Shield className="w-12 h-12 text-primary" />
    },
    {
      title: "Local Knowledge",
      description: "Our drivers have extensive knowledge of the region, including hidden gems and the best routes.",
      icon: <MapPin className="w-12 h-12 text-primary" />
    },
    {
      title: "Punctuality",
      description: "We value your time and ensure that our vehicles arrive promptly for pickups and transfers.",
      icon: <Clock className="w-12 h-12 text-primary" />
    },
    {
      title: "Personalized Service",
      description: "We tailor our services to meet your specific requirements and preferences for a comfortable journey.",
      icon: <Users className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container-custom">
        <Motion animation="fade-in-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
              Our Advantages
            </span>
            <h2 className="heading-2 mb-4">
              Why Choose Our Vehicles
            </h2>
            <p className="text-foreground/80">
              We're committed to providing reliable, comfortable, and safe transportation for your journey through the Narmada Valley.
            </p>
          </div>
        </Motion>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Motion key={benefit.title} animation="fade-in-up" delay={index * 100}>
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  );
}
