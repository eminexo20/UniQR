import { motion } from 'motion/react';
import { Store, User, Home } from 'lucide-react';

type ViewMode = 'landing' | 'merchant' | 'buyer';

interface DemoModeSelectorProps {
  setViewMode: (mode: ViewMode) => void;
}

export function DemoModeSelector({ setViewMode }: DemoModeSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#0a0e1a]/95 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl"
    >
      <div className="flex items-center gap-2">
        <button
          onClick={() => setViewMode('landing')}
          className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm">Landing</span>
        </button>
        <button
          onClick={() => setViewMode('merchant')}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full hover:shadow-lg hover:shadow-green-500/50 transition-all"
        >
          <Store className="w-4 h-4" />
          <span className="text-sm">Merchant Demo</span>
        </button>
        <button
          onClick={() => setViewMode('buyer')}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all"
        >
          <User className="w-4 h-4" />
          <span className="text-sm">Buyer Demo</span>
        </button>
      </div>
    </motion.div>
  );
}
