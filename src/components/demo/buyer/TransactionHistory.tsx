import { motion } from 'motion/react';
import { Search, Filter, Download, Calendar } from 'lucide-react';
import { Card } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { useState } from 'react';

export function TransactionHistory() {
  const [searchQuery, setSearchQuery] = useState('');

  const transactions = [
    { 
      id: 'TXN-2024-001',
      merchant: 'Cafe Mərkəz',
      amount: 23.50,
      date: '2024-11-14',
      time: '15:30',
      status: 'completed',
      points: 25,
      cashback: 1.18,
      category: 'Yemək və İçki'
    },
    { 
      id: 'TXN-2024-002',
      merchant: 'Pizza House',
      amount: 45.00,
      date: '2024-11-12',
      time: '19:45',
      status: 'completed',
      points: 45,
      cashback: 1.35,
      category: 'Yemək və İçki'
    },
    { 
      id: 'TXN-2024-003',
      merchant: 'Book Store',
      amount: 67.80,
      date: '2024-11-10',
      time: '14:20',
      status: 'completed',
      points: 68,
      cashback: 6.78,
      category: 'Kitab'
    },
    { 
      id: 'TXN-2024-004',
      merchant: 'Fuel Station',
      amount: 120.00,
      date: '2024-11-08',
      time: '09:15',
      status: 'completed',
      points: 120,
      cashback: 2.40,
      category: 'Yanacaq'
    },
    { 
      id: 'TXN-2024-005',
      merchant: 'Grocery Store',
      amount: 89.50,
      date: '2024-11-06',
      time: '18:30',
      status: 'completed',
      points: 90,
      cashback: 4.48,
      category: 'Market'
    },
    { 
      id: 'TXN-2024-006',
      merchant: 'Cinema',
      amount: 34.00,
      date: '2024-11-05',
      time: '20:00',
      status: 'completed',
      points: 34,
      cashback: 1.70,
      category: 'Əyləncə'
    }
  ];

  const filteredTransactions = transactions.filter(tx =>
    tx.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tx.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalSpent = transactions.reduce((sum, tx) => sum + tx.amount, 0);
  const totalCashback = transactions.reduce((sum, tx) => sum + tx.cashback, 0);
  const totalPoints = transactions.reduce((sum, tx) => sum + tx.points, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl text-white mb-1">Əməliyyat Tarixçəsi</h2>
          <p className="text-white/60">Bütün ödənişlərinizi izləyin</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-cyan-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-2">Ümumi Xərc</div>
          <div className="text-3xl text-white mb-1">₼{totalSpent.toFixed(2)}</div>
          <div className="text-sm text-white/60">6 əməliyyat</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-2">Qazanılmış Cashback</div>
          <div className="text-3xl text-green-400 mb-1">₼{totalCashback.toFixed(2)}</div>
          <div className="text-sm text-white/60">Orta 2.5%</div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-2">Cəmi Xallar</div>
          <div className="text-3xl text-purple-400 mb-1">{totalPoints}</div>
          <div className="text-sm text-white/60">Bonus xalları</div>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Əməliyyat axtar..."
          className="pl-10 bg-white/5 border-white/10 text-white"
        />
      </div>

      {/* Transactions List */}
      <div className="space-y-4">
        {filteredTransactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-white/20 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Merchant Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">
                      {transaction.merchant.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white mb-1">{transaction.merchant}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                      <span>{transaction.id}</span>
                      <span>•</span>
                      <span>{transaction.category}</span>
                      <span>•</span>
                      <span>{transaction.date} {transaction.time}</span>
                    </div>
                  </div>
                </div>

                {/* Transaction Details */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div>
                    <div className="text-white/60 text-xs mb-1">Məbləğ</div>
                    <div className="text-white">₼{transaction.amount}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Cashback</div>
                    <div className="text-green-400">+₼{transaction.cashback}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Xallar</div>
                    <div className="text-purple-400">+{transaction.points}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Status</div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs inline-block">
                      Tamamlandı
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
