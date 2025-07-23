import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="bg-surface border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent/10">
          <Icon name="X" size={20} />
        </button>
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies && project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">{tech}</span>
            ))}
          </div>
          {project.metrics && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="bg-card border border-border/50 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-accent">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
          {project.challenge && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">Challenge</h3>
              <p className="text-muted-foreground mb-2">{project.challenge}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">Solution</h3>
              <p className="text-muted-foreground mb-2">{project.solution}</p>
            </div>
          )}
          {project.keyFeatures && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">Key Features</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}
          {project.architecture && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">Architecture</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.architecture.map((a, i) => <li key={i}><b>{a.title}:</b> {a.description}</li>)}
              </ul>
            </div>
          )}
          {project.businessImpact && (
            <div>
              <h3 className="font-semibold text-foreground mb-1">Business Impact</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.businessImpact.map((b, i) => <li key={i}><b>{b.title}:</b> {b.description}</li>)}
              </ul>
            </div>
          )}
          <div className="flex gap-3 mt-6">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" iconName="ExternalLink" iconPosition="right">Live Demo</Button>
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" iconName="Github" iconPosition="left">View Code</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal; 