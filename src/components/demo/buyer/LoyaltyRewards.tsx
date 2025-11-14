import { motion } from 'motion/react';
import { Gift, Award, TrendingUp, Zap } from 'lucide-react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { toast } from 'sonner@2.0.3';

export function LoyaltyRewards() {
  const rewards = [
    { 
      id: 1,
      title: 'Pulsuz Kofe',
      description: 'İstənilən kofe növü',
      points: 250,
      partner: 'Cafe Mərkəz',
      available: true,
      image: '☕'
    },
    { 
      id: 2,
      title: '20% Endirim',
      description: 'Bütün menyudan',
      points: 500,
      partner: 'Pizza House',
      available: true,
      image: '🍕'
    },
    { 
      id: 3,
      title: 'Pulsuz Çatdırılma',
      description: '3 sifarişə qədər',
      points: 300,
      partner: 'Book Store',
      available: false,
      image: '📚'
    },
    { 
      id: 4,
      title: 'VIP Üzvlük',
      description: '1 aylıq',
      points: 1000,
      partner: 'UniQR Premium',
      available: true,
      image: '👑'
    }
  ];

  const achievements = [
    { icon: Award, title: 'İlk Ödəniş', earned: true, date: '15 Yan' },
    { icon: TrendingUp, title: '10 Əməliyyat', earned: true, date: '22 Yan' },
    { icon: Zap, title: 'Sürətli İstifadəçi', earned: true, date: '5 Fev' },
    { icon: Gift, title: '1000 Xal', earned: false, date: '-' }
  ];

  const handleRedeem = (title: string, points: number) => {
    toast.success(`${title} mükafatı tələb edildi! (-${points} xal)`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl text-white mb-1">Loyallıq Proqramı</h2>
        <p className="text-white/60">Xallarınızı topla yın və mükafat qazanın</p>
      </div>

      {/* Points Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-8 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-600/20 border-purple-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
          <div className="relative flex items-center justify-between">
            <div>
              <div className="text-white/80 mb-2">Cəmi Xallarınız</div>
              <div className="text-5xl text-white mb-4">1,250</div>
              <div className="text-sm text-white/60">Bu ay +320 xal qazandınız</div>
            </div>
            <div className="text-8xl opacity-20">🎁</div>
          </div>
        </Card>
      </motion.div>

      {/* Available Rewards */}
      <div>
        <h3 className="text-xl text-white mb-4">Mükafatlar</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10 ${!reward.available && 'opacity-50'}`}>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{reward.image}</div>
                  <div className="flex-1">
                    <h4 className="text-white text-lg mb-1">{reward.title}</h4>
                    <p className="text-white/60 text-sm mb-2">{reward.description}</p>
                    <div className="text-sm text-white/60 mb-4">{reward.partner}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                          {reward.points} xal
                        </div>
                      </div>
                      <Button
                        onClick={() => handleRedeem(reward.title, reward.points)}
                        disabled={!reward.available}
                        size="sm"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Tələb Et
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-xl text-white mb-4">Nailiyyətlər</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`p-6 text-center ${
                achievement.earned 
                  ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30' 
                  : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10'
              }`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  achievement.earned 
                    ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                    : 'bg-white/10'
                }`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.earned ? 'text-white' : 'text-white/40'}`} />
                </div>
                <h4 className={`mb-2 ${achievement.earned ? 'text-white' : 'text-white/40'}`}>
                  {achievement.title}
                </h4>
                <div className={`text-sm ${achievement.earned ? 'text-green-400' : 'text-white/40'}`}>
                  {achievement.date}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
