import { useState } from 'react';
import { Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello UC Photography & Film's, I want to know about photography booking."
  );
  const whatsappLink = `https://wa.me/917877283716?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your photography needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-gray-900 border-gray-800 hover:border-gold transition-colors">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-gold/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:7877283716"
                    className="text-gray-400 hover:text-gold transition-colors"
                  >
                    7877283716
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-gold transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gold/10 p-4 rounded-full">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Studio Location</h3>
                    <p className="text-gray-400">Rajasthan, India</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=25.039202,73.912804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Google Maps
                </a>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  WhatsApp Us
                </Button>
              </a>
              <a
                href="https://www.instagram.com/uc_photography_100?igsh=MWUxYW1iNzJyZ283bA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
                  <SiInstagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-gold"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-gold min-h-32"
                    placeholder="Tell us about your photography needs"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-black font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
