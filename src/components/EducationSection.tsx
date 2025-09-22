import { useEffect, useRef, useState } from 'react';

const EducationSection = () => {
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

  const education = [
    {
      institution: "Ateko Academy",
      program: "Khoá Toàn Khoa Thiết Kế Tạo Mẫu Tóc",
      description: "Chương trình đào tạo chuyên sâu về kỹ thuật cắt tóc, tạo kiểu và thiết kế sáng tạo.",
      type: "Professional"
    },
    {
      institution: "Menspire Academy",
      program: "Thiết Kế Tạo Mẫu Tóc Nam (Virtual Seminar)",
      description: "Khóa học trực tuyến chuyên biệt về kỹ thuật tạo mẫu tóc nam hiện đại và phong cách.",
      type: "Specialized"
    },
    {
      institution: "Cao đẳng nghề công nghiệp Hà Nội",
      program: "Chứng Chỉ Nghiệp Vụ Sư Phạm Dạy Trình Độ Sơ Cấp",
      description: "Đào tạo kỹ năng giảng dạy và truyền đạt kiến thức chuyên môn trong lĩnh vực làm đẹp.",
      type: "Teaching"
    }
  ];

  const skills = [
    { name: "Hair Cutting & Styling", level: 95 },
    { name: "Creative Design", level: 90 },
    { name: "Color Theory", level: 85 },
    { name: "Teaching & Mentoring", level: 88 },
    { name: "Brand Collaboration", level: 92 },
    { name: "Event Management", level: 80 }
  ];

  return (
    <section id="education" ref={sectionRef} className="snap-section bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Học Vấn & Kỹ Năng</span>
            </h2>
            <div className="section-divider max-w-32 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-primary mb-8">Quá Trình Học Tập</h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="glass-card p-6 rounded-xl hover-glow"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {edu.institution}
                        </h4>
                        <p className="text-primary font-medium mb-3">
                          {edu.program}
                        </p>
                      </div>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {edu.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-primary mb-8">Kỹ Năng Chuyên Môn</h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="space-y-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.1 + 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-primary mb-6">Chứng Chỉ & Thành Tựu</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-lg text-center hover-glow">
                    <div className="text-2xl font-bold text-accent mb-1">3+</div>
                    <div className="text-sm text-muted-foreground">Chứng Chỉ</div>
                  </div>
                  <div className="glass-card p-4 rounded-lg text-center hover-glow">
                    <div className="text-2xl font-bold text-accent mb-1">200+</div>
                    <div className="text-sm text-muted-foreground">Học Viên</div>
                  </div>
                  <div className="glass-card p-4 rounded-lg text-center hover-glow">
                    <div className="text-2xl font-bold text-accent mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">Sự Kiện</div>
                  </div>
                  <div className="glass-card p-4 rounded-lg text-center hover-glow">
                    <div className="text-2xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Hài Lòng</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;