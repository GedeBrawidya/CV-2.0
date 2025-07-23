import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillTimeline = ({ skills, onSkillSelect }) => {
  // Sort skills by start date
  const sortedSkills = [...skills].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  const getYearFromDate = (dateString) => {
    return new Date(dateString).getFullYear();
  };

  const getExperienceYears = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    return Math.floor((now - start) / (1000 * 60 * 60 * 24 * 365 * 0.1)) / 10;
  };

  // Group skills by year
  const skillsByYear = sortedSkills.reduce((acc, skill) => {
    const year = getYearFromDate(skill.startDate);
    if (!acc[year]) acc[year] = [];
    acc[year].push(skill);
    return acc;
  }, {});

  const years = Object.keys(skillsByYear).sort((a, b) => b - a);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-success to-warning" />

      <div className="space-y-8">
        {years.map((year, yearIndex) => (
          <div key={year} className="relative">
            {/* Year Marker */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center border-4 border-background shadow-lg relative z-10">
                <span className="text-background font-bold text-lg">{year}</span>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-foreground">Skills Acquired in {year}</h3>
                <p className="text-muted-foreground">{skillsByYear[year].length} new skills added</p>
              </div>
            </div>

            {/* Skills for this year */}
            <div className="ml-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsByYear[year].map((skill, skillIndex) => (
                <div
                  key={skill.id}
                  onClick={() => onSkillSelect(skill)}
                  className="group cursor-pointer bg-surface border border-border rounded-lg p-4 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={skill.icon} size={20} className="text-background" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted-foreground capitalize">
                        {skill.category.replace('-', ' ')}
                      </p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted-foreground">Proficiency</span>
                      <span className="text-xs font-medium text-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-accent to-success h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between text-xs">
                    <div className="text-center">
                      <div className="font-bold text-accent">{getExperienceYears(skill.startDate)}y</div>
                      <div className="text-muted-foreground">Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-success">{skill.projectsUsed}</div>
                      <div className="text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <Icon name="ChevronRight" size={16} className="text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connection Line to Next Year */}
            {yearIndex < years.length - 1 && (
              <div className="absolute left-8 -bottom-4 w-px h-8 bg-gradient-to-b from-success to-accent opacity-50" />
            )}
          </div>
        ))}
      </div>

      {/* Current Learning Section */}
      <div className="relative mt-12">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-warning to-error flex items-center justify-center border-4 border-background shadow-lg relative z-10 animate-pulse">
            <Icon name="BookOpen" size={24} className="text-background" />
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold text-foreground">Currently Learning</h3>
            <p className="text-muted-foreground">Skills in progress</p>
          </div>
        </div>

        <div className="ml-24">
          <div className="bg-surface border border-border rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" size={20} className="text-warning" />
                  <div>
                    <h4 className="font-semibold text-foreground">Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">Expected completion: Q2 2024</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-warning to-error h-2 rounded-full" style={{ width: '35%' }} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Cloud" size={20} className="text-accent" />
                  <div>
                    <h4 className="font-semibold text-foreground">AWS Cloud Architecture</h4>
                    <p className="text-sm text-muted-foreground">Expected completion: Q3 2024</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-accent to-success h-2 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTimeline;