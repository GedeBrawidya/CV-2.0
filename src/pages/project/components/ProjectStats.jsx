import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: projects.length,
      color: 'text-accent'
    },
    {
      icon: 'Globe',
      label: 'Live Projects',
      value: projects.filter(p => p.status === 'Live').length,
      color: 'text-success'
    },
    {
      icon: 'Code2',
      label: 'Technologies Used',
      value: [...new Set(projects.flatMap(p => p.technologies))].length,
      color: 'text-warning'
    },
    {
      icon: 'Star',
      label: 'Featured Projects',
      value: projects.filter(p => p.featured).length,
      color: 'text-accent'
    }
  ];

  const topTechnologies = [...new Set(projects.flatMap(p => p.technologies))]
    .map(tech => ({
      name: tech,
      count: projects.filter(p => p.technologies.includes(tech)).length
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-12">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-surface/50 group-hover:bg-accent/10 transition-colors duration-300`}>
                <Icon name={stat.icon} size={24} className={`${stat.color} group-hover:text-accent transition-colors duration-300`} />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Technologies */}
      <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="TrendingUp" size={20} className="text-accent" />
          <span>Most Used Technologies</span>
        </h3>
        <div className="space-y-3">
          {topTechnologies.map((tech, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={14} className="text-accent" />
                </div>
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-2 bg-surface rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-success rounded-full transition-all duration-500"
                    style={{ width: `${(tech.count / projects.length) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-8 text-right">{tech.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;