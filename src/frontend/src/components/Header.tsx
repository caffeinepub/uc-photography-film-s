import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl md:text-2xl font-bold text-gold hover:text-gold-light transition-colors"
          >
            UC Photography & Film's
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/uc_photography_100?igsh=MWUxYW1iNzJyZ283bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gold hover:bg-gold-light text-black font-semibold px-6"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold transition-colors text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.instagram.com/uc_photography_100?igsh=MWUxYW1iNzJyZ283bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors flex items-center gap-2 py-2"
            >
              <SiInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gold hover:bg-gold-light text-black font-semibold w-full"
            >
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
