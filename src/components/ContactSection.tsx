import { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
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
    <section id="contact" ref={sectionRef} className="snap-section bg-card py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient">Liên Hệ</span>
            </h2>
            <div className="section-divider max-w-32 mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sẵn sàng hợp tác và mang đến những trải nghiệm tuyệt vời nhất cho dự án của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-primary mb-8">Thông Tin Liên Hệ</h3>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl hover-glow group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Địa Chỉ</h4>
                      <p className="text-muted-foreground">784 Bạch Đằng, Hai Bà Trưng, Hà Nội</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl hover-glow group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">tamhoang169196@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl hover-glow group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Điện Thoại</h4>
                      <p className="text-muted-foreground">0886075196</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-primary mb-4">Kết Nối</h4>
                <div className="flex space-x-4">
                  {/* Facebook */}
                  <a href="https://www.facebook.com/thientam.h" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                     className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors group">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.06C22 6.49 17.52 2 11.94 2 6.37 2 1.88 6.49 1.88 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.91h2.42V9.84c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.65l-.42 2.91h-2.23V22c4.78-.77 8.44-4.93 8.44-9.94z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                     className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors group">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.26 2.4.43.6.23 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-.9-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.2 0-3.5 0-4.7.1-1 0-1.6.2-2 .3-.5.2-.8.4-1.1.7-.3.3-.6.6-.7 1.1-.2.4-.3 1-.3 2-.1 1.2-.1 1.5-.1 4.7s0 3.5.1 4.7c0 1 .2 1.6.3 2 .2.5.4.8.7 1.1.3.3.6.6 1.1.7.4.2 1 .3 2 .3 1.2.1 1.5.1 4.7.1s3.5 0 4.7-.1c1 0 1.6-.2 2-.3.5-.2.8-.4 1.1-.7.3-.3.6-.6.7-1.1.2-.4.3-1 .3-2 .1-1.2.1-1.5.1-4.7s0-3.5-.1-4.7c0-1-.2-1.6-.3-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.6-1.1-.7-.4-.2-1-.3-2-.3-1.2-.1-1.5-.1-4.7-.1m0 2.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4m0 8.6a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8m5.3-9.9a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4"/>
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@thientam.h" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                     className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors group">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M21 8.5a6.9 6.9 0 0 1-4.3-1.5v7.1c0 3.3-2.7 6-6 6a6 6 0 1 1 2-11.6v2.6a3.4 3.4 0 1 0 2.4 3.2V2h2.5c.3 1.1 1 2.1 1.9 2.8 1 .8 2.2 1.2 3.5 1.2v2.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-primary mb-8">Hợp Tác Cùng Tôi</h3>
              
              <div className="space-y-6">
                <div className="glass-card p-8 rounded-xl hover-glow">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Dịch Vụ Chuyên Nghiệp</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Thiết kế tạo mẫu tóc sự kiện</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Hợp tác thương hiệu thời trang</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Đào tạo kỹ năng chuyên môn</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Tư vấn phong cách cá nhân</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-xl hover-glow text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Sẵn Sàng Hợp Tác</h4>
                  <p className="text-muted-foreground mb-6">
                    Liên hệ ngay để thảo luận về dự án của bạn và tạo nên những điều tuyệt vời cùng nhau.
                  </p>
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors hover-glow">
                    Bắt Đầu Hợp Tác
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Hoàng Thiện Tâm. All rights reserved. • Professional Hair Stylist Portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;