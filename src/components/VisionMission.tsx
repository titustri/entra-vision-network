import React from 'react';
import { Card } from '@/components/ui/card';
import { FaEye, FaBullseye, FaRocket, FaHandshake } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-tech-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Visi & <span className="text-primary">Misi</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Komitmen kami untuk membangun masa depan digital Indonesia yang lebih baik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Visi */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/10 border-tech-border hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-8 animate-glow-pulse">
                <FaEye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <span className="text-primary">Visi</span> Kami
              </h3>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                  "Pelayanan Excellent Urban City"
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Menjadi penyedia infrastruktur telekomunikasi terdepan yang memberikan layanan 
                  berkualitas tinggi untuk menciptakan kota-kota cerdas dan terhubung di Indonesia.
                </p>
              </div>
            </div>
          </Card>

          {/* Misi */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary/10 border-tech-border hover:border-primary/50 transition-all duration-300 animate-slide-up [animation-delay:200ms]">
            <div className="text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-8 animate-glow-pulse">
                <FaBullseye className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                <span className="text-primary">Misi</span> Kami
              </h3>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                  "Membuka peluang lebih banyak bagi pelaku informasi, komunikasi, dan teknologi"
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Menghadirkan infrastruktur telekomunikasi yang handal dan inovatif untuk 
                  mendukung transformasi digital serta memberdayakan seluruh stakeholder 
                  dalam ekosistem ICT.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Nilai-Nilai <span className="text-primary">Perusahaan</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group animate-fade-in">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                  <FaRocket className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Inovasi</h4>
                  <p className="text-muted-foreground">
                    Terus mengembangkan teknologi terdepan untuk memberikan solusi 
                    terbaik dalam infrastruktur telekomunikasi.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group animate-fade-in [animation-delay:200ms]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                  <FaHandshake className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Kemitraan</h4>
                  <p className="text-muted-foreground">
                    Membangun hubungan strategis dengan berbagai pihak untuk 
                    menciptakan ekosistem ICT yang berkelanjutan.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;