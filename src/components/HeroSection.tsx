import { useEffect, useState } from 'react';
import heroVideo from '../assets/GetSave.com_Facebook_Media_004_1286691993121649v.mp4';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ['Barber', 'Developer', 'Educator', 'Entrepreneur'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="snap-section hero-gradient relative flex items-center justify-center overflow-hidden">
      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between rounded-full bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2">
            <a href="#" className="text-white font-semibold tracking-wide">
              {"I'm not just a "}
              <span className="text-primary neon-text uppercase">
                {roles[roleIndex]}
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">Giới thiệu</a>
              <a href="#portfolio" className="text-white/80 hover:text-white transition-colors">Portfolio</a>
              <a href="#experience" className="text-white/80 hover:text-white transition-colors">Kinh nghiệm</a>
              <a href="#education" className="text-white/80 hover:text-white transition-colors">Học vấn</a>
              <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">Liên hệ</a>
            </div>
          </div>
        </div>
      </nav>
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlays to improve text contrast */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 0%, transparent 50%)`
             }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-screen"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;