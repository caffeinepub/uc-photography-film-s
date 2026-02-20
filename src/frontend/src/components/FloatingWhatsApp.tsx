import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const whatsappMessage = encodeURIComponent(
    "Hello UC Photography & Film's, I want to know about photography booking."
  );
  const whatsappLink = `https://wa.me/917877283716?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
