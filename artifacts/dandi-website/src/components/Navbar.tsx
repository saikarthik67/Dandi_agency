import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import dandiLogoPath from "@assets/Dandi.co.in_(1)_1781466128581.png";
import dandiLogoWhitePath from "@assets/Dandi.co.in-white_1781466168709.png";
import { cn } from "@/lib/utils";

export function Navbar({ isDark = false }: { isDark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const useWhiteLogo = isDark && !scrolled && !isOpen;
  const textColor = isDark && !scrolled && !isOpen ? "text-white" : "text-foreground";
  const bgClass = scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent";

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", bgClass)}>
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <img 
            src={useWhiteLogo ? dandiLogoWhitePath : dandiLogoPath} 
            alt="Dandi" 
            className="h-36 w-auto transition-all duration-300" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "font-sans font-medium text-sm uppercase tracking-wider hover:text-primary transition-colors",
                textColor,
                location === link.href && "text-primary font-bold"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-4">
            <Button size="lg" className="rounded-full font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(20,15,12,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 border-2 border-foreground">
              Let's Talk
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden relative z-50 p-2", isOpen ? "text-foreground" : textColor)}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col justify-center px-6 transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-center">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "font-display text-4xl font-bold uppercase hover:text-primary transition-colors",
                location === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="w-full rounded-full text-lg font-bold uppercase py-6 bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(20,15,12,1)] border-2 border-foreground">
                Let's Talk
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
