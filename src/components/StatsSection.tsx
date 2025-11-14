import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

export function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: TrendingUp,
      value: '₼2.5M+',
      label: 'Aylıq Əməliyyat Həcmi',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      value: '15K+',
      label: 'Aktiv İstifadəçi',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Zap,
      value: '<1s',
      label: 'Orta Əməliyyat Vaxtı',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Award,
      value: '4.9/5',
      label: 'Müştəri Məmnuniyyəti',
      color: 'from-purple-400 to-pink-500'
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
