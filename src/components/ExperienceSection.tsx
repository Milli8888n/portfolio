import { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "2016-2019",
      title: "Barber Tự Do",
      description: "Tìm hiểu và học hỏi qua internet, những mối quan hệ xung quanh. Trải nghiệm và làm việc tại nhiều môi trường khác nhau.",
      type: "Freelance"
    },
    {
      period: "2020-2021",
      title: "Ateko Academy",
      description: "Học tập và làm việc tại học viện, tham gia trợ giảng các khóa học chuyên nghiệp.",
      type: "Education"
    },
    {
      period: "2021-2023",
      title: "Freelance Hairstylist",
      description: "Làm việc cùng các nhãn hàng thời trang (Helios, Freakers, Goldie, Remmy), các nghệ sĩ trẻ (Right, Rapital, Rz Mas, Mck, Gonzo), hairstylist cho The Next Gentleman, Vietnam Junior Fashion Week, RapViet mùa 3, The new mentor.",
      type: "Professional"
    },
    {
      period: "2022",
      title: "4rau Academy",
      description: "Giảng viên và biên soạn giáo trình chuyên nghiệp cho các khóa học tạo mẫu tóc.",
      type: "Educator"
    },
    {
      period: "2023",
      title: "Mini.Cubic",
      description: "Thực hiện các project cá nhân, lớp học ngắn hạn và nghiên cứu sản xuất các sản phẩm tạo kiểu tóc.",
      type: "R&D"
    },
    {
      period: "2024-Present",
      title: "House of Barbaard Hanoi & Cuttwin Japan",
      description: "Làm việc tại các môi trường cao cấp chuẩn quốc tế.",
      type: "International"
    }
  ];

  const projects = [
    {
      title: "Hairjam 2023",
      subtitle: "Host chương trình",
      youtubeId: "hy3HX6-tYGU",
      url: "https://www.youtube.com/watch?v=hy3HX6-tYGU",
    },
    {
      title: "Mini.Cubic Education",
      subtitle: "Chương trình giáo dục",
      youtubeId: "2I2856UyNLg",
      url: "https://www.youtube.com/watch?v=2I2856UyNLg",
    },
    {
      title: "Sự kiện nổi bật",
      subtitle: "Video YouTube",
      youtubeId: "N-53_7Eaf5Y",
      url: "https://www.youtube.com/watch?v=N-53_7Eaf5Y",
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="snap-section bg-card py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Kinh Nghiệm</span>
            </h2>
            <div className="section-divider max-w-32 mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 timeline-line h-full rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 timeline-dot rounded-full z-10 animate-glow"></div>

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="glass-card p-6 rounded-xl hover-glow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.type}
                        </span>
                        <span className="text-sm text-muted-foreground font-mono">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {exp.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Projects */}
          <div className={`mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Dự Án Nổi Bật</h3>
            <div className="grid grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <a
                  key={proj.youtubeId}
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl overflow-hidden hover-glow transition-all duration-300"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${proj.youtubeId}/hqdefault.jpg`}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <h4 className="text-white font-semibold">{proj.title}</h4>
                      <p className="text-white/80 text-sm">{proj.subtitle}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;