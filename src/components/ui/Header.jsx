import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Journey', path: '/journey', icon: 'MapPin' },
    { name: 'Skills', path: '/skills', icon: 'Code2' },
    { name: 'Portfolio', path: '/project', icon: 'FolderOpen' },
  ];

  const secondaryItems = [
    { name: 'Contact', path: '/contact-hub-communication-center', icon: 'MessageCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group" onClick={closeMenu}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon name="Code2" size={24} color="var(--color-background)" strokeWidth={2.5} />
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 to-success/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-headline font-bold text-foreground group-hover:text-accent transition-colors duration-300">
          Portfolio
        </span>
        <span className="text-xs text-muted-foreground font-mono tracking-wide">
          v2.0-cv
        </span>
      </div>
    </Link>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-header transition-all duration-400 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-brand border-b border-border/50 shadow-elevation-2' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-accent rounded-full border-0 shadow-sm' :'hover:bg-surface/50 hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button 
                variant="outline" 
                iconName="MessageCircle" 
                iconPosition="left"
                className="border-accent/30 text-accent hover:bg-accent/10"
              >
                Let's Connect
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-surface/50 transition-colors duration-300 focus-ring"
            aria-label="Toggle navigation menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground transition-transform duration-300"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 border-t border-border/20">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'bg-accent/10 text-accent border-l-4 border-accent' :'hover:bg-surface/30 hover:text-foreground'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 space-y-3 border-t border-border/20">
              {secondaryItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-surface/30 hover:text-foreground transition-all duration-300"
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              <div className="px-4 pt-2 space-y-3">
                <Button 
                  fullWidth
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-accent/30 text-accent hover:bg-accent/10"
                  onClick={closeMenu}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-[-1]"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;