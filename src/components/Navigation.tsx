import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">Q</span>
            </div>
            <span className="text-2xl text-white">UniQR</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('problems')}
              className="text-white/70 hover:text-white transition-colors"
            >
              Problemlər
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-white/70 hover:text-white transition-colors"
            >
              Həllər
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="text-white/70 hover:text-white transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/70 hover:text-white transition-colors"
            >
              Xüsusiyyətlər
            </button>

            <div className="flex items-center gap-3 ml-4">
              <button className="flex items-center gap-1 px-3 py-1.5 text-white/70 hover:text-white transition-colors">
                <span>AZ</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Başlayın
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0a0e1a]/98 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('problems')}
                className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Problemlər
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Həllər
              </button>
              <button
                onClick={() => scrollToSection('dashboard')}
                className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Dashboard
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                Xüsusiyyətlər
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="block w-full px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-lg"
              >
                Başlayın
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
