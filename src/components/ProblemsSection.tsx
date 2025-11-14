import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { X, AlertTriangle, Lock } from 'lucide-react';

export function ProblemsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: X,
      title: 'POS Terminalı Məcburiyyəti',
      description: 'Kiçik bizneslər üçün bahalı avadanlıq və texniki dəstək xərcləri',
      color: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-500/30',
      iconBg: 'from-red-500 to-orange-500'
    },
    {
      icon: AlertTriangle,
      title: 'Çoxlu Bank Tətbiqləri',
      description: 'Hər ödəniş üçün müxtəlif tətbiqlər arasında gəzinti və vaxt itkisi',
      color: 'from-orange-500/20 to-yellow-500/20',
      borderColor: 'border-orange-500/30',
      iconBg: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Lock,
      title: 'Məhdud Loyallıq Sistemi',
      description: 'Hər mağaza üçün ayrı-ayrı loyallıq kartları və qarışıq bonus sistemi',
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      iconBg: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="problems" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 text-sm">
            Mövcud Problemlər
          </div>
          <h2 className="text-4xl lg:text-5xl text-white max-w-3xl mx-auto">
            Ödəniş sistemlərində böyük{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              çətinliklər
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Bizneslər və müştərilər hər gün bu problemlərlə üzləşir
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 bg-gradient-to-br ${problem.color} backdrop-blur-sm rounded-2xl border ${problem.borderColor} hover:border-white/30 transition-all hover:scale-105 overflow-hidden`}
            >
              {/* Glow Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.iconBg} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${problem.iconBg} mb-6 shadow-lg`}>
                <problem.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="relative text-xl text-white mb-3">
                {problem.title}
              </h3>
              
              <p className="relative text-white/60">
                {problem.description}
              </p>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
