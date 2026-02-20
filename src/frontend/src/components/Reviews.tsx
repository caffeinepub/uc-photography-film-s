import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reviews = [
  {
    name: 'Priya & Rahul',
    rating: 5,
    text: 'UC Photography captured our wedding beautifully! Every moment was perfect. The team was professional and made us feel comfortable throughout. Highly recommended!',
  },
  {
    name: 'Anjali Sharma',
    rating: 5,
    text: 'Amazing pre-wedding shoot experience! The locations, poses, and final photos exceeded our expectations. Thank you for making our day so special!',
  },
  {
    name: 'Vikram Singh',
    rating: 5,
    text: 'Professional event coverage for our corporate function. The quality of photos and videos was outstanding. Will definitely book again!',
  },
  {
    name: 'Neha Patel',
    rating: 5,
    text: 'Best photography service in Rajasthan! The cinematic films they created for our wedding are absolutely stunning. Worth every penny!',
  },
  {
    name: 'Arjun & Meera',
    rating: 5,
    text: 'UC Photography made our special day unforgettable. The attention to detail and creative shots were beyond amazing. Thank you!',
  },
];

export function Reviews() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Client <span className="text-gold">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What our happy clients say about us
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-900 border-gray-800 h-full hover:border-gold transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-300 mb-4 grow italic">"{review.text}"</p>

                    {/* Name */}
                    <p className="text-gold font-semibold">— {review.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
