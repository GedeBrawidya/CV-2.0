import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillDetails = ({ skill, onClose }) => {
  if (!skill) return null;

  const getExperienceYears = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const years = (now - start) / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(years * 10) / 10;
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center">
              <Icon name={skill.icon} size={24} className="text-background" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{skill.name}</h2>
              <p className="text-muted-foreground">{skill.category} • {skill.proficiency}% Proficiency</p>
            </div>
          </div>
          <Button variant="ghost" iconName="X" onClick={onClose} />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Proficiency Progress */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Proficiency Level</span>
              <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-accent to-success h-2 rounded-full transition-all duration-1000"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Experience</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Years of Experience</span>
                </div>
                <p className="text-2xl font-bold text-accent">{getExperienceYears(skill.startDate)}</p>
              </div>
              <div className="bg-card border border-border/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="FolderOpen" size={16} className="text-success" />
                  <span className="text-sm font-medium text-foreground">Projects Used</span>
                </div>
                <p className="text-2xl font-bold text-success">{skill.projectsUsed}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">About This Skill</h3>
            <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
          </div>

          {/* Recent Projects */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Recent Projects</h3>
            <div className="space-y-3">
              {skill.recentProjects.map((project, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-4 hover:border-accent/50 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{project.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-accent">{project.role}</span>
                        <span className="text-xs text-muted-foreground">{project.year}</span>
                      </div>
                    </div>
                    <Button variant="ghost" iconName="ExternalLink" size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Learning Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skill.learningResources.map((resource, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-card border border-border/50 rounded-lg hover:border-accent/50 transition-colors duration-300">
                  <Icon name={resource.type === 'course' ? 'BookOpen' : resource.type === 'documentation' ? 'FileText' : 'Video'} size={16} className="text-accent" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{resource.title}</p>
                    <p className="text-xs text-muted-foreground">{resource.platform}</p>
                  </div>
                  <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Related Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Related Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skill.relatedSkills.map((relatedSkill, index) => (
                <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                  {relatedSkill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;