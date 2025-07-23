import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillStats = ({ skills }) => {
  const totalSkills = skills.length;
  const expertSkills = skills.filter(skill => skill.proficiency >= 90).length;
  const advancedSkills = skills.filter(skill => skill.proficiency >= 70 && skill.proficiency < 90).length;
  const averageProficiency = Math.round(skills.reduce((sum, skill) => sum + skill.proficiency, 0) / totalSkills);
  const totalProjects = skills.reduce((sum, skill) => sum + skill.projectsUsed, 0);
  
  const categoryStats = skills.reduce((acc, skill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1;
    return acc;
  }, {});

  const topCategories = Object.entries(categoryStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  const stats = [
    {
      icon: 'Code2',
      label: 'Total Skills',
      value: totalSkills,
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Award',
      label: 'Expert Level',
      value: expertSkills,
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'TrendingUp',
      label: 'Advanced Level',
      value: advancedSkills,
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Target',
      label: 'Avg Proficiency',
      value: `${averageProficiency}%`,
      color: 'text-error',
      bgColor: 'bg-error/10'
    },
    {
      icon: 'FolderOpen',
      label: 'Total Projects',
      value: '5+',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: 'Calendar',
      label: 'Years Experience',
      value: '1+',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    }
  ];

  return (
    <div className="bg-surface border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Skills Overview</h2>
          <p className="text-muted-foreground">Comprehensive technical skill analysis</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
          <Icon name="BarChart3" size={16} />
          <span className="text-sm font-medium">Live Stats</span>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300`}>
            <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 border border-current/20`}>
              <Icon name={stat.icon} size={24} className={stat.color} />
            </div>
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Top Skill Categories</h3>
          <div className="space-y-3">
            {topCategories.map(([category, count], index) => {
              const percentage = Math.round((count / totalSkills) * 100);
              const colors = ['text-accent bg-accent/10', 'text-success bg-success/10', 'text-warning bg-warning/10'];
              
              return (
                <div key={category} className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg ${colors[index]} flex items-center justify-center`}>
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-foreground capitalize">{category.replace('-', ' ')}</span>
                      <span className="text-sm text-muted-foreground">{count} skills</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${colors[index].split(' ')[1].replace('/10', '/50')}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{percentage}%</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proficiency Distribution */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Proficiency Distribution</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-3">
                <Icon name="Award" size={20} className="text-success" />
                <span className="font-medium text-foreground">Expert (90%+)</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-success">{expertSkills}</div>
                <div className="text-xs text-muted-foreground">skills</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-center space-x-3">
                <Icon name="TrendingUp" size={20} className="text-accent" />
                <span className="font-medium text-foreground">Advanced (70-89%)</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-accent">{advancedSkills}</div>
                <div className="text-xs text-muted-foreground">skills</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg border border-warning/20">
              <div className="flex items-center space-x-3">
                <Icon name="BookOpen" size={20} className="text-warning" />
                <span className="font-medium text-foreground">Intermediate (&lt;70%)</span>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-warning">{totalSkills - expertSkills - advancedSkills}</div>
                <div className="text-xs text-muted-foreground">skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress Indicator */}
      <div className="mt-8 p-4 bg-gradient-to-r from-accent/10 to-success/10 rounded-lg border border-accent/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Zap" size={24} className="text-accent" />
            <div>
              <h4 className="font-semibold text-foreground">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">Always expanding technical expertise</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-accent font-medium">2 skills in progress</div>
            <div className="text-xs text-muted-foreground">Updated {new Date().toLocaleDateString('id-ID')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillStats;