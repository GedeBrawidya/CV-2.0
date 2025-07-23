import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillFilter from './components/SkillFilter';
import SkillNetwork from './components/SkillNetwork';
import SkillGrid from './components/SkillGrid';
import SkillTimeline from './components/SkillTimeline';
import SkillDetails from './components/SkillDetails';
import SkillStats from './components/SkillStats';

const SkillsMatrixTechnicalEcosystem = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('network');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Mock skills data
  const skills = [
    {
      id: 'nextjs',
      name: 'Next.js',
      category: 'frontend',
      proficiency: 40,
      icon: 'Code2',
      startDate: '2024-06-04',
      projectsUsed: 1,
      description: `Next.js adalah framework React yang pernah saya coba untuk project organisasi kampus.`,
      image: '/assets/images/techtona.png',
      recentProjects: [
        {
          name: 'Techtona',
          description: 'Website Karang Taruna',
          role: 'Frontend Developer',
          year: '2024',
          image: '/assets/images/techtona.png'
        }
      ],
      learningResources: [
        {
          title: 'Next.js Documentation',
          platform: 'NextJS.org',
          type: 'documentation'
        }
      ],
      relatedSkills: ['React', 'TypeScript']
    },
    {
      id: 'react',
      name: 'React',
      category: 'frontend',
      proficiency: 50,
      icon: 'Atom',
      startDate: '2024-06-04',
      projectsUsed: 2,
      description: `React adalah library JavaScript untuk membangun user interface. Saya telah menggunakan React untuk beberapa project kuliah dan tugas pribadi.`,
      image: '/assets/images/pantauin.png',
      recentProjects: [
        {
          name: 'PANTAUIN',
          description: 'Website mentoring dan monitoring pekerja lapangan',
          role: 'Frontend Developer',
          year: '2025',
          image: '/assets/images/pantauin.png'
        },
        {
          name: 'WEB-CV',
          description: 'Project CV online sederhana',
          role: 'Frontend Developer',
          year: '2025',
          image: '/assets/images/cv-1.png'
        }
      ],
      learningResources: [
        {
          title: 'React Official Documentation',
          platform: 'React.dev',
          type: 'documentation'
        }
      ],
      relatedSkills: ['Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'frontend',
      proficiency: 50,
      icon: 'FileCode',
      startDate: '2024-06-04',
      projectsUsed: 1,
      description: `TypeScript membantu menulis kode JavaScript yang lebih aman. Saya baru mulai belajar dan menggunakannya di beberapa tugas.`,
      image: '/assets/images/pantauin.png',
      recentProjects: [],
      learningResources: [
        {
          title: 'TypeScript Handbook',
          platform: 'TypeScript.org',
          type: 'documentation'
        }
      ],
      relatedSkills: ['React']
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'backend',
      proficiency: 40,
      icon: 'Server',
      startDate: '2024-06-04',
      projectsUsed: 1,
      description: `Node.js saya gunakan untuk backend sederhana pada beberapa project tugas kuliah.`,
      image: '/assets/images/pantauin.png',
      recentProjects: [
        {
          name: 'PANTAUIN',
          description: 'Backend API sederhana untuk monitoring',
          role: 'Backend Developer',
          year: '2023',
          image: '/assets/images/pantauin.png'
        }
      ],
      learningResources: [
        {
          title: 'Node.js Best Practices',
          platform: 'GitHub',
          type: 'documentation'
        }
      ],
      relatedSkills: ['Express.js', 'MySQL']
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'database',
      proficiency: 40,
      icon: 'Database',
      startDate: '2024-06-04',
      projectsUsed: 1,
      description: `MySQL adalah database yang saya gunakan untuk project backend sederhana.`,
      image: '/assets/images/pantauin.png',
      recentProjects: [
        {
          name: 'PANTAUIN',
          description: 'Database untuk data monitoring pekerja',
          role: 'Backend Developer',
          year: '2023',
          image: '/assets/images/pantauin.png'
        }
      ],
      learningResources: [
        {
          title: 'MySQL Tutorial',
          platform: 'W3Schools',
          type: 'documentation'
        }
      ],
      relatedSkills: ['Node.js']
    },
    {
      id: 'tailwindcss',
      name: 'Tailwind CSS',
      category: 'frontend',
      proficiency: 50,
      icon: 'Palette',
      startDate: '2024-06-04',
      projectsUsed: 2,
      description: `Tailwind CSS saya gunakan untuk styling di project React dan Next.js.`,
      image: '/assets/images/cv-2.png',
      recentProjects: [
        {
          name: 'Upgrade Web CV',
          description: 'Styling untuk CV online',
          role: 'Frontend Developer',
          year: '2025',
          image: '/assets/images/cv-2.png'
        }
      ],
      learningResources: [
        {
          title: 'Tailwind CSS Documentation',
          platform: 'TailwindCSS.com',
          type: 'documentation'
        }
      ],
      relatedSkills: ['React', 'Next.js']
    },
    {
      id: 'git',
      name: 'Git',
      category: 'tools',
      proficiency: 50,
      icon: 'GitBranch',
      startDate: '2024-06-04',
      projectsUsed: 2,
      description: `Git saya gunakan untuk version control project tugas dan kolaborasi kelompok.`,
      recentProjects: [],
      learningResources: [
        {
        
        }
      ],
      relatedSkills: ['GitHub']
    },
    {
      id: 'communication',
      name: 'Communication',
      category: 'soft-skills',
      proficiency: 70,
      icon: 'MessageCircle',
      startDate: '2022-01-01',
      projectsUsed: 2,
      description: `Komunikasi untuk kerja kelompok dan presentasi tugas kuliah.`,
      recentProjects: [],
      learningResources: [
        {
          title: 'Komunitas',
          platform: 'Sekolah',
          type: 'course'
        }
      ],
      relatedSkills: ['Teamwork']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', count: skills.length },
    { id: 'frontend', name: 'Frontend', count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: skills.filter(s => s.category === 'backend').length },
    { id: 'database', name: 'Database', count: skills.filter(s => s.category === 'database').length },
    { id: 'tools', name: 'Tools', count: skills.filter(s => s.category === 'tools').length },
    { id: 'soft-skills', name: 'Soft Skills', count: skills.filter(s => s.category === 'soft-skills').length }
  ];

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseDetails = () => {
    setSelectedSkill(null);
  };

  const renderSkillView = () => {
    switch (viewMode) {
      case 'network':
        return (
          <SkillNetwork 
            skills={filteredSkills} 
            selectedSkill={selectedSkill}
            onSkillSelect={handleSkillSelect}
          />
        );
      case 'grid':
        return (
          <SkillGrid 
            skills={filteredSkills}
            onSkillSelect={handleSkillSelect}
          />
        );
      case 'timeline':
        return (
          <SkillTimeline 
            skills={filteredSkills}
            onSkillSelect={handleSkillSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills Matrix - Technical Ecosystem | PortfolioHub</title>
        <meta name="description" content="Explore my comprehensive technical skills ecosystem with interactive visualizations, proficiency levels, and learning journey documentation." />
        <meta name="keywords" content="technical skills, programming, web development, React, Next.js, TypeScript, Node.js, skill matrix" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background via-surface/30 to-background">
          <div className="container-wide">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20 mb-6">
                <Icon name="Code2" size={16} />
                <span className="text-sm font-medium">Technical Ecosystem</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Skills <span className="text-gradient">Matrix</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Jelajahi ekosistem teknis yang komprehensif dengan visualisasi interaktif, 
                tingkat profisiensi, dan dokumentasi perjalanan pembelajaran yang berkelanjutan.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">{skills.length}</div>
                <div className="text-sm text-muted-foreground">Total Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">
                  {skills.filter(s => s.proficiency >= 90).length}
                </div>
                <div className="text-sm text-muted-foreground">Expert Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-error mb-2">
                  {skills.reduce((sum, skill) => sum + skill.projectsUsed, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Overview Stats */}
        <section className="py-16">
          <div className="container-wide">
            <SkillStats skills={skills} />
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="py-16">
          <div className="container-wide">
            {/* Filter and View Controls */}
            <SkillFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Skills Visualization */}
            <div className="mb-8">
              {renderSkillView()}
            </div>

            {/* View Mode Description */}
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Info" size={20} className="text-accent" />
                <h3 className="text-lg font-semibold text-foreground">
                  {viewMode === 'network' && 'Network View'}
                  {viewMode === 'grid' && 'Grid View'}
                  {viewMode === 'timeline' && 'Timeline View'}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {viewMode === 'network' && 'Visualisasi interaktif yang menunjukkan hubungan antar skill dan teknologi. Klik pada node untuk melihat detail dan koneksi skill.'}
                {viewMode === 'grid' && 'Tampilan grid yang menampilkan semua skill dengan informasi profisiensi, pengalaman, dan jumlah proyek yang telah dikerjakan.'}
                {viewMode === 'timeline' && 'Perjalanan pembelajaran skill dari waktu ke waktu, menunjukkan progres dan perkembangan kemampuan teknis.'}
              </p>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section className="py-16 bg-gradient-to-br from-surface/30 to-background">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Keterlibatan <span className="text-gradient">Komunitas</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Aktif berkontribusi dalam komunitas teknologi Indonesia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-background" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AMCC</h3>
                <p className="text-muted-foreground mb-4">
                  AMCC Merupakan organisasi kampus yang saya ikuti selama kuliah, 
                  saya aktif di bidang acara dan pengembangan diri di bidang frontend dan backend.
                </p>
                <div className="flex items-center space-x-2 text-sm text-accent">
                  <Icon name="Calendar" size={16} />
                  <span>Weekly participation since 2023</span>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-success to-warning rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Code" size={24} className="text-background" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Asisten Praktikum</h3>
                <p className="text-muted-foreground mb-4">
                  Kontributor dalam membantu dosen dalam pelaksanaan praktikum pemrograman, 
                  membimbing mahasiswa dalam memahami materi dan praktik coding.
                </p>
                <div className="flex items-center space-x-2 text-sm text-success">
                  <Icon name="Calendar" size={16} />
                  <span>since 2024</span>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-warning to-error rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-background" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Mini Class Next Js</h3>
                <p className="text-muted-foreground mb-4">
                  Komunitas pembelajaran Next Js yang saya ikuti selama kuliah, yang dilaksanakan oleh dunia coding.
                </p>
                <div className="flex items-center space-x-2 text-sm text-warning">
                  <Icon name="Calendar" size={16} />
                  <span>since 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container-wide">
            <div className="bg-gradient-to-br from-accent/10 to-success/10 border border-accent/20 rounded-xl p-8 text-center">
              <Icon name="Rocket" size={48} className="text-accent mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Mari Berkolaborasi!
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tertarik untuk bekerja sama atau ingin mendiskusikan proyek teknologi? 
                Saya selalu terbuka untuk peluang kolaborasi yang menarik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-background"
                >
                  Hubungi Saya
                </Button>
                <Button 
                  variant="outline"
                  iconName="FolderOpen"
                  iconPosition="left"
                  className="border-accent/30 text-accent hover:bg-accent/10"
                >
                  Lihat Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Skill Details Modal */}
      {selectedSkill && (
        <SkillDetails 
          skill={selectedSkill} 
          onClose={handleCloseDetails}
        />
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-wide">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} PortfolioHub. Dibuat dengan ❤️ menggunakan React & Next.js</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkillsMatrixTechnicalEcosystem;