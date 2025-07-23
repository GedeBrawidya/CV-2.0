import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillGrid = ({ skills, onSkillSelect }) => {
  const getProficiencyLevel = (proficiency) => {
    if (proficiency >= 90) return { label: 'Expert', color: 'text-success' };
    if (proficiency >= 70) return { label: 'Advanced', color: 'text-accent' };
    if (proficiency >= 50) return { label: 'Intermediate', color: 'text-warning' };
    return { label: 'Beginner', color: 'text-error' };
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'frontend': return 'border-accent/30 bg-accent/5';
      case 'backend': return 'border-success/30 bg-success/5';
      case 'database': return 'border-warning/30 bg-warning/5';
      case 'tools': return 'border-error/30 bg-error/5';
      case 'soft-skills': return 'border-purple-500/30 bg-purple-500/5';
      default: return 'border-border/30 bg-surface/5';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {skills.map((skill) => {
        const proficiencyLevel = getProficiencyLevel(skill.proficiency);
        
        return (
          <div
            key={skill.id}
            onClick={() => onSkillSelect(skill)}
            className={`group cursor-pointer bg-surface border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 ${getCategoryColor(skill.category)}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name={skill.icon} size={24} className="text-background" />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">{skill.proficiency}%</div>
                <div className={`text-xs font-medium ${proficiencyLevel.color}`}>
                  {proficiencyLevel.label}
                </div>
              </div>
            </div>

            {/* Skill Name */}
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
              {skill.name}
            </h3>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-accent to-success h-2 rounded-full transition-all duration-1000 group-hover:shadow-sm group-hover:shadow-accent/50"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>

            {/* Experience & Projects */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-accent">
                  {Math.floor((new Date() - new Date(skill.startDate)) / (1000 * 60 * 60 * 24 * 365 * 0.1)) / 10}y
                </div>
                <div className="text-xs text-muted-foreground">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-success">{skill.projectsUsed}</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>

            {/* Category Badge */}
            <div className="flex items-center justify-between">
              <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs capitalize">
                {skill.category.replace('-', ' ')}
              </span>
              <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-success/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        );
      })}
    </div>
  );
};

export default SkillGrid;