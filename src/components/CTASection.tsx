import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    'Quraşdırma pulsuzdur',
    'İlk 1000 əməliyyat komissiyasızdır',
    'Kredit kartı tələb olunmur',
    '24/7 texniki dəstək'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Email ünvanınızı daxil edin');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Təşəkkürlər! Tezliklə sizinlə əlaqə saxlayacağıq.');
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section id="cta" className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-transparent opacity-20 rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500 to-transparent opacity-20 rounded-tl-full" />
          
          {/* Floating Sparkles */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-8 right-8"
          >
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>

          <div className="relative p-12 lg:p-16 text-center space-y-8">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full">
              <span className="text-sm text-purple-300">Pulsuz Başlayın</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl text-white">
                Biznesinizi{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  rəqəmsallaşdırın
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                UniQR ilə ödəniş qəbulu çox asandır. İndi qoşulun və fərqi hiss edin.
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email ünvanınız"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <span>Göndərilir...</span>
                  ) : (
                    <>
                      <span>Başla</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-white/80"
                >
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
