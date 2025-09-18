import React from 'react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tech-dark/90 via-tech-dark/70 to-tech-dark/90"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-glow-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Membangun Infrastruktur{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Telekomunikasi Modern
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            ENTRA & PT Setara menghadirkan konektivitas berkualitas dengan teknologi terkini 
            untuk urban & rural area.
          </p>
          
          <Button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 animate-glow-pulse"
          >
            Pelajari Lebih Lanjut
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;