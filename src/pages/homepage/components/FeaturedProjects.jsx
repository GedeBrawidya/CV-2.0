import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "PANTAUIN",
      description: "Website Mentoring dan monitoring pekerja lapangan",
      image: "/assets/images/pantauin.png",
      technologies: ["React", "express", "tailwind"],
      stats: {
        users: "-",
        performance: "-",
        uptime: "-"
      },
      liveUrl: "https://pantauin.vercel.app",
      githubUrl: "https://github.com/GedeBrawidya/pantauin.git",
      category: "Team Project - Frontend"
    },
    {
      id: 2,
      title: "WEB-CV",
      description: "Project cv pertama mendeskripsikan data diri dan keterampilan",
      image: "/assets/images/cv-1.png",
      technologies: ["Vue.js", "Railway", "Neon", "Tailwind"],
      stats: {
        users: "-",
        performance: "-",
        uptime: "-"
      },
      liveUrl: "https://interactive-cv-brawidya.vercel.app/",
      githubUrl: "https://github.com/GedeBrawidya/interactive-cv-brawidya.git ",
      category: "Web App"
    },
    {
      id: 3,
      title: "Upgrade Web CV",
      description: "Versi terbaru dari CV 1 dengan peningkatan desain dan pengalaman Tanpa DB",
      image: "/assets/images/cv-2.png",
      technologies: ["React.js", "Tailwind"],
      stats: {
        users: "1",
        performance: "-",
        uptime: "-"
      },
      liveUrl: "#",
      githubUrl: "#",
      category: "Project Pribadi"
    },
    {
      id: 4,
      title: "Techtona",
      description: "Aplikasi Karang taruna dengan fitur utama untuk memanajemen kegiatan organisasi karang taruna",
      image: "/assets/images/techtona.png",
      technologies: ["next.js", "Azure", "Tailwind", "express", "typescript"],
      stats: {
        users: "-",
        performance: "96%",
        uptime: "99.7%"
      },
      liveUrl: "https://techtona-karang-taruna.vercel.app/",
      githubUrl: "https://github.com/rifkibayuariy/karang-taruna.git",
      category: "WEB Project"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[activeProject];

  return (
    <section className="py-20 bg-background">
      <div className="container-wide px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Star" size={16} />
              Proyek Unggulan
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Karya Terbaik Saya
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Koleksi proyek yang menunjukkan kemampuan teknis dan kreativitas dalam memecahkan masalah bisnis
            </p>
          </div>

          {/* Featured Project Carousel */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent/90 text-background px-3 py-1 rounded-full text-sm font-medium">
                      {currentProject.category}
                    </span>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevProject}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-300 focus-ring"
                  >
                    <Icon name="ChevronLeft" size={20} className="text-foreground" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors duration-300 focus-ring"
                  >
                    <Icon name="ChevronRight" size={20} className="text-foreground" />
                  </button>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {currentProject.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Teknologi:</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-muted/20 text-muted-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{currentProject.stats.users}</div>
                      <div className="text-xs text-muted-foreground">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-success">{currentProject.stats.performance}</div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-accent">{currentProject.stats.uptime}</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                    <Button
                      variant="default"
                      iconName="ExternalLink"
                      iconPosition="right"
                        className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-background w-full"
                    >
                      Live Demo
                    </Button>
                    </a>
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                    <Button
                      variant="outline"
                      iconName="Github"
                      iconPosition="left"
                        className="border-border/30 text-foreground hover:bg-surface/50 w-full"
                    >
                      View Code
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? 'bg-accent scale-125' :'bg-muted/30 hover:bg-muted/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/project">
              <Button
                variant="outline"
                size="lg"
                iconName="FolderOpen"
                iconPosition="right"
                className="border-accent/30 text-accent hover:bg-accent/10"
              >
                Lihat Semua Proyek
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;