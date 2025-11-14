import { motion } from 'motion/react';
import { Plus, CreditCard, Trash2, Star } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function PaymentMethods() {
  const [cards, setCards] = useState([
    { id: 1, number: '**** **** **** 1234', type: 'Visa', bank: 'Kapital Bank', primary: true, color: 'from-blue-600 to-blue-800' },
    { id: 2, number: '**** **** **** 5678', type: 'Mastercard', bank: 'Paşa Bank', primary: false, color: 'from-purple-600 to-purple-800' },
    { id: 3, number: '**** **** **** 9012', type: 'Visa', bank: 'Bank Respublika', primary: false, color: 'from-green-600 to-green-800' }
  ]);

  const [showAddCard, setShowAddCard] = useState(false);

  const handleSetPrimary = (id: number) => {
    setCards(cards.map(card => ({ ...card, primary: card.id === id })));
    toast.success('Əsas kart dəyişdirildi');
  };

  const handleDeleteCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
    toast.success('Kart silindi');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-white mb-1">Ödəniş Metodları</h2>
          <p className="text-white/60">Bank kartlarınızı idarə edin</p>
        </div>
        <Button
          onClick={() => setShowAddCard(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500"
        >
          <Plus className="w-5 h-5" />
          <span>Yeni Kart</span>
        </Button>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`relative p-6 bg-gradient-to-br ${card.color} rounded-2xl shadow-2xl`}>
              {/* Primary Badge */}
              {card.primary && (
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-yellow-400">Əsas</span>
                </div>
              )}

              {/* Card Type */}
              <div className="text-white/80 text-sm mb-8">{card.type}</div>

              {/* Card Number */}
              <div className="text-white text-xl tracking-wider mb-6 font-mono">
                {card.number}
              </div>

              {/* Bank Name */}
              <div className="text-white/90">{card.bank}</div>

              {/* Card Actions */}
              <div className="flex gap-2 mt-6 pt-4 border-t border-white/20">
                {!card.primary && (
                  <button
                    onClick={() => handleSetPrimary(card.id)}
                    className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                  >
                    Əsas Et
                  </button>
                )}
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-2">Bu Ay Xərclənib</div>
          <div className="text-3xl text-white mb-1">₼892.50</div>
          <div className="text-sm text-green-400">+12% keçən aya nisbətən</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-2">Cashback Qazanılıb</div>
          <div className="text-3xl text-white mb-1">₼42.30</div>
          <div className="text-sm text-green-400">Bu ayda</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-2">Əməliyyat Sayı</div>
          <div className="text-3xl text-white mb-1">34</div>
          <div className="text-sm text-white/60">Bu ayda</div>
        </Card>
      </div>

      {/* Add Card Modal */}
      {showAddCard && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl text-white mb-6">Yeni Kart Əlavə Et</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-white/80 text-sm mb-2 block">Kart Nömrəsi</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">Son İstifadə</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
                  />
                </div>
                <div>
                  <label className="text-white/80 text-sm mb-2 block">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowAddCard(false)}
                variant="outline"
                className="flex-1 border-white/10 text-white hover:bg-white/5"
              >
                Ləğv et
              </Button>
              <Button
                onClick={() => {
                  toast.success('Kart əlavə edildi!');
                  setShowAddCard(false);
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500"
              >
                Əlavə Et
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
