import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FaWifi, 
  FaHome, 
  FaCogs, 
  FaCertificate,
  FaBuilding,
  FaNetworkWired,
  FaSignal,
  FaDatabase,
  FaEye,
  FaBroadcastTower
} from 'react-icons/fa';

const Services = () => {
  const mainServices = [
    {
      icon: <FaNetworkWired />,
      title: "Jaringan Fiber Terintegrasi",
      description: "Solusi fiber optic end-to-end dengan teknologi terdepan untuk konektivitas berkecepatan tinggi dan stabil."
    },
    {
      icon: <FaHome />,
      title: "Instalasi ke Rumah (IKR)",
      description: "Layanan pemasangan jaringan fiber hingga ke rumah dengan dukungan teknis profesional 24/7."
    },
    {
      icon: <FaCogs />,
      title: "Layanan Terkelola (Managed Service)",
      description: "Pengelolaan infrastruktur IT secara menyeluruh dengan monitoring dan maintenance berkala."
    },
    {
      icon: <FaCertificate />,
      title: "Lisensi Resmi Pemerintah",
      description: "Beroperasi dengan lisensi resmi dari Kominfo & KAI untuk menjamin legalitas dan kualitas layanan."
    }
  ];

  const businessCoverage = [
    "FTTH (Fiber to the Home)",
    "FTTX (Fiber to the X)",
    "FTTB (Fiber to the Building)",
    "Backhaul & Node Location"
  ];

  const developmentPhases = [
    { icon: <FaSignal />, name: "WTTX" },
    { icon: <FaBroadcastTower />, name: "Micro Cell Pole" },
    { icon: <FaWifi />, name: "IoT" },
    { icon: <FaDatabase />, name: "Big Data" },
    { icon: <FaEye />, name: "NOC" },
    { icon: <FaBroadcastTower />, name: "5G" },
    { icon: <FaBuilding />, name: "Data Center" }
  ];

  return (
    <section id="services" className="py-20 bg-tech-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Solusi telekomunikasi komprehensif untuk memenuhi kebutuhan infrastruktur digital modern
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="p-6 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <span className="text-xl text-white">{service.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Business Coverage */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Cakupan <span className="text-primary">Bisnis</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {businessCoverage.map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <Badge variant="secondary" className="px-4 py-2 text-sm bg-secondary/20 text-foreground border border-tech-border hover:border-primary/50 transition-colors">
                  {item}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Development Phases */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Tahap <span className="text-primary">Pengembangan</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {developmentPhases.map((phase, index) => (
              <Card key={index} className="p-4 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group text-center animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-3 group-hover:animate-glow-pulse">
                  <span className="text-white">{phase.icon}</span>
                </div>
                <p className="text-sm font-medium text-foreground">{phase.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;