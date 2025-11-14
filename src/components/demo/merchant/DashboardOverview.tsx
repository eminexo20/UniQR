import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  DollarSign, 
  CreditCard, 
  Users,
  ArrowUp,
  ArrowDown,
  Download
} from 'lucide-react';
import { Card } from '../../ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function DashboardOverview() {
  const [stats, setStats] = useState({
    revenue: 45280,
    transactions: 1247,
    customers: 856,
    averageOrder: 36.3
  });

  const salesData = [
    { name: 'Baz', value: 4200 },
    { name: 'Baz.E', value: 3800 },
    { name: 'Ç.A', value: 5100 },
    { name: 'Ç', value: 4600 },
    { name: 'C.A', value: 5800 },
    { name: 'Cüm', value: 6200 },
    { name: 'Şən', value: 7100 }
  ];

  const transactionData = [
    { name: '00:00', value: 12 },
    { name: '04:00', value: 8 },
    { name: '08:00', value: 45 },
    { name: '12:00', value: 89 },
    { name: '16:00', value: 67 },
    { name: '20:00', value: 134 },
    { name: '24:00', value: 45 }
  ];

  const paymentMethods = [
    { name: 'Bank Kartı', value: 65, color: '#6366f1' },
    { name: 'Nağd', value: 20, color: '#10b981' },
    { name: 'QR Code', value: 15, color: '#f59e0b' }
  ];

  const recentTransactions = [
    { id: '#TXN-001', customer: 'Anar Məmmədov', amount: 45.50, time: '10 dəq əvvəl', status: 'success' },
    { id: '#TXN-002', customer: 'Leyla Həsənova', amount: 23.20, time: '25 dəq əvvəl', status: 'success' },
    { id: '#TXN-003', customer: 'Rəşad Əliyev', amount: 89.00, time: '1 saat əvvəl', status: 'pending' },
    { id: '#TXN-004', customer: 'Nigar İsmayılova', amount: 34.75, time: '2 saat əvvəl', status: 'success' },
    { id: '#TXN-005', customer: 'Elvin Quliyev', amount: 67.30, time: '3 saat əvvəl', status: 'success' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Ümumi Gəlir</p>
                <h3 className="text-3xl text-white">₼{stats.revenue.toLocaleString()}</h3>
                <div className="flex items-center gap-1 text-green-400 text-sm mt-2">
                  <ArrowUp className="w-4 h-4" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Əməliyyatlar</p>
                <h3 className="text-3xl text-white">{stats.transactions}</h3>
                <div className="flex items-center gap-1 text-green-400 text-sm mt-2">
                  <ArrowUp className="w-4 h-4" />
                  <span>+8.3%</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Müştərilər</p>
                <h3 className="text-3xl text-white">{stats.customers}</h3>
                <div className="flex items-center gap-1 text-green-400 text-sm mt-2">
                  <ArrowUp className="w-4 h-4" />
                  <span>+15.2%</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Orta Sifariş</p>
                <h3 className="text-3xl text-white">₼{stats.averageOrder}</h3>
                <div className="flex items-center gap-1 text-red-400 text-sm mt-2">
                  <ArrowDown className="w-4 h-4" />
                  <span>-2.4%</span>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Həftəlik Satış</h3>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-white/60" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1f3a', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* Transaction Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl text-white">Əməliyyat Aktivliyi</h3>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-white/60" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1f3a', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="value" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Recent Transactions and Payment Methods */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2"
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <h3 className="text-xl text-white mb-6">Son Əməliyyatlar</h3>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">
                        {transaction.customer.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white">{transaction.customer}</div>
                      <div className="text-sm text-white/60">{transaction.id} • {transaction.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white">₼{transaction.amount}</div>
                    <div className={`text-sm ${
                      transaction.status === 'success' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {transaction.status === 'success' ? 'Uğurlu' : 'Gözləyir'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <h3 className="text-xl text-white mb-6">Ödəniş Metodları</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={paymentMethods}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {paymentMethods.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mt-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: method.color }}
                    />
                    <span className="text-white/80 text-sm">{method.name}</span>
                  </div>
                  <span className="text-white">{method.value}%</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
