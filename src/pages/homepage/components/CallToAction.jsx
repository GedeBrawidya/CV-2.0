import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-card/30 via-background to-card/30">
      <div className="container-wide px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background Elements */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-success/5 rounded-full blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-success/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Rocket" size={16} />
                Mari Berkolaborasi
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Siap Mewujudkan{' '}
                <span className="text-gradient">Proyek Impian</span>{' '}
                Anda?
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                Dari konsep hingga deployment, saya siap membantu mewujudkan visi digital Anda dengan teknologi terdepan dan pendekatan yang user-centric.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-6 bg-surface/30 backdrop-blur-sm rounded-xl border border-border/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Pengembangan cepat dengan kualitas tinggi
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-surface/30 backdrop-blur-sm rounded-xl border border-border/20">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={24} className="text-success" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Code berkualitas dengan testing menyeluruh
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-surface/30 backdrop-blur-sm rounded-xl border border-border/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Collaborative</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Komunikasi transparan sepanjang proyek
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/project">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Eye"
                    iconPosition="left"
                    className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-4"
                  >
                    Lihat Case Studies
                  </Button>
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-border/20">
                <p className="text-sm text-muted-foreground mb-4">
                  Atau hubungi saya langsung:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                  <a 
                    href="mailto:gedepujaa9@gmail.com"
                    className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    <Icon name="Mail" size={16} />
                    gedepujaa9@gmail.com
                  </a>
                  <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
                  <a className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    <Icon name="Phone" size={16} />
                    +62 85190044083
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;