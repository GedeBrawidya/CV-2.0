import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillNode = ({ skill, isSelected, onSelect, position, connections = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getProficiencyColor = (level) => {
    if (level >= 90) return 'from-success to-accent';
    if (level >= 70) return 'from-accent to-warning';
    if (level >= 50) return 'from-warning to-error';
    return 'from-error to-muted';
  };

  const getNodeSize = (category) => {
    switch (category) {
      case 'core': return 'w-20 h-20';
      case 'primary': return 'w-16 h-16';
      case 'secondary': return 'w-12 h-12';
      default: return 'w-10 h-10';
    }
  };

  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
        isSelected ? 'z-20' : 'z-10'
      }`}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      onClick={() => onSelect(skill)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connection Lines */}
      {connections.map((connection, index) => (
        <div
          key={index}
          className="absolute w-px bg-gradient-to-r from-accent/30 to-transparent"
          style={{
            height: `${connection.distance}px`,
            transform: `rotate(${connection.angle}deg)`,
            transformOrigin: 'top center',
            top: '50%',
            left: '50%'
          }}
        />
      ))}

      {/* Skill Node */}
      <div
        className={`${getNodeSize(skill.category)} rounded-full border-2 transition-all duration-300 ${
          isSelected 
            ? 'border-accent shadow-lg shadow-accent/20 scale-110' 
            : 'border-border hover:border-accent/50'
        } ${
          isHovered ? 'scale-105' : ''
        }`}
        style={{
          background: `conic-gradient(from 0deg, var(--color-accent) ${skill.proficiency * 3.6}deg, var(--color-surface) ${skill.proficiency * 3.6}deg)`
        }}
      >
        <div className="w-full h-full rounded-full bg-surface border-2 border-background flex items-center justify-center">
          <Icon 
            name={skill.icon} 
            size={skill.category === 'core' ? 24 : skill.category === 'primary' ? 20 : 16} 
            className="text-foreground"
          />
        </div>
      </div>

      {/* Skill Label */}
      <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
        isHovered || isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}>
        <div className="bg-surface/90 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-1 whitespace-nowrap">
          <p className="text-sm font-medium text-foreground">{skill.name}</p>
          <p className="text-xs text-muted-foreground">{skill.proficiency}%</p>
        </div>
      </div>

      {/* Proficiency Ring */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        isSelected ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-full h-full rounded-full border-2 border-accent animate-pulse" />
      </div>
    </div>
  );
};

export default SkillNode;