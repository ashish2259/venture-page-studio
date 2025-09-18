import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import fusionnexLogo from "@/assets/fusionnex-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-4">
            <img src={fusionnexLogo} alt="FUSIONNEX INNOVATIONS" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-white">FUSIONNEX INNOVATIONS</h1>
              <p className="text-sm text-white/80">Transforming Vision Into Reality</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white/90 hover:text-white transition-smooth">Home</a>
            <a href="/services" className="text-white/90 hover:text-white transition-smooth">Services</a>
            <a href="#about" className="text-white/90 hover:text-white transition-smooth">About</a>
            <a href="/contact" className="text-white/90 hover:text-white transition-smooth">Contact</a>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.location.href = 'mailto:contact@fusionnexinnovations.com?subject=Quote Request'}
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col gap-4">
              <a href="/" className="text-white/90 hover:text-white transition-smooth">Home</a>
              <a href="/services" className="text-white/90 hover:text-white transition-smooth">Services</a>
              <a href="#about" className="text-white/90 hover:text-white transition-smooth">About</a>
              <a href="/contact" className="text-white/90 hover:text-white transition-smooth">Contact</a>
              <Button 
                variant="hero" 
                size="sm" 
                className="w-fit"
                onClick={() => window.location.href = 'mailto:contact@fusionnexinnovations.com?subject=Quote Request'}
              >
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};