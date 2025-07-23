import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import CollaborationPhilosophy from './components/CollaborationPhilosophy';
import TestimonialsSection from './components/TestimonialsSection';
import Icon from '../../components/AppIcon';

const ContactHubCommunicationCenter = () => {
  useEffect(() => {
    document.title = 'Contact Hub - Communication Center | PortfolioHub';
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const currentStatus = {
    availability: 'Tersedia',
    responseTime: '< 24 jam',
    timezone: 'WIB (UTC+7)',
    workingHours: '09:00 - 17:00',
    lastActive: 'Aktif sekarang'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-surface/20 to-background relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-success rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-accent font-medium">
                {currentStatus.lastActive} • {currentStatus.availability}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Mari Berkolaborasi &
              <span className="block text-gradient">Wujudkan Ide Digital</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Hubungi saya untuk diskusi proyek, konsultasi teknis, atau sekadar berbagi ide. 
              Saya berkomitmen memberikan respons yang cepat dan solusi yang tepat sasaran.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">
                  {currentStatus.responseTime}
                </div>
                <div className="text-sm text-muted-foreground">
                  Waktu Respons
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">
                  {currentStatus.workingHours}
                </div>
                <div className="text-sm text-muted-foreground">
                  Jam Kerja {currentStatus.timezone}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">
                  Tingkat Kepuasan
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Proyek Selesai
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-success text-background font-semibold rounded-lg hover:from-accent/90 hover:to-success/90 transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Mulai Diskusi
              </a>
              <a 
                href="#availability" 
                className="inline-flex items-center justify-center px-8 py-4 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-all duration-300"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Jadwalkan Meeting
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-success/30 text-success rounded-lg hover:bg-success/10 transition-all duration-300"
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-surface/30">
        <div className="container-wide">
          <ContactMethods />
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Availability Calendar Section */}
      <section id="availability" className="py-16 bg-surface/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <AvailabilityCalendar />
          </div>
        </div>
      </section>

      {/* Collaboration Philosophy Section */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <CollaborationPhilosophy />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-surface/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <TestimonialsSection />
          </div>
        </div>
      </section>

      {/* Geographic Availability */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Jangkauan Layanan
                </h2>
                <p className="text-muted-foreground">
                  Melayani klien di seluruh Indonesia dengan fokus pada pasar digital lokal
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Map */}
                <div className="bg-surface/50 rounded-xl p-6 border border-border/20">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Lokasi & Coverage Area
                  </h3>
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted/20 mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      loading="lazy"
                      title="Indonesia Coverage Area"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=-6.2088,106.8456&z=5&output=embed"
                      className="border-0"
                    />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>Berbasis di Jakarta, melayani seluruh Indonesia</span>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Area Layanan Utama
                    </h3>
                    <div className="space-y-3">
                      {[
                        { city: 'Jakarta & Sekitarnya', type: 'On-site & Remote', icon: 'Building' },
                        { city: 'Bandung', type: 'Remote & Occasional Visit', icon: 'Mountain' },
                        { city: 'Surabaya', type: 'Remote Collaboration', icon: 'Waves' },
                        { city: 'Yogyakarta', type: 'Remote & Cultural Projects', icon: 'Landmark' },
                        { city: 'Bali', type: 'Remote & Tourism Tech', icon: 'Palmtree' }
                      ].map((area, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-surface/30 rounded-lg">
                          <Icon name={area.icon} size={20} className="text-accent" />
                          <div>
                            <p className="font-medium text-foreground">{area.city}</p>
                            <p className="text-sm text-muted-foreground">{area.type}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Spesialisasi Industri
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'E-commerce', 'FinTech', 'EdTech', 'HealthTech', 
                        'Tourism', 'UMKM Digital', 'Startup', 'Corporate'
                      ].map((industry, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-success/10 border-t border-border/20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Rocket" size={48} className="text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Siap Memulai Proyek Impian Anda?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Jangan biarkan ide brilian Anda hanya menjadi impian. Mari wujudkan bersama dengan teknologi terdepan dan pendekatan yang user-centric.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="#contact-form" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-success text-background font-semibold rounded-lg hover:from-accent/90 hover:to-success/90 transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Kirim Pesan Sekarang
              </a>
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20berdiskusi%20tentang%20proyek%20digital" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-success/30 text-success rounded-lg hover:bg-success/10 transition-all duration-300"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Chat WhatsApp
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              <Icon name="Shield" size={16} className="inline mr-2" />
              Konsultasi awal gratis • Respons dalam 24 jam • No spam guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={16} color="var(--color-background)" />
              </div>
              <span className="text-lg font-bold text-foreground">PortfolioHub</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:hello@portfoliohub.dev" 
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/portfoliohub" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a 
                href="https://github.com/portfoliohub" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon name="Github" size={20} />
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-success transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} PortfolioHub. Crafted with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactHubCommunicationCenter;