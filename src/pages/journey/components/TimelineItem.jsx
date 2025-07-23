import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const TimelineItem = ({ item, isLeft, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education': return 'GraduationCap';
      case 'experience': return 'Briefcase';
      case 'achievement': return 'Award';
      default: return 'Calendar';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education': return 'text-accent';
      case 'experience': return 'text-success';
      case 'achievement': return 'text-warning';
      default: return 'text-foreground';
    }
  };

  return (
    <div className={`flex items-center mb-12 ${isLeft ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}
         style={{ animationDelay: `${index * 0.1}s` }}>
      
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="card-elevated p-6 hover-lift transition-all duration-300 group">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg bg-surface/50 ${getTypeColor(item.type)}`}>
                <Icon name={getTypeIcon(item.type)} size={20} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.organization}</p>
              </div>
            </div>
            <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
              {item.period}
            </span>
          </div>

          {/* Location & Status */}
          <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="MapPin" size={14} />
              <span>{item.location}</span>
            </div>
            {item.status && (
              <div className="flex items-center space-x-1">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span>{item.status}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Skills/Technologies */}
          {item.skills && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.skills.map((skill, idx) => (
                <span key={idx} className="text-xs bg-surface/50 text-foreground px-2 py-1 rounded-full border border-border/20">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Expand Button */}
          <Button
            variant="ghost"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-accent hover:bg-accent/10 p-0 h-auto"
          >
            {isExpanded ? 'Tutup Detail' : 'Lihat Detail'}
          </Button>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-border/20 animate-slide-up">
              {/* Achievements */}
              {item.achievements && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Trophy" size={16} className="mr-2 text-warning" />
                    Pencapaian
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Projects */}
              {item.projects && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="FolderOpen" size={16} className="mr-2 text-accent" />
                    Proyek Utama
                  </h4>
                  <div className="space-y-3">
                    {item.projects.map((project, idx) => (
                      <div key={idx} className="bg-surface/30 p-3 rounded-lg">
                        <h5 className="text-sm font-medium text-foreground mb-1">{project.name}</h5>
                        <p className="text-xs text-muted-foreground mb-2">{project.description}</p>
                        {project.impact && (
                          <p className="text-xs text-success">{project.impact}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              
              {/* Testimonial */}
              {item.testimonial && (
                <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                  <blockquote className="text-sm text-muted-foreground italic mb-2">
                    "{item.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-2">
                    <Image 
                      src={item.testimonial.avatar} 
                      alt={item.testimonial.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <p className="text-xs font-medium text-foreground">{item.testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{item.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="hidden md:flex items-center justify-center w-2/12">
        <div className="relative">
          <div className={`w-4 h-4 rounded-full border-4 border-background ${getTypeColor(item.type)} bg-current`}></div>
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-current opacity-20 animate-ping"></div>
        </div>
      </div>

      {/* Empty Space */}
      <div className="hidden md:block w-5/12"></div>
    </div>
  );
};

export default TimelineItem;