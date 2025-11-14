import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { QrCode, Smartphone, CreditCard, Gift, Zap, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: QrCode,
      title: 'Bir QR Kod',
      description: 'Bütün ödəniş metodlarını bir QR kodda birləşdirin'
    },
    {
      icon: Smartphone,
      title: 'Mobil Ödəniş',
      description: 'İstənilən yerdən, istənilən vaxt ödəniş qəbul edin'
    },
    {
      icon: CreditCard,
      title: 'Bütün Kartlar',
      description: 'Visa, Mastercard və yerli kartları dəstəkləyir'
    },
    {
      icon: Gift,
      title: 'Loyallıq Sistemi',
      description: 'İnteqrasiya olunmuş bonus və cashback proqramı'
    },
    {
      icon: Zap,
      title: 'Ani Transfer',
      description: 'Real vaxt rejimində balansınıza köçürülmə'
    },
    {
      icon: Shield,
      title: 'Tam Təhlükəsiz',
      description: '256-bit şifrələmə və PCI DSS sertifikatı'
    }
  ];

  return (
    <section id="solution" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl blur-3xl opacity-20" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571867424488-4565932edb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBwYXltZW50fGVufDF8fHx8MTc2MzEzMjIxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="QR Code Payment"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-2xl shadow-2xl"
                >
                  <div className="text-3xl text-white mb-1">3 san</div>
                  <div className="text-sm text-white/80">Orta ödəniş vaxtı</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-green-500/10 text-green-400 rounded-full border border-green-500/20 text-sm">
                UniQR Həlli
              </div>
              <h2 className="text-4xl lg:text-5xl text-white">
                Hamısı bir{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  platformada
                </span>
              </h2>
              <p className="text-xl text-white/60">
                UniQR ilə ödəniş qəbulu və idarəetməsi artıq çox asandır
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white mb-1">{feature.title}</div>
                      <div className="text-sm text-white/60">{feature.description}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
