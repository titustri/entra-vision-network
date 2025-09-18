import React from 'react';
import { Card } from '@/components/ui/card';
import { FaNetworkWired, FaBroadcastTower, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Tentang <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            PT Setara sebagai perintis infrastruktur urban dan ENTRA sebagai layanan internet backbone tertutup, 
            berkomitmen menghadirkan solusi telekomunikasi terdepan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Fiber Optic */}
          <Card className="p-8 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group animate-slide-up">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <FaNetworkWired className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Fiber Optic Network</h3>
              <p className="text-muted-foreground">
                Teknologi fiber optic terdepan untuk konektivitas berkecepatan tinggi dan stabil 
                di seluruh wilayah urban dan rural.
              </p>
            </div>
          </Card>

          {/* Cellular Tower */}
          <Card className="p-8 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group animate-slide-up [animation-delay:200ms]">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <FaBroadcastTower className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Menara Seluler</h3>
              <p className="text-muted-foreground">
                Infrastruktur menara seluler modern untuk mendukung jaringan komunikasi 
                yang handal dan coverage area yang luas.
              </p>
            </div>
          </Card>

          {/* Data Center */}
          <Card className="p-8 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group animate-slide-up [animation-delay:400ms]">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                <FaServer className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Data Center</h3>
              <p className="text-muted-foreground">
                Pusat data canggih dengan teknologi terkini untuk menjamin keamanan 
                dan performa optimal sistem telekomunikasi.
              </p>
            </div>
          </Card>
        </div>

        {/* Company Description */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-card to-secondary/20 p-8 md:p-12 rounded-2xl border border-tech-border">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Visi Teknologi Masa Depan
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dengan pengalaman bertahun-tahun dalam industri telekomunikasi, kami menghadirkan 
              inovasi infrastruktur yang mendukung transformasi digital Indonesia. 
              Dari urban hingga rural area, kami berkomitmen menciptakan konektivitas yang merata 
              dan berkualitas tinggi untuk semua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;