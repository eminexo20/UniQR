import { motion } from 'motion/react';
import { User, Bell, Shield, CreditCard, Globe, Moon } from 'lucide-react';
import { Card } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

export function BuyerSettings() {
  const [name, setName] = useState('Anar Məmmədov');
  const [email, setEmail] = useState('anar.m@example.com');
  const [phone, setPhone] = useState('+994 50 123 45 67');

  const [notifications, setNotifications] = useState({
    transactions: true,
    promotions: true,
    rewards: true,
    weekly: false
  });

  const handleSave = () => {
    toast.success('Parametrlər yadda saxlanıldı!');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Profile Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Profil Məlumatları</h3>
              <p className="text-sm text-white/60">Şəxsi məlumatlarınızı yeniləyin</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-white/80 text-sm mb-2 block">Ad Soyad</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/80 text-sm mb-2 block">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <label className="text-white/80 text-sm mb-2 block">Telefon</label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Bildiriş Parametrləri</h3>
              <p className="text-sm text-white/60">Bildiriş tərcihlərinizi seçin</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Əməliyyat Bildirişləri</div>
                <div className="text-sm text-white/60">Hər ödənişdə bildiriş al</div>
              </div>
              <Switch 
                checked={notifications.transactions}
                onCheckedChange={(checked) => setNotifications({...notifications, transactions: checked})}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Kampaniya Bildirişləri</div>
                <div className="text-sm text-white/60">Endirim və təkliflər</div>
              </div>
              <Switch 
                checked={notifications.promotions}
                onCheckedChange={(checked) => setNotifications({...notifications, promotions: checked})}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Mükafat Bildirişləri</div>
                <div className="text-sm text-white/60">Bonus və xal qazanma</div>
              </div>
              <Switch 
                checked={notifications.rewards}
                onCheckedChange={(checked) => setNotifications({...notifications, rewards: checked})}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Həftəlik Hesabat</div>
                <div className="text-sm text-white/60">Xərc hesabatları</div>
              </div>
              <Switch 
                checked={notifications.weekly}
                onCheckedChange={(checked) => setNotifications({...notifications, weekly: checked})}
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Təhlükəsizlik</h3>
              <p className="text-sm text-white/60">Hesabınızı qoruyun</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Biyometrik Autentifikasiya</div>
                <div className="text-sm text-white/60">Face ID / Touch ID</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">PIN Kod</div>
                <div className="text-sm text-white/60">Əlavə təhlükəsizlik</div>
              </div>
              <Switch defaultChecked />
            </div>
            <Button
              variant="outline"
              className="w-full border-white/10 text-white hover:bg-white/5"
            >
              Şifrəni Dəyiş
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Preferences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Tənzimləmələr</h3>
              <p className="text-sm text-white/60">Proqram tənzimləmələri</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Dil</div>
                <div className="text-sm text-white/60">Azərbaycan dili</div>
              </div>
              <Button variant="ghost" size="sm" className="text-white/60">
                Dəyiş
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Valyuta</div>
                <div className="text-sm text-white/60">AZN (₼)</div>
              </div>
              <Button variant="ghost" size="sm" className="text-white/60">
                Dəyiş
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Qaranlıq Rejim</div>
                <div className="text-sm text-white/60">Avtomatik</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50"
        >
          Dəyişiklikləri Yadda Saxla
        </Button>
      </div>
    </div>
  );
}
