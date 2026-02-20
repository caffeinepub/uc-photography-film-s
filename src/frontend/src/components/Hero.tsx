import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hello UC Photography & Film's, I want to know about photography booking."
  );
  const whatsappLink = `https://wa.me/917877283716?text=${whatsappMessage}`;

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-wedding.dim_1920x1080.png"
          alt="Cinematic Wedding Photography"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Capturing Moments,
          <br />
          <span className="text-gold">Creating Forever Memories</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light">
          Professional Wedding, Event & Promotion Photography
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-light text-black font-bold text-lg px-10 py-6 rounded-full shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-105"
          >
            Book Now on WhatsApp
          </Button>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
