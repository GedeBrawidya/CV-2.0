import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'CEO',
      company: 'TechStart Indonesia',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Kerja sama dengan PortfolioHub sangat memuaskan. Website e-commerce yang dibangun tidak hanya indah secara visual, tetapi juga sangat fungsional dan user-friendly. Tim development sangat responsif dan selalu memberikan solusi terbaik untuk setiap tantangan teknis yang kami hadapi.`,
      project: 'E-commerce Platform',
      duration: '3 bulan',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      name: 'Sari Dewi',
      role: 'Marketing Director',
      company: 'Digital Creative Agency',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Profesionalisme dan kualitas kerja yang luar biasa! Landing page yang dibuat berhasil meningkatkan conversion rate kami hingga 40%. Komunikasi lancar, deadline tepat waktu, dan hasil akhir melebihi ekspektasi. Sangat direkomendasikan untuk proyek digital marketing.`,
      project: 'Landing Page Optimization',
      duration: '6 minggu',
      technologies: ['Next.js', 'Tailwind CSS', 'Analytics']
    },
    {
      id: 3,
      name: 'Ahmad Rahman',
      role: 'Founder',
      company: 'EduTech Solutions',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Platform pembelajaran online yang dibangun sangat robust dan scalable. Fitur-fitur yang dikembangkan sesuai dengan kebutuhan siswa dan guru. Yang paling impressive adalah kemampuan problem-solving dan attention to detail yang sangat baik. Maintenance support juga excellent.`,
      project: 'Learning Management System',
      duration: '4 bulan',
      technologies: ['React', 'Express.js', 'PostgreSQL']
    },
    {
      id: 4,
      name: 'Lisa Permata',
      role: 'Product Manager',
      company: 'FinTech Startup',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Aplikasi mobile banking yang dikembangkan memiliki security dan performance yang sangat baik. Code quality tinggi, dokumentasi lengkap, dan testing coverage yang comprehensive. Tim sangat memahami compliance requirements di industri financial technology.`,
      project: 'Mobile Banking App',
      duration: '5 bulan',
      technologies: ['React Native', 'Node.js', 'Redis']
    },
    {
      id: 5,
      name: 'Rendra Wijaya',
      role: 'CTO',
      company: 'Logistics Tech',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      content: `Dashboard analytics yang dibangun sangat powerful dan intuitive. Real-time data visualization membantu kami membuat keputusan bisnis yang lebih cepat dan akurat. Integration dengan berbagai third-party services berjalan sangat smooth. Highly recommended!`,
      project: 'Analytics Dashboard',
      duration: '2 bulan',
      technologies: ['Vue.js', 'D3.js', 'Python']
    }
  ];

  const stats = [
    { label: 'Proyek Selesai', value: '50+', icon: 'CheckCircle' },
    { label: 'Klien Puas', value: '98%', icon: 'Heart' },
    { label: 'Rating Rata-rata', value: '4.9/5', icon: 'Star' },
    { label: 'Repeat Clients', value: '85%', icon: 'Repeat' }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Testimoni Klien
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Kepercayaan dan kepuasan klien adalah prioritas utama. Berikut adalah feedback dari beberapa partner yang telah berkolaborasi dengan saya.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-card rounded-xl border border-border/20">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name={stat.icon} size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main Testimonial */}
      <div className="bg-gradient-to-br from-card to-surface/50 rounded-2xl p-8 border border-border/20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-success/5 rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="Quote" size={32} className="text-accent" />
              <span className="text-sm text-muted-foreground">
                {activeTestimonial + 1} dari {testimonials.length}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <Icon name="ChevronLeft" size={20} className="text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <Icon name="ChevronRight" size={20} className="text-foreground" />
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Client Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                  <Image
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-sm text-accent">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(currentTestimonial.rating)}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({currentTestimonial.rating}.0)
                </span>
              </div>

              {/* Project Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {currentTestimonial.project}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Durasi: {currentTestimonial.duration}
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Teknologi:</p>
                <div className="flex flex-wrap gap-2">
                  {currentTestimonial.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="lg:col-span-2">
              <blockquote className="text-lg text-foreground leading-relaxed italic">
                "{currentTestimonial.content}"
              </blockquote>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-accent w-8' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* All Testimonials Grid */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Semua Testimoni
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                index === activeTestimonial
                  ? 'border-accent/50 bg-accent/5' :'border-border/20 hover:border-border/40'
              }`}
              onClick={() => setActiveTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {testimonial.content}
              </p>

              <div className="mt-4 pt-4 border-t border-border/20">
                <p className="text-xs text-accent font-medium">
                  {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-accent/10 to-success/10 rounded-xl p-8 border border-accent/20">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Bergabunglah dengan Klien yang Puas
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Mari diskusikan bagaimana saya bisa membantu mewujudkan visi digital Anda dan memberikan hasil yang melampaui ekspektasi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact-form" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent to-success text-background font-semibold rounded-lg hover:from-accent/90 hover:to-success/90 transition-all duration-300"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Mulai Proyek Anda
          </a>
          <a 
            href="tel:+6281234567890" 
            className="inline-flex items-center justify-center px-6 py-3 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Hubungi Langsung
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;