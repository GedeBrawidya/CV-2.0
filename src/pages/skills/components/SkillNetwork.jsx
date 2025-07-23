import React, { useState, useEffect } from 'react';
import SkillNode from './SkillNode';

const SkillNetwork = ({ skills, selectedSkill, onSkillSelect }) => {
  const [nodePositions, setNodePositions] = useState({});
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    generateNodePositions();
    generateConnections();
  }, [skills]);

  const generateNodePositions = () => {
    const positions = {};
    const centerX = 50;
    const centerY = 50;
    
    skills.forEach((skill, index) => {
      if (skill.category === 'core') {
        // Core skills in center
        positions[skill.id] = { x: centerX, y: centerY };
      } else if (skill.category === 'primary') {
        // Primary skills in inner circle
        const angle = (index * 60) % 360;
        const radius = 25;
        positions[skill.id] = {
          x: centerX + radius * Math.cos(angle * Math.PI / 180),
          y: centerY + radius * Math.sin(angle * Math.PI / 180)
        };
      } else {
        // Secondary skills in outer circle
        const angle = (index * 45) % 360;
        const radius = 40;
        positions[skill.id] = {
          x: centerX + radius * Math.cos(angle * Math.PI / 180),
          y: centerY + radius * Math.sin(angle * Math.PI / 180)
        };
      }
    });
    
    setNodePositions(positions);
  };

  const generateConnections = () => {
    const newConnections = [];
    
    skills.forEach(skill => {
      skill.relatedSkills?.forEach(relatedSkillName => {
        const relatedSkill = skills.find(s => s.name === relatedSkillName);
        if (relatedSkill && nodePositions[skill.id] && nodePositions[relatedSkill.id]) {
          const pos1 = nodePositions[skill.id];
          const pos2 = nodePositions[relatedSkill.id];
          
          const distance = Math.sqrt(
            Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2)
          );
          
          const angle = Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
          
          newConnections.push({
            from: skill.id,
            to: relatedSkill.id,
            distance: distance * 5, // Scale for visual effect
            angle
          });
        }
      });
    });
    
    setConnections(newConnections);
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-background via-surface/50 to-background rounded-xl border border-border overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {connections.map((connection, index) => {
          const pos1 = nodePositions[connection.from];
          const pos2 = nodePositions[connection.to];
          
          if (!pos1 || !pos2) return null;
          
          const isHighlighted = selectedSkill && 
            (selectedSkill.id === connection.from || selectedSkill.id === connection.to);
          
          return (
            <line
              key={index}
              x1={`${pos1.x}%`}
              y1={`${pos1.y}%`}
              x2={`${pos2.x}%`}
              y2={`${pos2.y}%`}
              stroke={isHighlighted ? "var(--color-accent)" : "var(--color-border)"}
              strokeWidth={isHighlighted ? "2" : "1"}
              strokeOpacity={isHighlighted ? "0.8" : "0.3"}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Skill Nodes */}
      {skills.map(skill => (
        <SkillNode
          key={skill.id}
          skill={skill}
          position={nodePositions[skill.id] || { x: 50, y: 50 }}
          isSelected={selectedSkill?.id === skill.id}
          onSelect={onSkillSelect}
          connections={connections.filter(c => c.from === skill.id)}
        />
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm border border-border/50 rounded-lg p-4">
        <h4 className="text-sm font-medium text-foreground mb-2">Skill Categories</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 rounded-full border-2 border-accent bg-surface" />
            <span className="text-xs text-muted-foreground">Core Skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-success bg-surface" />
            <span className="text-xs text-muted-foreground">Primary Skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full border-2 border-warning bg-surface" />
            <span className="text-xs text-muted-foreground">Secondary Skills</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm border border-border/50 rounded-lg p-3">
        <p className="text-xs text-muted-foreground">Click on any skill node to view details</p>
      </div>
    </div>
  );
};

export default SkillNetwork;