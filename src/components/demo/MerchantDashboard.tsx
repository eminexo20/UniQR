import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  QrCode, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut,
  Home,
  TrendingUp,
  DollarSign,
  Activity,
  Download,
  Filter,
  Calendar
} from 'lucide-react';
import { Toaster } from '../ui/sonner';
import { toast } from 'sonner@2.0.3';
import { Card } from '../ui/card';
import { DashboardOverview } from './merchant/DashboardOverview';
import { QRCodeManager } from './merchant/QRCodeManager';
import { Analytics } from './merchant/Analytics';
import { CustomerManagement } from './merchant/CustomerManagement';
import { SettingsPanel } from './merchant/SettingsPanel';

type ViewMode = 'landing' | 'merchant' | 'buyer';
type TabType = 'overview' | 'qr' | 'analytics' | 'customers' | 'settings';

interface MerchantDashboardProps {
  setViewMode: (mode: ViewMode) => void;
}

export function MerchantDashboard({ setViewMode }: MerchantDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview' as TabType, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'qr' as TabType, label: 'QR Kodlar', icon: QrCode },
    { id: 'analytics' as TabType, label: 'Analitika', icon: BarChart3 },
    { id: 'customers' as TabType, label: 'Müştərilər', icon: Users },
    { id: 'settings' as TabType, label: 'Parametrlər', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className="w-72 h-screen bg-[#050810] border-r border-white/10 fixed left-0 top-0 flex flex-col"
        >
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">Q</span>
              </div>
              <div>
                <div className="text-white">UniQR</div>
                <div className="text-xs text-white/60">Merchant Panel</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => setViewMode('landing')}
              className="w-full flex items-center gap-3 px-4 py-3 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Ana Səhifə</span>
            </button>
            <button
              onClick={() => {
                toast.success('Sistemdən çıxış edildi');
                setTimeout(() => setViewMode('landing'), 1000);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all"
            >
              <LogOut className="w-5 h-5" />
              <span>Çıxış</span>
            </button>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 ml-72 p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl text-white mb-2">
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <p className="text-white/60">
              {new Date().toLocaleDateString('az-AZ', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'overview' && <DashboardOverview />}
            {activeTab === 'qr' && <QRCodeManager />}
            {activeTab === 'analytics' && <Analytics />}
            {activeTab === 'customers' && <CustomerManagement />}
            {activeTab === 'settings' && <SettingsPanel />}
          </motion.div>
        </main>
      </div>

      <Toaster />
    </div>
  );
}
