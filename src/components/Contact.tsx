import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "setara.infra@gmail.com",
      link: "mailto:setara.infra@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Nomor Kontak",
      value: "08567111686",
      link: "tel:+6285671111686"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Alamat",
      value: "Jl. Karang Wismo I/15, Kel. Airlangga, Kec. Gubeng, Kota Surabaya, Prop. Jawa Timur",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Siap melayani kebutuhan infrastruktur telekomunikasi Anda dengan solusi terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-tech-border animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Kirim <span className="text-primary">Pesan</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Nama Lengkap</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 bg-secondary border-tech-border focus:border-primary"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 bg-secondary border-tech-border focus:border-primary"
                  placeholder="Masukkan alamat email Anda"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Pesan</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="mt-2 bg-secondary border-tech-border focus:border-primary resize-none"
                  placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                <FaPaperPlane className="mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up [animation-delay:200ms]">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informasi <span className="text-primary">Kontak</span>
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 bg-card border-tech-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                        <span className="text-white">{info.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;