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
      <div className="container mx-auto px-6 pt-3 pb-2 flex flex-col gap-1">
        {/* Row 1: Logo + mobile toggle */}
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <img 
              src={useWhiteLogo ? dandiLogoWhitePath : dandiLogoPath} 
              alt="Dandi" 
              className="h-40 w-auto transition-all duration-300" 
            />
          </Link>
          {/* Mobile Toggle */}
          <button 
            className={cn("md:hidden relative z-50 p-2", isOpen ? "text-foreground" : textColor)}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Row 2: Desktop Nav */}
        <nav className="hidden md:flex items-center justify-end gap-3">
          {[
            { href: "/", label: "Home", num: "01", color: "#F5C518", textColor: "#140F0C" },
            { href: "/about", label: "About", num: "02", color: "#3B82F6", textColor: "#fff" },
            { href: "/services", label: "Services", num: "03", color: "#34D399", textColor: "#140F0C" },
            { href: "/contact", label: "Contact", num: "04", color: "#F97316", textColor: "#fff" },
          ].map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className="group relative"
              >
                <span
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border-2 font-bold uppercase tracking-wider text-sm transition-all duration-200"
                  style={{
                    borderColor: link.color,
                    backgroundColor: isActive ? link.color : "transparent",
                    color: isActive ? link.textColor : (isDark && !scrolled ? "#fff" : "#140F0C"),
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = link.color;
                      (e.currentTarget as HTMLElement).style.color = link.textColor;
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = isDark && !scrolled ? "#fff" : "#140F0C";
                    }
                  }}
                >
                  <span className="text-[10px] font-mono opacity-60">{link.num}</span>
                  {link.label}
                </span>
              </Link>
            );
          })}
          <Link href="/contact" className="ml-2">
            <Button size="lg" className="rounded-full font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(20,15,12,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 border-2 border-foreground">
              Let's Talk
            </Button>
          </Link>
        </nav>

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
