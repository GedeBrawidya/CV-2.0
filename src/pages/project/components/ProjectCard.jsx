import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, index, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className={`group relative bg-card border border-border/20 rounded-xl overflow-hidden transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 ${
        index % 2 === 0 ? 'animate-slide-up' : 'animate-fade-in'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ?'bg-success/20 text-success border border-success/30' 
              : project.status === 'In Progress' ?'bg-warning/20 text-warning border border-warning/30' :'bg-muted/20 text-muted-foreground border border-muted/30'
          }`}>
            {project.status}
          </span>
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-accent/20 transition-colors duration-300"
            >
              <Icon name="ExternalLink" size={16} className="text-accent" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-accent/20 transition-colors duration-300"
            >
              <Icon name="Github" size={16} className="text-foreground" />
            </a>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-1 px-2 py-1 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
              <Icon name="Star" size={12} className="text-accent fill-current" />
              <span className="text-xs font-medium text-accent">Featured</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-surface/50 text-xs font-medium text-foreground rounded-md border border-border/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-surface/50 text-xs font-medium text-muted-foreground rounded-md border border-border/30">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-surface/30 rounded-lg border border-border/20">
            {project.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="text-center">
                <div className="text-lg font-bold text-accent">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Client Testimonial */}
        {project.testimonial && (
          <div className="mb-4 p-3 bg-accent/5 border-l-4 border-accent/30 rounded-r-lg">
            <p className="text-sm text-foreground italic mb-2">"{project.testimonial.text}"</p>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center">
                <Icon name="User" size={12} className="text-accent" />
              </div>
              <span className="text-xs text-muted-foreground">
                {project.testimonial.author} - {project.testimonial.role}
              </span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
            onClick={onViewDetails}
          >
            View Details
          </Button>
          {project.liveUrl && (
            <Button
              variant="default"
              size="sm"
              iconName="ExternalLink"
              iconPosition="right"
              className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-background"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Live Demo
            </Button>
          )}
        </div>
      </div>

      {/* Hover Overlay Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-success/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
    </div>
  );
};

export default ProjectCard;