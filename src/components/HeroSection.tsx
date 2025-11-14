import { motion } from 'motion/react';
import { ArrowRight, Play, Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Sparkles, color: 'from-yellow-400 to-orange-500', delay: 0, x: -60, y: 80 },
    { Icon: Zap, color: 'from-blue-400 to-cyan-500', delay: 0.2, x: 60, y: 120 },
    { Icon: Shield, color: 'from-green-400 to-emerald-500', delay: 0.4, x: -80, y: 320 },
    { Icon: TrendingUp, color: 'from-purple-400 to-pink-500', delay: 0.6, x: 70, y: 280 },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Ödənişlərin Gələcəyi</span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl text-white leading-tight">
                Bir QR kod ilə{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                  hamısını
                </span>
                {' '}idarə edin
              </h1>
              <p className="text-xl text-white/60 max-w-xl">
                UniQR - bütün bank kartları, loyallıq proqramları və ödəniş metodlarını bir platformada birləşdirən yeni nəsil ödəniş həlli
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('cta')}
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                <span>Pulsuz Başlayın</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="group flex items-center gap-2 px-8 py-4 bg-white/5 text-white rounded-xl border border-white/10 hover:bg-white/10 transition-all"
              >
                <Play className="w-5 h-5" />
                <span>Demo İzləyin</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-3xl text-white mb-1">1000+</div>
                <div className="text-sm text-white/60">Aktiv Biznes</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">50K+</div>
                <div className="text-sm text-white/60">Günlük Əməliyyat</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">99.9%</div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Device */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30 scale-75" />

            {/* Main Image */}
            <div className="relative w-full max-w-md">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjMwOTkyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="UniQR Mobile App"
                  className="relative z-10 w-full h-auto drop-shadow-2xl rounded-3xl"
                />
              </motion.div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, color, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { delay, duration: 0.5 },
                    scale: { delay, duration: 0.5 },
                    y: {
                      delay: delay + 0.5,
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className={`absolute w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-2xl`}
                  style={{ left: `calc(50% + ${x}px)`, top: `${y}px` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
