import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import FeaturedProject from './components/FeaturedProject';
import ProjectStats from './components/ProjectStats';
import ProjectDetailModal from './components/ProjectDetailModal';
import { Link } from 'react-router-dom';

const ProjectPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "PANTAUIN",
      description: "Website Mentoring dan monitoring pekerja lapangan",
      image: "/assets/images/pantauin.png",
      status: "Live",
      featured: true,
      category: "Team Project - Frontend",
      technologies: ["React", "express", "tailwind"],
      stats: {
        users: "-",
        performance: "-",
        uptime: "-"
      },
      liveUrl: "https://pantauin.vercel.app",
      githubUrl: "https://github.com/GedeBrawidya/pantauin.git",
      metrics: [
        { label: "Users", value: " 1+" },
        { label: "Mentors", value: " 3+" }
      ],
      challenge: `Membutuhkan sistem monitoring yang efisien untuk pekerja lapangan di berbagai lokasi dengan update real-time dan pelaporan yang mudah.`,
      solution: `Membangun platform berbasis web dengan dashboard monitoring, notifikasi otomatis, dan integrasi data GPS untuk pelacakan pekerja lapangan.`,
      keyFeatures: [
        "Dashboard monitoring real-time",
        "Integrasi notifikasi otomatis",
        "Pelaporan harian dan mingguan",
        "Integrasi data GPS"
      ],
      architecture: [
        {
          title: "Frontend",
          description: "React + Tailwind untuk UI responsif dan modern."
        },
        {
          title: "Backend",
          description: "Express.js untuk API dan pengelolaan data."
        }
      ],
      businessImpact: [
        {
          title: "Efisiensi Monitoring",
          description: "Waktu monitoring turun 50% dan pelaporan lebih akurat."
        }
      ]
    },
    {
      id: 2,
      title: "WEB-CV",
      description: "Project cv pertama mendeskripsikan data diri dan keterampilan",
      image: "/assets/images/cv-1.png",
      status: "Live",
      featured: false,
      category: "Web App",
      technologies: ["Vue.js", "Railway", "Neon", "Tailwind"],
      stats: {
        users: "-",
        performance: "-",
        uptime: "-"
      },
      liveUrl: "https://interactive-cv-brawidya.vercel.app/",
      githubUrl: "https://github.com/GedeBrawidya/interactive-cv-brawidya.git ",
      metrics: [
        { label: "Visitors", value: "1+" },
        
      ],
      challenge: `Membuat CV digital yang mudah diupdate dan dapat diakses dari mana saja.`,
      solution: `Menggunakan Vue.js dan Railway untuk deployment cepat dan update konten secara real-time.`,
      keyFeatures: [
        "Desain responsif",
        "Update data real-time",
        "Integrasi dengan media sosial"
      ],
      architecture: [
        {
          title: "Frontend",
          description: "Vue.js + Tailwind untuk tampilan modern."
        },
        {
          title: "Deployment",
          description: "Railway dan Neon untuk hosting dan database."
        }
      ],
      businessImpact: [
        {
          title: "Aksesibilitas Tinggi",
          description: "CV dapat diakses kapan saja dan mudah dibagikan."
        }
      ]
    },
    {
      id: 3,
      title: "Upgrade Web CV",
      description: "Versi terbaru dari CV 1 dengan peningkatan desain dan pengalaman Tanpa DB",
      image: "/assets/images/cv-2.png",
      status: "Live",
      featured: false,
      category: "Project Pribadi",
      technologies: ["React.js", "Tailwind"],
      stats: {
        users: "1",
        performance: "-",
        uptime: "-"
      },
      liveUrl: "#",
      githubUrl: "#",
      metrics: [
        { label: "Visitors", value: "100+" }
      ],
      challenge: `Meningkatkan tampilan dan UX dari CV digital tanpa backend/database.`,
      solution: `Menggunakan React.js dan Tailwind untuk UI statis yang mudah diupdate.`,
      keyFeatures: [
        "Desain minimalis",
        "Tanpa backend",
        "Update konten mudah"
      ],
      architecture: [
        {
          title: "Frontend",
          description: "React.js + Tailwind untuk UI statis."
        }
      ],
      businessImpact: [
        {
          title: "Peningkatan Personal Branding",
          description: "CV lebih menarik dan mudah dibagikan."
        }
      ]
    },
    {
      id: 4,
      title: "Techtona",
      description: "Aplikasi Karang taruna dengan fitur utama untuk memanajemen kegiatan organisasi karang taruna",
      image: "/assets/images/techtona.png",
      status: "Live",
      featured: false,
      category: "Web App",
      technologies: ["next.js", "Azure", "Tailwind", "express", "typescript"],
      stats: {
        users: "-",
        performance: "96%",
        uptime: "99.7%"
      },
      liveUrl: "https://techtona-karang-taruna.vercel.app/",
      githubUrl: "https://github.com/rifkibayuariy/karang-taruna.git",
      metrics: [
        { label: "Members", value: "50+" },
        { label: "Events", value: "12+" }
      ],
      challenge: `Manajemen kegiatan organisasi yang kompleks dan butuh kolaborasi online.`,
      solution: `Membangun aplikasi web dengan fitur event management, notifikasi, dan dashboard anggota.`,
      keyFeatures: [
        "Event management",
        "Dashboard anggota",
        "Notifikasi kegiatan"
      ],
      architecture: [
        {
          title: "Frontend",
          description: "Next.js + Tailwind untuk UI modern."
        },
        {
          title: "Backend",
          description: "Express.js + Azure untuk API dan hosting."
        }
      ],
      businessImpact: [
        {
          title: "Kolaborasi Lebih Mudah",
          description: "Pengurus dan anggota lebih mudah berkoordinasi."
        }
      ]
    }
  ];

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Apply category filter
    if (activeFilter !== 'all') {
      const cat = activeFilter.toLowerCase();
      if (cat === 'web') {
        filtered = filtered.filter(project => project.category.toLowerCase().includes('web'));
      } else if (cat === 'mobile') {
        filtered = filtered.filter(project => project.category.toLowerCase().includes('mobile'));
      } else if (cat === 'api') {
        filtered = filtered.filter(project => project.category.toLowerCase().includes('api'));
      } else if (cat === 'tools') {
        filtered = filtered.filter(project => project.category.toLowerCase().includes('tool'));
      } else {
      filtered = filtered.filter(project => project.category === activeFilter);
      }
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'featured':
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'recent':
      default:
        filtered.sort((a, b) => b.id - a.id);
        break;
    }

    return filtered;
  }, [activeFilter, searchQuery, sortBy]);

  const featuredProject = projects.find(project => project.featured);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Project | Portfolio</title>
        <meta name="description" content="Explore comprehensive case studies of web applications, mobile apps, and technical solutions with detailed impact metrics and live demonstrations." />
        <meta name="keywords" content="portfolio, projects, case studies, web development, mobile apps, React, Node.js" />
        <meta property="og:title" content="Project Portfolio - Case Studies Showcase" />
        <meta property="og:description" content="Immersive project showcase with live demos, technical insights, and measurable business impact." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-success/5" />
            <div className="container-wide relative">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
                  <Icon name="FolderOpen" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">Project Portfolio</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Case Studies &{' '}
                  <span className="text-gradient bg-gradient-to-r from-accent to-success bg-clip-text text-transparent">
                    Project Showcase
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                  Jelajahi koleksi proyek komprehensif dengan studi kasus mendalam, demo langsung, 
                  dan metrik dampak yang terukur. Setiap proyek menampilkan solusi inovatif untuk 
                  tantangan bisnis nyata.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Eye"
                    iconPosition="left"
                    className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-background font-semibold"
                    onClick={() => document.getElementById('featured-project')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Lihat Featured Project
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Github"
                    iconPosition="left"
                    className="border-border/30 hover:border-accent/30 hover:bg-accent/10"
                    onClick={() => window.open('https://github.com/GedeBrawidya', '_blank')}
                  >
                    View All Repositories
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Project Statistics */}
          <section className="py-16">
            <div className="container-wide">
              <ProjectStats projects={projects} />
            </div>
          </section>

          {/* Featured Project */}
          {featuredProject && (
            <section id="featured-project" className="py-16">
              <div className="container-wide">
                <FeaturedProject project={featuredProject} />
              </div>
            </section>
          )}

          {/* All Projects */}
          <section className="py-16">
            <div className="container-wide">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  All Projects
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Koleksi lengkap proyek dengan berbagai teknologi dan solusi bisnis
                </p>
              </div>

              <FilterBar
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalProjects={projects.length}
                filteredCount={filteredAndSortedProjects.length}
              />

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredAndSortedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onViewDetails={() => setSelectedProject(project)}
                  />
                ))}
              </div>

              {/* No Results */}
              {filteredAndSortedProjects.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Search" size={32} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No projects found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveFilter('all');
                      setSearchQuery('');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-br from-surface/50 to-card/30">
            <div className="container-wide text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Start Your Next Project?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm mb-4">
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
                <p className="text-lg text-muted-foreground mb-8">
                  Mari berkolaborasi untuk menciptakan solusi digital yang inovatif dan berdampak. 
                  Hubungi saya untuk mendiskusikan proyek Anda.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {/* <Link to="/contact">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                      className="border-accent/30 text-accent hover:bg-accent/10"
                  >
                    Start a Conversation
                  </Button>
                  </Link> */}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border/20 py-8 mt-8">
        <div className="container-wide px-4">
          <div className="w-full text-center mb-2">
            <span className="text-muted-foreground">© 2025 Portfolio Dibuat menggunakan React & Tailwind CSS.</span>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default ProjectPortfolio;