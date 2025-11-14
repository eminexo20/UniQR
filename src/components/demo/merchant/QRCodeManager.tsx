import { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, Plus, Download, Copy, Edit, Trash2, Eye } from 'lucide-react';
import { Card } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { toast } from 'sonner@2.0.3';

export function QRCodeManager() {
  const [qrCodes, setQrCodes] = useState([
    { 
      id: 'QR-001', 
      name: 'Əsas Masa QR', 
      table: 'Masa 1', 
      scans: 234,
      revenue: 4520,
      active: true,
      created: '2024-01-15'
    },
    { 
      id: 'QR-002', 
      name: 'VIP Bölmə', 
      table: 'VIP 1', 
      scans: 156,
      revenue: 8900,
      active: true,
      created: '2024-01-20'
    },
    { 
      id: 'QR-003', 
      name: 'Terras Masası', 
      table: 'Masa 5', 
      scans: 89,
      revenue: 2340,
      active: true,
      created: '2024-02-01'
    },
    { 
      id: 'QR-004', 
      name: 'Bar Tezgahı', 
      table: 'Bar', 
      scans: 445,
      revenue: 6780,
      active: false,
      created: '2024-01-10'
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newQRName, setNewQRName] = useState('');
  const [newQRTable, setNewQRTable] = useState('');

  const handleCreateQR = () => {
    if (!newQRName || !newQRTable) {
      toast.error('Bütün sahələri doldurun');
      return;
    }

    const newQR = {
      id: `QR-${String(qrCodes.length + 1).padStart(3, '0')}`,
      name: newQRName,
      table: newQRTable,
      scans: 0,
      revenue: 0,
      active: true,
      created: new Date().toISOString().split('T')[0]
    };

    setQrCodes([...qrCodes, newQR]);
    setNewQRName('');
    setNewQRTable('');
    setShowCreateModal(false);
    toast.success('QR kod yaradıldı!');
  };

  const handleCopyLink = (id: string) => {
    navigator.clipboard.writeText(`https://uniqr.az/pay/${id}`);
    toast.success('Link kopyalandı!');
  };

  const handleDownload = (id: string) => {
    toast.success(`${id} QR kod yüklənir...`);
  };

  const handleDelete = (id: string) => {
    setQrCodes(qrCodes.filter(qr => qr.id !== id));
    toast.success('QR kod silindi');
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-white mb-1">QR Kodlarınız</h2>
          <p className="text-white/60">Ödəniş QR kodlarınızı idarə edin</p>
        </div>
        <Button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/50"
        >
          <Plus className="w-5 h-5" />
          <span>Yeni QR Yarat</span>
        </Button>
      </div>

      {/* QR Codes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qrCodes.map((qr, index) => (
          <motion.div
            key={qr.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-white/20 transition-all">
              {/* QR Code Visual */}
              <div className="w-full aspect-square bg-white rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-2">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        Math.random() > 0.5 ? 'bg-black' : 'bg-transparent'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <QrCode className="w-10 h-10 text-green-500" />
                  </div>
                </div>
              </div>

              {/* QR Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-white mb-1">{qr.name}</h3>
                  <p className="text-sm text-white/60">{qr.table}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-white/10">
                  <div>
                    <div className="text-sm text-white/60 mb-1">Skan</div>
                    <div className="text-white">{qr.scans}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/60 mb-1">Gəlir</div>
                    <div className="text-white">₼{qr.revenue}</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    qr.active 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {qr.active ? 'Aktiv' : 'Deaktiv'}
                  </span>
                  <span className="text-xs text-white/60">{qr.id}</span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <button
                    onClick={() => handleCopyLink(qr.id)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    title="Link Kopyala"
                  >
                    <Copy className="w-4 h-4 text-white/60 mx-auto" />
                  </button>
                  <button
                    onClick={() => handleDownload(qr.id)}
                    className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                    title="Yüklə"
                  >
                    <Download className="w-4 h-4 text-white/60 mx-auto" />
                  </button>
                  <button
                    onClick={() => handleDelete(qr.id)}
                    className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors"
                    title="Sil"
                  >
                    <Trash2 className="w-4 h-4 text-red-400 mx-auto" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0a0e1a] border border-white/10 rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl text-white mb-6">Yeni QR Kod Yarat</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-white/80 text-sm mb-2 block">QR Kod Adı</label>
                <Input
                  value={newQRName}
                  onChange={(e) => setNewQRName(e.target.value)}
                  placeholder="Məsələn: Masa 1 QR"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <label className="text-white/80 text-sm mb-2 block">Masa/Yer</label>
                <Input
                  value={newQRTable}
                  onChange={(e) => setNewQRTable(e.target.value)}
                  placeholder="Məsələn: Masa 1"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowCreateModal(false)}
                variant="outline"
                className="flex-1 border-white/10 text-white hover:bg-white/5"
              >
                Ləğv et
              </Button>
              <Button
                onClick={handleCreateQR}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500"
              >
                Yarat
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
