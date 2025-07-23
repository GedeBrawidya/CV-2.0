import React from 'react';
import Icon from '../../../components/AppIcon';

const CollaborationPhilosophy = () => {
  const philosophyPoints = [
    {
      icon: 'Target',
      title: 'Fokus pada Hasil',
      description: 'Setiap proyek dimulai dengan pemahaman mendalam tentang tujuan bisnis Anda. Saya tidak hanya membangun fitur, tetapi solusi yang memberikan dampak nyata.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Users',
      title: 'Kolaborasi Transparan',
      description: 'Komunikasi terbuka adalah kunci sukses. Anda akan selalu mendapat update progress, terlibat dalam setiap keputusan penting, dan memiliki akses penuh ke development process.',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Zap',
      title: 'Inovasi Berkelanjutan',
      description: 'Teknologi terus berkembang, begitu juga solusi yang saya tawarkan. Saya selalu menggunakan best practices terbaru dan tools yang paling efisien untuk project Anda.',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Shield',
      title: 'Kualitas Terjamin',
      description: 'Code yang clean, dokumentasi lengkap, testing menyeluruh, dan maintenance support. Setiap deliverable melalui quality assurance yang ketat.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    }
  ];

  const workingStyles = [
    {
      title: 'Agile Development',
      description: 'Iterasi cepat dengan feedback loop yang pendek',
      icon: 'RotateCw'
    },
    {
      title: 'Design Thinking',
      description: 'User-centered approach dalam setiap keputusan',
      icon: 'Lightbulb'
    },
    {
      title: 'Clean Code',
      description: 'Maintainable, scalable, dan well-documented code',
      icon: 'Code2'
    },
    {
      title: 'Continuous Learning',
      description: 'Selalu update dengan teknologi dan trend terbaru',
      icon: 'BookOpen'
    }
  ];

  const collaborationValues = [
    {
      value: 'Integritas',
      description: 'Komitmen penuh pada deadline dan kualitas yang dijanjikan'
    },
    {
      value: 'Empati',
      description: 'Memahami kebutuhan bisnis dan tantangan yang Anda hadapi'
    },
    {
      value: 'Ekselen',
      description: 'Tidak puas dengan "cukup baik", selalu aim for the best'
    },
    {
      value: 'Adaptabilitas',
      description: 'Fleksibel dengan perubahan requirement dan feedback'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Philosophy Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Filosofi Kolaborasi
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          Lebih dari sekadar developer, saya adalah partner strategis yang berkomitmen untuk kesuksesan proyek Anda. 
          Berikut adalah prinsip-prinsip yang saya pegang dalam setiap kolaborasi.
        </p>
      </div>

      {/* Main Philosophy Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {philosophyPoints.map((point, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border/20 hover:border-border/40 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${point.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={point.icon} size={24} className={point.color} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Working Style */}
      <div className="bg-surface/30 rounded-2xl p-8 border border-border/20">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          Gaya Kerja & Metodologi
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workingStyles.map((style, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={style.icon} size={28} className="text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                {style.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {style.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Values */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
          Nilai-Nilai Kolaborasi
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collaborationValues.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-card/50 rounded-lg border border-border/10">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {item.value}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Overview */}
      <div className="bg-gradient-to-r from-accent/5 to-success/5 rounded-2xl p-8 border border-accent/10">
        <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
          Proses Kolaborasi Standar
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'Discovery', desc: 'Memahami kebutuhan & tujuan' },
            { step: '02', title: 'Planning', desc: 'Strategi & roadmap detail' },
            { step: '03', title: 'Development', desc: 'Iterative building & testing' },
            { step: '04', title: 'Review', desc: 'Quality assurance & feedback' },
            { step: '05', title: 'Launch', desc: 'Deployment & ongoing support' }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-success text-background rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                {phase.step}
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                {phase.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-card rounded-xl p-8 border border-border/20">
        <Icon name="Handshake" size={48} className="text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Siap Memulai Kolaborasi?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Mari diskusikan bagaimana kita bisa bekerja sama untuk mewujudkan visi digital Anda. 
          Setiap proyek adalah kesempatan untuk menciptakan sesuatu yang luar biasa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact-form" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent to-success text-background font-semibold rounded-lg hover:from-accent/90 hover:to-success/90 transition-all duration-300"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Mulai Diskusi
          </a>
          <a 
            href="#availability" 
            className="inline-flex items-center justify-center px-6 py-3 border border-accent/30 text-accent rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Jadwalkan Meeting
          </a>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPhilosophy;