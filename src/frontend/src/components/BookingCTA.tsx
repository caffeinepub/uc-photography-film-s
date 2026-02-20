import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function BookingCTA() {
  const { ref, isVisible } = useScrollAnimation();

  const whatsappMessage = encodeURIComponent(
    "Hello UC Photography & Film's, I want to know about photography booking."
  );
  const whatsappLink = `https://wa.me/917877283716?text=${whatsappMessage}`;

  return (
    <section className="py-20 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Limited Bookings Available —
            <br />
            <span className="text-gold">Reserve Your Date Today</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Don't miss the opportunity to capture your special moments with us
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-black font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-105"
            >
              Book on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
