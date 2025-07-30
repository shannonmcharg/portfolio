import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Services", href: "#services", id: "services" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Testimonials", href: "#testimonials", id: "testimonials" },
    { name: "Publications", href: "#publications", id: "publications" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "experience", "portfolio", "testimonials", "publications"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (sectionId: string) => activeSection === sectionId;

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-primary-foreground px-4 py-2 z-50 transition-all"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Efficient Interaction - Home"
            >
              <img 
                src="/lovable-uploads/c69af798-0e2e-4593-becd-5dbdc5054e7a.png" 
                alt="Efficient Interaction Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-foreground">
                Efficient Interaction
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className={`${
                  isActive(item.id) 
                    ? "text-primary bg-primary/10 border-b-2 border-primary" 
                    : "text-primary hover:text-primary-light"
                } transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2 text-sm font-medium cursor-pointer`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden animate-fade-in"
            role="navigation" 
            aria-label="Mobile navigation"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-background">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavigation(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`${
                    isActive(item.id)
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-primary hover:text-primary-light"
                  } block px-3 py-2 text-base font-medium hover:bg-muted transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full text-left cursor-pointer`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      </header>
    </>
  );
};

export default Header;