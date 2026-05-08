import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-serif font-bold text-xl leading-none", isScrolled ? "text-foreground" : "text-white")}>
                DMD Landscape & Cottage Care
              </span>
              <span className={cn("text-[10px] tracking-widest uppercase font-medium", isScrolled ? "text-muted-foreground" : "text-white/80")}>
                Professional Property Care
              </span>
            </div>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-foreground/80" : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className={cn(
              "font-semibold",
              isScrolled ? "" : "bg-white text-primary hover:bg-white/90"
            )}
            onClick={() => handleScrollTo('#contact')}
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="text-lg font-medium py-2 border-b border-border/50 text-foreground/80"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-2" onClick={() => handleScrollTo('#contact')}>
            <Phone className="w-4 h-4 mr-2" />
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
}
