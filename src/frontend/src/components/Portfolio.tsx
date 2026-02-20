import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Lightbox } from './Lightbox';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Category = 'All' | 'Wedding' | 'Events' | 'Promotion' | 'Functions' | 'Cinematic';

interface PortfolioImage {
  src: string;
  alt: string;
  category: Category;
}

const portfolioImages: PortfolioImage[] = [
  {
    src: '/assets/generated/portfolio-wedding-1.dim_800x600.png',
    alt: 'Wedding Photography 1',
    category: 'Wedding',
  },
  {
    src: '/assets/generated/portfolio-wedding-2.dim_800x600.png',
    alt: 'Wedding Photography 2',
    category: 'Wedding',
  },
  {
    src: '/assets/generated/portfolio-event-1.dim_800x600.png',
    alt: 'Event Photography',
    category: 'Events',
  },
  {
    src: '/assets/generated/portfolio-promotion-1.dim_800x600.png',
    alt: 'Promotion Photography',
    category: 'Promotion',
  },
  {
    src: '/assets/generated/portfolio-function-1.dim_800x600.png',
    alt: 'Function Photography',
    category: 'Functions',
  },
  {
    src: '/assets/generated/portfolio-cinematic-1.dim_800x600.png',
    alt: 'Cinematic Photography',
    category: 'Cinematic',
  },
];

const categories: Category[] = ['All', 'Wedding', 'Events', 'Promotion', 'Functions', 'Cinematic'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const filteredImages =
    selectedCategory === 'All'
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore our collection of captured moments
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-gold hover:bg-gold-light text-black font-semibold'
                    : 'border-gold text-gold hover:bg-gold hover:text-black'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer aspect-[4/3]"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
