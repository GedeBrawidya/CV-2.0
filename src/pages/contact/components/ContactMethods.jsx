import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      name: 'Email',
      value: 'hello@portfoliohub.dev',
      description: 'Untuk diskusi detail proyek',
      responseTime: '24 jam',
      icon: 'Mail',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      action: 'mailto:hello@portfoliohub.dev?subject=Diskusi Proyek Kolaborasi',
      preferred: true
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      value: '+62 812 3456 7890',
      description: 'Chat langsung & konsultasi cepat',
      responseTime: '2 jam',
      icon: 'MessageCircle',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      action: 'https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20berdiskusi%20tentang%20proyek%20kolaborasi',
      preferred: false
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      value: 'linkedin.com/in/portfoliohub',
      description: 'Networking & peluang bisnis',
      responseTime: '48 jam',
      icon: 'Linkedin',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/20',
      action: 'https://linkedin.com/in/portfoliohub',
      preferred: false
    },
    {
      id: 'github',
      name: 'GitHub',
      value: 'github.com/portfoliohub',
      description: 'Kolaborasi open source',
      responseTime: '72 jam',
      icon: 'Github',
      color: 'text-foreground',
      bgColor: 'bg-foreground/10',
      borderColor: 'border-foreground/20',
      action: 'https://github.com/portfoliohub',
      preferred: false
    },
    {
      id: 'telegram',
      name: 'Telegram',
      value: '@portfoliohub_dev',
      description: 'Update proyek & komunikasi tim',
      responseTime: '6 jam',
      icon: 'MessageSquare',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      action: 'https://t.me/portfoliohub_dev',
      preferred: false
    },
    {
      id: 'calendly',
      name: 'Jadwalkan Meeting',
      value: 'calendly.com/portfoliohub',
      description: 'Video call & konsultasi mendalam',
      responseTime: 'Sesuai jadwal',
      icon: 'Calendar',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
      action: 'https://calendly.com/portfoliohub/30min',
      preferred: false
    }
  ];

  const handleContactClick = (method) => {
    if (method.action.startsWith('mailto:') || method.action.startsWith('https://')) {
      window.open(method.action, '_blank');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Pilih Cara Komunikasi
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Saya berkomitmen memberikan respons yang cepat dan berkualitas. Pilih metode komunikasi yang paling nyaman untuk Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactMethods.map((method) => (
          <div
            key={method.id}
            className={`relative bg-card rounded-xl p-6 border ${method.borderColor} hover:border-opacity-50 transition-all duration-300 hover:scale-105 cursor-pointer group`}
            onClick={() => handleContactClick(method)}
          >
            {method.preferred && (
              <div className="absolute -top-3 left-4">
                <span className="bg-gradient-to-r from-accent to-success text-background text-xs font-bold px-3 py-1 rounded-full">
                  DIREKOMENDASIKAN
                </span>
              </div>
            )}

            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={method.icon} size={24} className={method.color} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {method.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 break-all">
                  {method.value}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {method.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Respons: {method.responseTime}
                    </span>
                  </div>
                  
                  <Icon 
                    name="ExternalLink" 
                    size={16} 
                    className="text-muted-foreground group-hover:text-accent transition-colors" 
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface/50 rounded-xl p-6 border border-border/20">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Info" size={20} className="text-accent" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Komitmen Respons Saya
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Email: Respons detail dalam 24 jam (hari kerja)</li>
              <li>• WhatsApp: Respons cepat dalam 2 jam (08:00-22:00 WIB)</li>
              <li>• Meeting: Tersedia Senin-Jumat 09:00-17:00 WIB</li>
              <li>• Konsultasi darurat: Hubungi WhatsApp dengan keterangan "URGENT"</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button
          variant="outline"
          iconName="Download"
          iconPosition="left"
          className="border-accent/30 text-accent hover:bg-accent/10"
          onClick={() => window.open('/assets/portfolio-summary.pdf', '_blank')}
        >
          Download Media Kit & Portfolio Summary
        </Button>
      </div>
    </div>
  );
};

export default ContactMethods;