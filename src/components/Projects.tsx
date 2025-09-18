import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import petaLayanan from '@/assets/peta_layanan.jpeg';
import menaraMcp1 from '@/assets/menara_mcp_1.jpeg';
import menaraMcp2 from '@/assets/menara_mcp_2.jpeg';
import menaraMcp3 from '@/assets/menara_mcp_3.jpeg';
import { 
  FaBroadcastTower, 
  FaCity, 
  FaWifi, 
  FaDatabase, 
  FaNetworkWired,
  FaSignal,
  FaBuilding
} from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      icon: <FaBroadcastTower />,
      title: "Jaringan 5G Operator",
      description: "Pengembangan infrastruktur 5G untuk mendukung konektivitas super cepat di wilayah urban dan suburban.",
      image: null,
      status: "In Progress",
      category: "5G Network"
    },
    {
      icon: <FaCity />,
      title: "IoT Surabaya City",
      description: "Implementasi sistem Internet of Things untuk smart city Surabaya dengan sensor dan monitoring terintegrasi.",
      image: null,
      status: "Planning",
      category: "Smart City"
    },
    {
      icon: <FaWifi />,
      title: "Broadband Wireless Access (BWA)",
      description: "Jaringan akses nirkabel broadband untuk coverage area yang lebih luas dengan teknologi terdepan.",
      image: null,
      status: "Development",
      category: "Wireless"
    },
    {
      icon: <FaDatabase />,
      title: "Data Center",
      description: "Pembangunan pusat data modern dengan standar Tier III untuk mendukung layanan cloud dan hosting.",
      image: null,
      status: "Planning",
      category: "Infrastructure"
    },
    {
      icon: <FaNetworkWired />,
      title: "Metro Fiber Bersama",
      description: "Jaringan fiber metropolitan yang menghubungkan berbagai titik strategis di kota-kota besar.",
      image: null,
      status: "Development",
      category: "Fiber Network"
    },
    {
      icon: <FaBroadcastTower />,
      title: "Menara MCP",
      description: "Micro Cell Pole untuk meningkatkan coverage dan kapasitas jaringan seluler di area padat penduduk.",
      image: menaraMcp1,
      status: "Active",
      category: "Infrastructure"
    }
  ];

  const networkTypes = [
    "FTTx (Fiber to the X)",
    "FTTB (Fiber to the Building)",
    "WTTx (Wireless to the X)",
    "WTTB (Wireless to the Building)"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-600 text-white";
      case "In Progress":
        return "bg-blue-600 text-white";
      case "Development":
        return "bg-yellow-600 text-white";
      case "Planning":
        return "bg-purple-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Proyek <span className="text-primary">Mendatang</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Inovasi infrastruktur telekomunikasi yang akan mengubah lanskap konektivitas digital Indonesia
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white">{project.icon}</span>
                    </div>
                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs text-primary border-primary/50">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* MCP Tower Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Galeri <span className="text-primary">Menara MCP</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[menaraMcp1, menaraMcp2, menaraMcp3].map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-xl animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <img 
                  src={image} 
                  alt={`Menara MCP ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Service Coverage Map */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Peta <span className="text-primary">Layanan</span>
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Coverage area untuk mendukung proyek 5G Operator dan Broadband Wireless Access (BWA)
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-card border-tech-border animate-fade-in">
              <img 
                src={petaLayanan} 
                alt="Peta Layanan 5G dan BWA"
                className="w-full h-auto object-contain"
              />
            </Card>
          </div>
        </div>

        {/* Network Types */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Teknologi <span className="text-primary">Jaringan</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {networkTypes.map((type, index) => (
              <Card key={index} className="p-6 bg-gradient-to-r from-card to-secondary/20 border-tech-border hover:border-primary/50 transition-all duration-300 text-center group animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="mx-auto w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <FaSignal className="text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm">{type}</h4>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;