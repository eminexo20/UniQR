import { motion } from 'motion/react';
import { QrCode, Zap, Gift, TrendingUp, CreditCard, Wallet } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function BuyerHome() {
  const [showQRScanner, setShowQRScanner] = useState(false);

  const quickActions = [
    { icon: QrCode, label: 'QR Skan', color: 'from-blue-500 to-cyan-500', action: () => setShowQRScanner(true) },
    { icon: CreditCard, label: 'Ödəniş Et', color: 'from-green-500 to-emerald-500', action: () => toast.info('Ödəniş ekranı açılır...') },
    { icon: Gift, label: 'Mükafatlar', color: 'from-purple-500 to-pink-500', action: () => toast.info('Mükafatlar açılır...') },
    { icon: Wallet, label: 'Balans Artır', color: 'from-orange-500 to-red-500', action: () => toast.info('Balans artırma açılır...') }
  ];

  const recentPlaces = [
    { name: 'Cafe Mərkəz', visits: 24, lastVisit: 'Bu gün', cashback: '5%', logo: 'C' },
    { name: 'Pizza House', visits: 12, lastVisit: '2 gün əvvəl', cashback: '3%', logo: 'P' },
    { name: 'Book Store', visits: 8, lastVisit: '1 həftə əvvəl', cashback: '10%', logo: 'B' }
  ];

  const recentTransactions = [
    { place: 'Cafe Mərkəz', amount: 23.50, time: '15:30', type: 'coffee', points: 25 },
    { place: 'Pizza House', amount: 45.00, time: '13:45', type: 'food', points: 45 },
    { place: 'Book Store', amount: 67.80, time: '11:20', type: 'shopping', points: 68 }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-8 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border-blue-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl text-white mb-2">Xoş gəlmisiniz! 👋</h2>
            <p className="text-white/80 mb-6">Bir QR kod ilə bütün ödənişlərinizi idarə edin</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-white/60 text-sm mb-1">Balans</div>
                <div className="text-2xl text-white">₼245.50</div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1">Xallar</div>
                <div className="text-2xl text-white">1,250</div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1">Bu ay</div>
                <div className="text-2xl text-white">₼892</div>
              </div>
              <div>
                <div className="text-white/60 text-sm mb-1">Qənaət</div>
                <div className="text-2xl text-green-400">₼42.30</div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={action.action}
              className="w-full p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-all hover:scale-105 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-white text-center">{action.label}</div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Recent Places */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl text-white mb-4">Tez-tez Getdikləriniz</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {recentPlaces.map((place, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{place.logo}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-1">{place.name}</h4>
                  <div className="text-sm text-white/60">{place.visits} ziyarət • {place.lastVisit}</div>
                  <div className="mt-2 inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    {place.cashback} Cashback
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-xl text-white mb-4">Son Əməliyyatlar</h3>
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white">{transaction.place}</div>
                    <div className="text-sm text-white/60">{transaction.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white">-₼{transaction.amount}</div>
                  <div className="text-sm text-green-400">+{transaction.points} xal</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* QR Scanner Modal */}
      {showQRScanner && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl text-white mb-6 text-center">QR Kod Skan</h3>
            
            <div className="aspect-square bg-white/5 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 border-2 border-blue-500/50 rounded-2xl" />
              <div className="absolute inset-4 border-2 border-blue-500 rounded-2xl animate-pulse" />
              <QrCode className="w-24 h-24 text-blue-400" />
            </div>

            <p className="text-center text-white/60 mb-6">
              QR kodu kameranıza tutun
            </p>

            <Button
              onClick={() => setShowQRScanner(false)}
              variant="outline"
              className="w-full border-white/10 text-white hover:bg-white/5"
            >
              Bağla
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
