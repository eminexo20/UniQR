import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = {
    product: [
      { label: 'Xüsusiyyətlər', id: 'features' },
      { label: 'Dashboard', id: 'dashboard' },
      { label: 'Qiymətləndirmə', id: 'cta' },
      { label: 'API', id: 'cta' }
    ],
    company: [
      { label: 'Haqqımızda', id: 'hero' },
      { label: 'Bloq', id: 'hero' },
      { label: 'Karyera', id: 'hero' },
      { label: 'Əlaqə', id: 'cta' }
    ],
    legal: [
      { label: 'Məxfilik Siyasəti', id: 'hero' },
      { label: 'İstifadə Şərtləri', id: 'hero' },
      { label: 'Cookie Siyasəti', id: 'hero' },
      { label: 'GDPR', id: 'hero' }
    ]
  };

  const socials = [
    { Icon: Facebook, url: '#' },
    { Icon: Twitter, url: '#' },
    { Icon: Instagram, url: '#' },
    { Icon: Linkedin, url: '#' }
  ];

  return (
    <footer className="relative bg-[#050810] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">Q</span>
              </div>
              <span className="text-2xl text-white">UniQR</span>
            </div>
            <p className="text-white/60 max-w-sm">
              Bütün ödəniş metodlarını bir platformada birləşdirən yeni nəsil ödəniş həlli
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span>info@uniqr.az</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Phone className="w-4 h-4" />
                <span>+994 12 345 67 89</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>Bakı, Azərbaycan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white mb-4">Məhsul</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white mb-4">Şirkət</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white mb-4">Hüquqi</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 UniQR. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-6 opacity-60"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-6 opacity-60"
            />
            <div className="px-3 py-1 bg-white/5 rounded text-white/60 text-xs">
              PCI DSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
