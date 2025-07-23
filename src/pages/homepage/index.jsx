import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsPreview from './components/SkillsPreview';
import FeaturedProjects from './components/FeaturedProjects';
import CallToAction from './components/CallToAction';

const HomepageHeroLanding = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Gede Brawidya Puja Dharma - Full Stack Developer | Portfolio</title>
        <meta 
          name="description" 
          content="HELLO WORLD" 
        />
        <meta name="keywords" content="Full Stack Developer, React, Next.js (beginner), TypeScript, Web Development, Indonesia" />
        <meta property="og:title" content="Gede Brawidya Puja Dharma - Full Stack Developer | Portfolio" />
        <meta property="og:description" content="Crafting Digital Experiences That Matter - Where Technical Excellence Meets Creative Vision" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfoliohub.dev/homepage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gede Brawidya Puja Dharma - Full Stack Developer" />
        <meta name="twitter:description" content="Building the Future, One Project at a Time" />
        <link rel="canonical" href="https://portfoliohub.dev/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16 lg:pt-20">
          <HeroSection />
          <SkillsPreview />
          <FeaturedProjects />
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-card/30 border-t border-border/20 py-8">
          <div className="container-wide px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">© {new Date().getFullYear()} Portfolio.</span>
                <span className="text-muted-foreground">Dibuat dengan</span>
                <span className="text-accent">REACT</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/GedeBrawidya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/gede-brawidya-puja-dharma-6b4889322/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://instagram.com/_enxyest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomepageHeroLanding;