import { Camera, Heart, Users, Briefcase, Cake, Film } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    title: 'Wedding Photography',
    icon: Heart,
    image: '/assets/generated/service-wedding.dim_600x400.png',
    description: 'Capture your special day with timeless elegance',
  },
  {
    title: 'Pre-Wedding Shoot',
    icon: Camera,
    image: '/assets/generated/service-prewedding.dim_600x400.png',
    description: 'Romantic moments before the big day',
  },
  {
    title: 'Event Photography',
    icon: Users,
    image: '/assets/generated/service-events.dim_600x400.png',
    description: 'Professional coverage for all events',
  },
  {
    title: 'Promotion & Brand Shoot',
    icon: Briefcase,
    image: '/assets/generated/service-promotion.dim_600x400.png',
    description: 'Elevate your brand with stunning visuals',
  },
  {
    title: 'Birthday & Function Shoot',
    icon: Cake,
    image: '/assets/generated/service-birthday.dim_600x400.png',
    description: 'Celebrate life\'s precious moments',
  },
  {
    title: 'Cinematic Films & Videos',
    icon: Film,
    image: '/assets/generated/service-cinematic.dim_600x400.png',
    description: 'Tell your story through motion',
  },
];

export function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-gold">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium photography and videography services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-gold transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gold/90 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
