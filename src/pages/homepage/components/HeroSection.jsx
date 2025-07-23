import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
// Ganti path gambar ke public assets
const profile = '/assets/images/foto-kampus.jpg';

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const taglines = [
    "Crafting Digital Experiences That Matter",
    "Where Technical Excellence Meets Creative Vision", 
    "Building the Future, One Project at a Time",
    "Transforming Ideas Into Digital Reality"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Elegant Geometric Patterns */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-96 h-96 border border-accent/30 rounded-full"
            style={{
              left: `${20 + mousePosition.x * 0.02}%`,
              top: `${30 + mousePosition.y * 0.02}%`,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)'
            }}
          />
          <div 
            className="absolute w-64 h-64 border border-success/30 rounded-full"
            style={{
              right: `${15 + mousePosition.x * 0.03}%`,
              bottom: `${25 + mousePosition.y * 0.03}%`,
              transform: 'translate(50%, 50%)',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)'
            }}
          />
          <div 
            className="absolute w-80 h-80 border border-cta/20 rounded-full"
            style={{
              left: `${60 + mousePosition.x * 0.015}%`,
              top: `${60 + mousePosition.y * 0.025}%`,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)'
            }}
          />
        </div>

        {/* Enhanced Particle Effects */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                boxShadow: `0 0 ${4 + Math.random() * 8}px rgba(139, 92, 246, 0.3)`
              }}
            />
          ))}
        </div>

        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Professional Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                <Image
                  src={profile}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/20 via-success/10 to-cta/15 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -inset-2 bg-gradient-to-br from-accent/30 to-success/30 rounded-full blur-sm opacity-40" />
            </div>
          </div>

          {/* Enhanced Main Headline */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              <span className="text-gradient">Gede Brawidya Puja Dharma</span>
            </h1>
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2 
                key={currentTagline}
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium animate-fade-in"
              >
                {taglines[currentTagline]}
              </h2>
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Mahasiswa S1 Informatika Universitas Amikom Yogyakarta dengan pengalaman menjadi asisten praktikum pemrograman, kepanitiaan computer club, dan berpengalaman membangun project bersama tim.
          </p>

          {/* Enhanced CTA Buttons - No CV Download */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/project">
              <Button
                variant="default"
                size="lg"
                iconName="FolderOpen"
                iconPosition="left"
                className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-background font-semibold px-8 py-4 shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                Lihat Portfolio
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/60 px-8 py-4 backdrop-blur-sm transition-all duration-300"
              >
                Hubungi Saya
              </Button>
            </Link>
          </div>

          {/* Enhanced Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">1+</div>
              <div className="text-sm text-muted-foreground">Pegalaman Asisten Praktikum</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-success mb-1 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-sm text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-cta mb-1 group-hover:scale-110 transition-transform duration-300">8+</div>
              <div className="text-sm text-muted-foreground">Teknologi</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform duration-300">cursor</div>
              <div className="text-sm text-muted-foreground">assistant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2">Scroll untuk melihat lebih</span>
          <Icon name="ChevronDown" size={24} className="text-accent drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;