import React from 'react';
import Button from '../../../components/ui/Button';


const TimelineFilter = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'Semua', icon: 'Calendar' },
    { id: 'education', label: 'Pendidikan', icon: 'GraduationCap' },
    { id: 'experience', label: 'Pengalaman', icon: 'Briefcase' },
    { id: 'achievement', label: 'Pencapaian', icon: 'Award' }
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? 'default' : 'outline'}
          iconName={filter.icon}
          iconPosition="left"
          onClick={() => onFilterChange(filter.id)}
          className={`transition-all duration-300 ${
            activeFilter === filter.id 
              ? 'bg-accent text-background shadow-lg scale-105' 
              : 'border-border/30 hover:border-accent/50 hover:bg-accent/10'
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default TimelineFilter;