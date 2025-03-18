
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { companyInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { SearchBox } from "@/components/SearchBox";

interface NavItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Packages", href: "/packages" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };
  
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold transition-all duration-300"
          >
            <span className="text-primary">{companyInfo.name}</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <SearchBox />
            
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <div 
                    className="flex items-center cursor-pointer"
                    onClick={() => item.submenu && toggleSubmenu(item.label)}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        location.pathname === item.href ? "text-primary" : "text-foreground/80"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                    )}
                  </div>
                  
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 origin-top-left bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <Button asChild size="sm" className="ml-4">
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <SearchBox />
            
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ 
          transition: "opacity 0.3s ease-in-out",
          top: "60px" 
        }}
      >
        <div className="flex flex-col p-8 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <div 
                className="flex items-center justify-between"
                onClick={() => item.submenu && toggleSubmenu(item.label)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "text-lg font-medium py-2",
                    location.pathname === item.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      activeSubmenu === item.label ? "rotate-180" : ""
                    )}
                  />
                )}
              </div>
              
              {item.submenu && activeSubmenu === item.label && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="block py-2 text-foreground/80 hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <Button onClick={() => setIsOpen(false)} className="mt-4 w-full" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
