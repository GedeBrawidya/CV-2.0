import React from 'react';
import Icon from '../../../components/AppIcon';


const FilterBar = ({ 
  activeFilter, 
  onFilterChange, 
  searchQuery, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  totalProjects,
  filteredCount 
}) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { id: 'web', label: 'Web Apps', icon: 'Globe' },
    { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone' },
    { id: 'api', label: 'APIs & Backend', icon: 'Server' },
    { id: 'tools', label: 'Tools & Utilities', icon: 'Wrench' }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent', icon: 'Clock' },
    { id: 'featured', label: 'Featured First', icon: 'Star' },
    { id: 'alphabetical', label: 'A-Z', icon: 'ArrowUpDown' }
  ];

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="Search" size={20} className="text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search projects by name, technology, or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-surface border border-border/30 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-accent transition-colors duration-300"
          >
            <Icon name="X" size={20} className="text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-accent/20 text-accent border border-accent/30' :'bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-border/30'
            }`}
          >
            <Icon name={filter.icon} size={16} />
            <span className="text-sm font-medium">{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Results Info and Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">
            Showing <span className="text-accent font-medium">{filteredCount}</span> of{' '}
            <span className="text-foreground font-medium">{totalProjects}</span> projects
          </span>
          {searchQuery && (
            <div className="flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full border border-accent/20">
              <Icon name="Search" size={12} className="text-accent" />
              <span className="text-xs text-accent">"{searchQuery}"</span>
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-surface border border-border/30 rounded-lg px-3 py-2 pr-8 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all duration-300"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;