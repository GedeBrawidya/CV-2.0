import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoaded, setImageLoaded] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code2' },
    { id: 'impact', label: 'Impact & Results', icon: 'TrendingUp' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Project Challenge</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Solution Approach</h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
            {project.keyFeatures && (
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      case 'technical':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Architecture & Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-surface/50 rounded-lg border border-border/20">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name="Code2" size={16} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            {project.architecture && (
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Technical Decisions</h4>
                <div className="space-y-3">
                  {project.architecture.map((decision, index) => (
                    <div key={index} className="p-4 bg-surface/30 rounded-lg border border-border/20">
                      <h5 className="font-medium text-foreground mb-2">{decision.title}</h5>
                      <p className="text-sm text-muted-foreground">{decision.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      case 'impact':
        return (
          <div className="space-y-6">
            {project.metrics && (
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Performance Metrics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-surface/30 rounded-lg border border-border/20">
                      <div className="text-2xl font-bold text-accent mb-1">{metric.value}</div>
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {project.businessImpact && (
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Business Impact</h4>
                <div className="space-y-3">
                  {project.businessImpact.map((impact, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-success/5 rounded-lg border border-success/20">
                      <Icon name="TrendingUp" size={16} className="text-success mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-medium text-foreground mb-1">{impact.title}</h5>
                        <p className="text-sm text-muted-foreground">{impact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-card/80 to-surface/50 backdrop-blur-sm border border-border/20 rounded-2xl overflow-hidden mb-12">
      {/* Header */}
      <div className="relative">
        <div className="absolute top-6 left-6 z-10">
          <div className="flex items-center space-x-2 px-3 py-1 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <Icon name="Star" size={14} className="text-accent fill-current" />
            <span className="text-sm font-medium text-accent">Featured Project</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Project Image */}
          <div className="relative h-80 lg:h-96 overflow-hidden rounded-xl bg-surface">
            <Image
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            
            {/* Quick Actions */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-accent/20 transition-colors duration-300"
                >
                  <Icon name="ExternalLink" size={20} className="text-accent" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-accent/20 transition-colors duration-300"
                >
                  <Icon name="Github" size={20} className="text-foreground" />
                </a>
              )}
            </div>
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="px-3 py-1 bg-surface text-muted-foreground text-sm font-medium rounded-full border border-border/30">
                    +{project.technologies.length - 6} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <Button
                  variant="default"
                  size="lg"
                  iconName="ExternalLink"
                  iconPosition="right"
                  className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-background font-semibold"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  View Live Project
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                  className="border-border/30 hover:border-accent/30 hover:bg-accent/10"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  View Source Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content Tabs */}
      <div className="border-t border-border/20">
        {/* Tab Navigation */}
        <div className="flex border-b border-border/20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-accent border-b-2 border-accent bg-accent/5' :'text-muted-foreground hover:text-foreground hover:bg-surface/30'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;