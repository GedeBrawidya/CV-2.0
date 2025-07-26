import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TimelineFilter from './components/TimelineFilter';
import TimelineItem from './components/TimelineItem';
import StatsOverview from './components/StatsOverview';
import Icon from '../../components/AppIcon';
import { Link } from 'react-router-dom';

const ProfessionalJourney = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentLanguage, setCurrentLanguage] = useState('id');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'id';
    setCurrentLanguage(savedLanguage);
  }, []);

  const timelineData = [
    {
      id: 1,
      type: 'education',
      title: 'Universitas Amikom Yogyakarta',
      organization: 'Universitas Amikom Yogyakarta',
      location: 'Yogyakarta',
      period: '2023 - Sekarang',
      status: 'Mahasiswa Aktif',
      description: 'Kuliah di jurusan Informatika, aktif di organisasi dan pengembangan diri di bidang teknologi.',
      skills: ['Frontend Development', 'Komunikasi', 'Organisasi'],
      achievements: [
        'IPK 3,83',
        'Mendapat Beasiswa 80 Prestasi 80 Persen',
        'Mengikuti Kepanitiaan AMCC'
      ],
      projects: [
        {
          name: 'Techtona',
          description: 'Aplikasi Karang Taruna untuk manajemen kegiatan organisasi',
          impact: 'Project utama selama kuliah'
        }
      ]
    },
    {
      id: 2,
      type: 'education',
      title: 'SMA Negeri 1 Singaraja',
      organization: 'SMA Negeri 1 Singaraja',
      location: 'Singaraja, Bali',
      period: '2020 - 2023',
      status: 'Lulus',
      description: 'Menyelesaikan pendidikan menengah atas dengan fokus pada sains dan aktif di karya ilmiah remaja.',
      skills: ['Sains', 'Matematik', 'Chemistry', 'Problem Solving', 'Leadership'],
      achievements: [
        'Juara 3 di kelas',
        'Juara Karya Ilmiah Tingkat Nasional',
        'Penghargaan Khusus Karya Ilmiah Tingkat Nasional',
        'Anggota Inti Eskul Karya Ilmiah Remaja'
      ]
    },
    {
      id: 3,
      type: 'experience',
      title: 'Asisten Praktikum Pemrograman',
      organization: 'Universitas Amikom Yogyakarta',
      location: 'Yogyakarta',
      period: '2025',
      status: 'Aktif',
      description: 'Membantu dosen dalam pelaksanaan praktikum mata kuliah pemrograman, membimbing mahasiswa dalam memahami materi dan praktik coding.',
      skills: ['C#', 'Komunikasi', 'Teaching'],
      achievements: []
    },
    {
      id: 4,
      type: 'experience',
      title: 'SIE Acara Kepanitiaan CODE 5.0 AMCC',
      organization: 'AMCC',
      location: 'Yogyakarta',
      period: '2025',
      status: 'Selesai',
      description: 'Menjadi panitia inti pada acara CODE 5.0 yang diselenggarakan oleh AMCC, bertanggung jawab pada bidang acara.',
      skills: ['Komunikasi', 'Leadership'],
      achievements: []
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Juara & Penghargaan Khusus Olimpiade Penelitian Siswa Nasional',
      organization: 'Kemdikbud',
      location: 'Indonesia',
      period: '2023',
      status: 'Selesai',
      description: 'Mendapatkan juara dan penghargaan khusus di bidang MTS pada Olimpiade Penelitian Siswa Nasional.',
      skills: ['MTS', 'Penelitian', 'Problem Solving'],
    }
  ];

  const filteredData = activeFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Perjalanan - Pendidikan & Pengalaman | Portfolio</title>
        <meta name="description" content="Jelajahi perjalanan pendidikan dan pengalaman profesional saya dalam dunia teknologi. Timeline interaktif dengan pencapaian, sertifikat, dan testimoni." />
        <meta name="keywords" content="pendidikan, pengalaman kerja, karir, teknologi, developer, Indonesia" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="container-wide py-16 lg:py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent/20 to-success/20 rounded-full mb-6">
              <Icon name="MapPin" size={40} className="text-accent" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Perjalanan
              <span className="text-gradient block">Profesional</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dari bangku kuliah hingga menjadi developer profesional - setiap langkah adalah pembelajaran, 
              setiap pencapaian adalah milestone menuju visi yang lebih besar.
            </p>
          </div>

          <StatsOverview />
        </section>

        {/* Timeline Section */}
        <section className="container-wide pb-16">
          <TimelineFilter 
            activeFilter={activeFilter} 
            onFilterChange={setActiveFilter} 
          />

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-success to-warning opacity-30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-0">
              {filteredData.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLeft={index % 2 === 0}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-surface/50 rounded-full mb-4">
                <Icon name="Search" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Tidak ada data ditemukan</h3>
              <p className="text-muted-foreground">Coba ubah filter untuk melihat konten lainnya.</p>
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="container-wide py-16">
          <div className="text-center bg-gradient-to-br from-accent/5 to-success/5 rounded-2xl p-12 border border-accent/10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Icon name="MessageCircle" size={32} className="text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Mari Berkolaborasi
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tertarik untuk bekerja sama atau ingin mengetahui lebih lanjut tentang pengalaman saya? 
              Jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/project"
                className="btn-secondary flex items-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Icon name="FolderOpen" size={20} className="mr-2" />
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>    
      {/* Footer */}
      <footer className="bg-card border-t border-border/20">
        <div className="container-wide py-8">
          <div className="w-full text-center mb-2">
            <span className="text-sm text-muted-foreground">© 2025 Portfolio Dibuat menggunakan React & Tailwind CSS.</span>
          </div>
          <div className="flex items-center gap-4 justify-center w-full">
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
      </footer>
    </div>
  );
};

export default ProfessionalJourney;