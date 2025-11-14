import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Zap, Globe, Lock, Headphones, Puzzle } from 'lucide-react';

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Smartphone,
      title: 'Mobil-First Dizayn',
      description: 'İstifadəçi dostu interfeys və sürətli ödəniş prosesi',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Ani Əməliyyatlar',
      description: 'Real-vaxt rejimində ödəniş və balans yeniləməsi',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Multi-Bank Dəstək',
      description: 'Bütün lokal və beynəlxalq bankları dəstəkləyir',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Maksimum Təhlükəsizlik',
      description: 'PCI DSS sertifikatı və 3D Secure texnologiyası',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Headphones,
      title: '24/7 Dəstək',
      description: 'Hər zaman əlçatan müştəri xidməti və texniki dəstək',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Puzzle,
      title: 'Asan İnteqrasiya',
      description: 'API və SDK ilə sürətli və asan inteqrasiya',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="features" className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 text-sm">
            Niyə UniQR?
          </div>
          <h2 className="text-4xl lg:text-5xl text-white max-w-3xl mx-auto">
            Platformamızın{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              üstünlükləri
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            UniQR ilə biznesinizi növbəti səviyyəyə çatdırın
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              {/* Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

              {/* Icon */}
              <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="relative text-white/60">
                {feature.description}
              </p>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
