import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillFilter = ({ categories, activeCategory, onCategoryChange, viewMode, onViewModeChange }) => {
  const categoryIcons = {
    'all': 'Grid3X3',
    'frontend': 'Monitor',
    'backend': 'Server',
    'database': 'Database',
    'tools': 'Wrench',
    'soft-skills': 'Users'
  };

  const viewModeIcons = {
    'network': 'Network',
    'grid': 'Grid3X3',
    'timeline': 'Clock'
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Category Filters */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                iconName={categoryIcons[category.id]}
                iconPosition="left"
                onClick={() => onCategoryChange(category.id)}
                className={activeCategory === category.id ? "bg-accent text-background" : ""}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </div>
        </div>

        {/* View Mode Toggle */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">View Mode</h3>
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            {Object.entries(viewModeIcons).map(([mode, icon]) => (
              <Button
                key={mode}
                variant={viewMode === mode ? "default" : "ghost"}
                size="sm"
                iconName={icon}
                onClick={() => onViewModeChange(mode)}
                className={`${viewMode === mode ? "bg-accent text-background shadow-sm" : "hover:bg-surface"} transition-all duration-200`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {activeCategory !== 'all' && (
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Active filter:</span>
            <div className="flex items-center space-x-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
              <Icon name={categoryIcons[activeCategory]} size={14} />
              <span>{categories.find(cat => cat.id === activeCategory)?.name}</span>
              <Button
                variant="ghost"
                size="xs"
                iconName="X"
                onClick={() => onCategoryChange('all')}
                className="ml-1 h-4 w-4 p-0 hover:bg-accent/20"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillFilter;