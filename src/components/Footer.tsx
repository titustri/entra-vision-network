import React from 'react';
import logo from '@/assets/logo.jpeg';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaFacebook />, href: "#", label: "Facebook" }
  ];

  const quickLinks = [
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Proyek", href: "#projects" },
    { name: "Visi & Misi", href: "#vision" },
    { name: "Kontak", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-tech-darker border-t border-tech-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="PT Setara / ENTRA Logo" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Membangun infrastruktur telekomunikasi modern untuk masa depan digital Indonesia 
              yang lebih baik dan terhubung.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Navigasi <span className="text-primary">Cepat</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Layanan <span className="text-primary">Utama</span>
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Jaringan Fiber Optic</li>
              <li>Instalasi ke Rumah (IKR)</li>
              <li>Managed Service</li>
              <li>Infrastruktur 5G</li>
              <li>Data Center</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Hubungi <span className="text-primary">Kami</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-primary text-sm" />
                </div>
                <a 
                  href="mailto:setara.infra@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  setara.infra@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-primary text-sm" />
                </div>
                <a 
                  href="tel:+6285671111686"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  08567111686
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-tech-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} PT Setara & ENTRA. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;