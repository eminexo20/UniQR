import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Users, TrendingUp, Repeat, Eye, Target } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DashboardSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: BarChart3,
      title: 'Real-vaxt Analitika',
      description: 'Satış və gəlirinizi real vaxt rejimində izləyin və analiz edin',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Müştəri Davranışı',
      description: 'Müştərilərin alış-veriş tərzini öyrənin və strategiya qurun',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Repeat,
      title: 'Loyallıq İzləmə',
      description: 'Daimi müştəri dərəcəsini və loyallıq göstəricilərini izləyin',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'Performans Metrikləri',
      description: 'QR kodunuzun istifadə statistikaları və konversiya analizi',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Məqsəd İzləmə',
      description: 'Satış məqsədlərinizi təyin edin və irəliləyişinizi izləyin',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Proqnozlaşdırma',
      description: 'AI əsaslı satış proqnozları və trend analizi',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="dashboard" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 text-sm">
                İdarəetmə Paneli
              </div>
              <h2 className="text-4xl lg:text-5xl text-white">
                Güclü{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                  Merchant Dashboard
                </span>
              </h2>
              <p className="text-xl text-white/60">
                Biznesinizi idarə etmək və böyütmək üçün ehtiyacınız olan bütün alətlər
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="group p-5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all hover:scale-105"
                >
                  <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${feature.color} mb-3`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              
              {/* Dashboard Frame */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-2 rounded-2xl border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzYzMDk0ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Merchant Dashboard"
                  className="w-full h-auto rounded-xl"
                />
              </div>

              {/* Floating Card - Revenue */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-green-500 to-emerald-500 p-5 rounded-2xl shadow-2xl"
              >
                <div className="text-sm text-white/80 mb-1">Aylıq Gəlir</div>
                <div className="text-2xl text-white">₼45,280</div>
                <div className="flex items-center gap-1 text-xs text-white/80 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>+12.5%</span>
                </div>
              </motion.div>

              {/* Floating Card - Transactions */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 p-5 rounded-2xl shadow-2xl"
              >
                <div className="text-sm text-white/80 mb-1">Bu Həftə</div>
                <div className="text-2xl text-white">1,247</div>
                <div className="text-xs text-white/80">əməliyyat</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
