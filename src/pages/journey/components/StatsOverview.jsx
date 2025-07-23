import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const stats = [
    {
      icon: 'GraduationCap',
      value: '2+',
      label: 'Tahun Pendidikan',
      description: 'Sarjana Teknik Informatika',
      color: 'text-accent'
    },
    {
      icon: 'Briefcase',
      value: '2+',
      label: 'pengalaman asisten dan organisasi',
      description: 'matakuliah pemrograman & AMCC',
      color: 'text-success'
    },
    {
      icon: 'Award',
      value: '1+',
      label: 'Sertifikat',
      description: 'karya ilmiah',
      color: 'text-warning'
    },
    {
      icon: 'Users',
      value: '5+',
      label: 'Proyek Selesai',
      description: 'Tim & Individual',
      color: 'text-[var(--color-cta)]'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="bg-card rounded-2xl p-6 hover-lift transition-all duration-300 border border-border/20 hover:border-accent/30">
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-surface/50 mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
              <Icon name={stat.icon} size={24} />
            </div>
            <div className="space-y-2">
              <h3 className={`text-3xl font-bold ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                {stat.value}
              </h3>
              <p className="text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;