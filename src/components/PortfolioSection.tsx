import { useEffect, useRef, useState } from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioImages = [
    { src: img1, alt: 'Portfolio image 1' },
    { src: img2, alt: 'Portfolio image 2' },
    { src: img3, alt: 'Portfolio image 3' },
    { src: img4, alt: 'Portfolio image 4' },
  ];

  // Duplicate images for seamless loop
  const allImages = [...portfolioImages, ...portfolioImages];

  return (
    <section id="portfolio" ref={sectionRef} className="snap-section bg-background py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Khám phá những tác phẩm tạo mẫu tóc chuyên nghiệp và sáng tạo
          </p>
          <div className="section-divider max-w-32 mx-auto"></div>
        </div>

        {/* Continuous Sliding Gallery */}
        <div className="relative">
          <div className="portfolio-slider">
            <div className="portfolio-track">
              {allImages.map((image, index) => (
                <div 
                  key={index} 
                  className="portfolio-slide"
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover-glow group">
                    <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="glass-card p-8 rounded-xl text-center hover-glow">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Khách Hàng</div>
          </div>
          <div className="glass-card p-8 rounded-xl text-center hover-glow">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Dự Án Lớn</div>
          </div>
          <div className="glass-card p-8 rounded-xl text-center hover-glow">
            <div className="text-4xl font-bold text-primary mb-2">9+</div>
            <div className="text-sm text-muted-foreground">Năm Kinh Nghiệm</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;