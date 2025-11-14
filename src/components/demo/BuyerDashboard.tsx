import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  CreditCard, 
  Gift, 
  History, 
  Settings,
  QrCode,
  ArrowLeft,
  Wallet,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';
import { Toaster } from '../ui/sonner';
import { Card } from '../ui/card';
import { BuyerHome } from './buyer/BuyerHome';
import { PaymentMethods } from './buyer/PaymentMethods';
import { LoyaltyRewards } from './buyer/LoyaltyRewards';
import { TransactionHistory } from './buyer/TransactionHistory';
import { BuyerSettings } from './buyer/BuyerSettings';

type ViewMode = 'landing' | 'merchant' | 'buyer';
type TabType = 'home' | 'cards' | 'rewards' | 'history' | 'settings';

interface BuyerDashboardProps {
  setViewMode: (mode: ViewMode) => void;
}

export function BuyerDashboard({ setViewMode }: BuyerDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const tabs = [
    { id: 'home' as TabType, label: 'Ana Səhifə', icon: Home },
    { id: 'cards' as TabType, label: 'Kartlar', icon: CreditCard },
    { id: 'rewards' as TabType, label: 'Mükafatlar', icon: Gift },
    { id: 'history' as TabType, label: 'Tarixçə', icon: History },
    { id: 'settings' as TabType, label: 'Parametrlər', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {/* Header */}
      <header className="bg-[#050810] border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setViewMode('landing')}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-white/60" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">Q</span>
                </div>
                <div>
                  <div className="text-white">UniQR</div>
                  <div className="text-xs text-white/60">Buyer Panel</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-xs text-white/60">Balans</div>
                  <div className="text-white">₼245.50</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-xs text-white/60">Xallar</div>
                  <div className="text-white">1,250</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-white/10">
          <div className="flex items-center justify-around py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 px-4 py-2 ${
                  activeTab === tab.id ? 'text-blue-400' : 'text-white/60'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="text-xs">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 border-r border-white/10 min-h-[calc(100vh-73px)] sticky top-[73px]">
          <nav className="p-4 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && <BuyerHome />}
            {activeTab === 'cards' && <PaymentMethods />}
            {activeTab === 'rewards' && <LoyaltyRewards />}
            {activeTab === 'history' && <TransactionHistory />}
            {activeTab === 'settings' && <BuyerSettings />}
          </motion.div>
        </main>
      </div>

      <Toaster />
    </div>
  );
}
