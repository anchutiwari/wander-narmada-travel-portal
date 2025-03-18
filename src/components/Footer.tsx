
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/lib/constants";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("bg-muted/30 border-t border-border", className)}>
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link 
              to="/" 
              className="text-xl font-bold mb-4 inline-block"
            >
              <span className="text-primary">{companyInfo.name}</span>
            </Link>
            <p className="text-foreground/70 mb-6">
              Explore the serene beauty and rich cultural heritage of the Narmada Valley with our expertly curated travel experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href={companyInfo.contact.social.facebook} 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={companyInfo.contact.social.instagram} 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href={companyInfo.contact.social.twitter} 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href={companyInfo.contact.social.youtube} 
                className="text-foreground/60 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link 
                  to="/packages" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/destinations/1" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Khajuraho
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations/2" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Chitrakoot
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations/3" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Maihar
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations/4" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Amarkantak
                </Link>
              </li>
              <li>
                <Link 
                  to="/destinations/5" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Jabalpur
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">
                  {companyInfo.contact.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a 
                  href={`tel:${companyInfo.contact.phone}`} 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.contact.email}`} 
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
            
            <Button asChild className="mt-6">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/terms" 
              className="text-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/privacy" 
              className="text-foreground/60 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
