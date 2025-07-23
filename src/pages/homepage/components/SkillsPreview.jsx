import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState({});
  const sectionRef = useRef(null);

  const skills = [
    { name: "Next.js", level: 40, icon: "Code2", color: "accent" },
    { name: "React", level: 50, icon: "Atom", color: "success" },
    { name: "TypeScript", level: 50, icon: "FileCode", color: "accent" },
    { name: "Node.js", level: 40, icon: "Server", color: "success" },
    { name: "MySql", level: 40, icon: "Database", color: "accent" },
    { name: "express", level: 40, icon: "Package", color: "success" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate bars with staggered delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedBars(prev => ({
                ...prev,
                [skill.name]: true
              }));
            }, index * 200);
          });
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
    <section ref={sectionRef} className="py-20 bg-card/30">
      <div className="container-wide px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Zap" size={16} />
              Keahlian Teknis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Teknologi yang Saya Kuasai
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Menguasai teknologi modern untuk membangun aplikasi web yang scalable dan performant
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-surface/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover:bg-surface/70 transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${skill.color}/10 flex items-center justify-center`}>
                    <Icon 
                      name={skill.icon} 
                      size={20} 
                      className={`text-${skill.color}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                    <span className="text-sm text-muted-foreground">{skill.level}% Proficiency</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${
                        skill.color === 'accent' ?'from-accent to-accent/80' :'from-success to-success/80'
                      } transition-all duration-1000 ease-out`}
                      style={{
                        width: animatedBars[skill.name] ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                  <div className="absolute -top-8 right-0 text-xs text-muted-foreground font-mono">
                    {animatedBars[skill.name] ? `${skill.level}%` : '0%'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/skills">
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="border-accent/30 text-accent hover:bg-accent/10"
              >
                Lihat Semua Keahlian
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;