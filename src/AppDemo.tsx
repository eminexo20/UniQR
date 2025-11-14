import { useState } from 'react';
import { MerchantDashboard } from './components/demo/MerchantDashboard';
import { BuyerDashboard } from './components/demo/BuyerDashboard';
import { LandingPage } from './components/demo/LandingPage';

type ViewMode = 'landing' | 'merchant' | 'buyer';

export default function AppDemo() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      {viewMode === 'landing' && <LandingPage setViewMode={setViewMode} />}
      {viewMode === 'merchant' && <MerchantDashboard setViewMode={setViewMode} />}
      {viewMode === 'buyer' && <BuyerDashboard setViewMode={setViewMode} />}
    </div>
  );
}
