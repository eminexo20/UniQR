import { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Building, CreditCard, Bell, Shield, Users, Palette } from 'lucide-react';
import { Card } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';
import { toast } from 'sonner@2.0.3';

export function SettingsPanel() {
  const [businessName, setBusinessName] = useState('Cafe Mərkəz');
  const [businessAddress, setBusinessAddress] = useState('Nizami küçəsi 123, Bakı');
  const [businessPhone, setBusinessPhone] = useState('+994 12 345 67 89');
  const [businessEmail, setBusinessEmail] = useState('info@cafemarkaz.az');

  const [notifications, setNotifications] = useState({
    newOrder: true,
    payment: true,
    dailyReport: true,
    marketing: false
  });

  const handleSaveSettings = () => {
    toast.success('Parametrlər yadda saxlanıldı!');
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Business Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Biznes Məlumatları</h3>
              <p className="text-sm text-white/60">Biznesiniz haqqında əsas məlumatlar</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-white/80 text-sm mb-2 block">Biznes Adı</label>
              <Input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <label className="text-white/80 text-sm mb-2 block">Ünvan</label>
              <Input
                value={businessAddress}
                onChange={(e) => setBusinessAddress(e.target.value)}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/80 text-sm mb-2 block">Telefon</label>
                <Input
                  value={businessPhone}
                  onChange={(e) => setBusinessPhone(e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <label className="text-white/80 text-sm mb-2 block">Email</label>
                <Input
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Payment Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Ödəniş Parametrləri</h3>
              <p className="text-sm text-white/60">Ödəniş metodları və komissiyalar</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Bank Kartı</div>
                <div className="text-sm text-white/60">Visa, Mastercard</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">QR Code Ödəniş</div>
                <div className="text-sm text-white/60">UniQR sistemi</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Nağd Ödəniş</div>
                <div className="text-sm text-white/60">Fiziki ödəniş</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Bildiriş Parametrləri</h3>
              <p className="text-sm text-white/60">Bildiriş tərcihlərinizi idarə edin</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Yeni Sifariş</div>
                <div className="text-sm text-white/60">Hər yeni sifarişdə bildiriş al</div>
              </div>
              <Switch 
                checked={notifications.newOrder}
                onCheckedChange={(checked) => setNotifications({...notifications, newOrder: checked})}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Ödəniş Təsdiqləri</div>
                <div className="text-sm text-white/60">Ödəniş alındıqda bildiriş</div>
              </div>
              <Switch 
                checked={notifications.payment}
                onCheckedChange={(checked) => setNotifications({...notifications, payment: checked})}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Günlük Hesabat</div>
                <div className="text-sm text-white/60">Gün sonu satış hesabatı</div>
              </div>
              <Switch 
                checked={notifications.dailyReport}
                onCheckedChange={(checked) => setNotifications({...notifications, dailyReport: checked})}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Marketinq Bildirişləri</div>
                <div className="text-sm text-white/60">Yeniliklər və təkliflər</div>
              </div>
              <Switch 
                checked={notifications.marketing}
                onCheckedChange={(checked) => setNotifications({...notifications, marketing: checked})}
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-white">Təhlükəsizlik</h3>
              <p className="text-sm text-white/60">Hesab təhlükəsizliyi parametrləri</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">İki-faktorlu autentifikasiya</div>
                <div className="text-sm text-white/60">Əlavə təhlükəsizlik qatı</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div>
                <div className="text-white mb-1">Login tarixçəsi</div>
                <div className="text-sm text-white/60">Giriş cəhdlərini izlə</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSaveSettings}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/50"
        >
          <Save className="w-5 h-5" />
          <span>Parametrləri Yadda Saxla</span>
        </Button>
      </div>
    </div>
  );
}
