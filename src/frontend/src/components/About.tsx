import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/assets/generated/photographer-about.dim_500x500.png"
                alt="UC Photography & Film's Photographer"
                className="w-full rounded-lg shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-gold rounded-lg -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About <span className="text-gold">Us</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Welcome to <span className="text-gold font-semibold">UC Photography & Film's</span> —
                where moments become timeless memories.
              </p>
              <p>
                We specialize in wedding photography, cinematic films, event coverage, promotion
                shoots, and all types of special functions. Our passion is to capture emotions and
                real moments creatively.
              </p>
              <p>
                With years of experience and a keen eye for detail, we transform your special
                occasions into stunning visual stories that you'll cherish forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
