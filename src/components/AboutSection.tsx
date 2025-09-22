import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="snap-section bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Về Tôi</span>
            </h2>
            <div className="section-divider max-w-32 mx-auto"></div>
          </div>

          {/* Personal Info Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-primary mb-6">Thông Tin Cá Nhân</h3>
              <div className="space-y-4">
                <div className="glass-card p-6 rounded-xl hover-glow">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Họ và tên:</span>
                    <span className="font-medium">Hoàng Thiện Tâm</span>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl hover-glow">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Năm sinh:</span>
                    <span className="font-medium">1996</span>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl hover-glow">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Địa chỉ:</span>
                    <span className="font-medium text-right">784 Bạch Đằng, Hai Bà Trưng, Hà Nội</span>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-xl hover-glow">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Nguyên quán:</span>
                    <span className="font-medium">Quỳnh Lưu, Nghệ An</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-primary mb-6">Mục Tiêu Sự Nghiệp</h3>
              <div className="glass-card p-8 rounded-xl hover-glow">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Áp dụng những kinh nghiệm về kỹ năng thiết kế tạo mẫu tóc và sự hiểu biết về ngành nghề 
                  để trở nên chuyên nghiệp hơn, mang đến nhiều giá trị cho cộng đồng, xã hội. 
                  Từ đó góp phần giúp cho tập thể, tổ chức được phát triển và mở rộng.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-6 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Năm Kinh Nghiệm</div>
                </div>
                <div className="glass-card p-6 rounded-xl text-center hover-glow">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Dự Án Hoàn Thành</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;