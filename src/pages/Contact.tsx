
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Motion } from "@/components/ui/motion";
import { CalendarIcon, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { companyInfo } from "@/lib/constants";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [persons, setPersons] = useState("");
  const [date, setDate] = useState<Date>();
  const [package_, setPackage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking request submitted!",
        description: "We'll contact you shortly to confirm your booking details.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setPersons("");
      setDate(undefined);
      setPackage("");
      setMessage("");
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero 
          title="Contact Us"
          subtitle="Get in Touch"
          description="Have questions or ready to book your adventure? Reach out to us and our team will assist you in planning an unforgettable journey through the Narmada Valley."
          image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          ctaText="Book Now"
          ctaLink="#booking-form"
          fullHeight={false}
        />
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Motion animation="slide-in-left">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-medium uppercase tracking-wider rounded-full bg-primary/10 text-primary border border-primary/20">
                  Contact Information
                </span>
                <h2 className="heading-2 mb-6">
                  Get in Touch With Us
                </h2>
                <p className="text-foreground/80 mb-8">
                  Have questions or ready to book your adventure? Our team is here to assist you in planning an unforgettable journey through the Narmada Valley. Reach out to us through any of the following contact methods.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-foreground/80">{companyInfo.contact.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <a 
                        href={`tel:${companyInfo.contact.phone}`} 
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        {companyInfo.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a 
                        href={`mailto:${companyInfo.contact.email}`} 
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        {companyInfo.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden h-64 border border-border">
                  <iframe
                    title="Narmada Valley Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478332.68777437265!2d78.03973259921268!3d23.18436580816956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971c8bfff54ff57%3A0xaadc0b91d8333f8a!2sNarmada%20River!5e0!3m2!1sen!2sin!4v1654154879842!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Motion>
              
              <Motion animation="slide-in-right">
                <div id="booking-form" className="bg-card border border-border rounded-xl p-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Book Your Adventure</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <Input 
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address
                          </label>
                          <Input 
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Phone Number
                          </label>
                          <Input 
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Your phone number"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="persons" className="block text-sm font-medium mb-1">
                            Number of Persons
                          </label>
                          <Input 
                            id="persons"
                            type="number"
                            min="1"
                            value={persons}
                            onChange={(e) => setPersons(e.target.value)}
                            placeholder="Number of travelers"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium mb-1">
                            Travel Date
                          </label>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !date && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="package" className="block text-sm font-medium mb-1">
                          Select Package
                        </label>
                        <Select value={package_} onValueChange={setPackage}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="narmada-explorer">Narmada Valley Explorer (5D/4N)</SelectItem>
                            <SelectItem value="heritage-spiritual">Heritage & Spiritual Tour (7D/6N)</SelectItem>
                            <SelectItem value="khajuraho-special">Khajuraho Special (3D/2N)</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Special Requests
                        </label>
                        <Textarea 
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Any special requirements or questions?"
                          rows={4}
                        />
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full group" 
                      size="lg" 
                      disabled={loading}
                    >
                      <span>{loading ? "Submitting..." : "Submit Booking Request"}</span>
                      {!loading && (
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </Button>
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

export default Contact;
