import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-tech-border">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Company Name */}
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-primary">SETARA INFRA</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Proyek
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Visi & Misi
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Kontak
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-tech-border">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                Tentang Kami
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                Proyek
              </button>
              <button
                onClick={() => scrollToSection('vision')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                Visi & Misi
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;