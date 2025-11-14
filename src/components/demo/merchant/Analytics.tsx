import { motion } from 'motion/react';
import { Card } from '../../ui/card';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Users, Clock, Target } from 'lucide-react';

export function Analytics() {
  const monthlyData = [
    { month: 'Yan', revenue: 32000, customers: 450, transactions: 1200 },
    { month: 'Fev', revenue: 38000, customers: 520, transactions: 1450 },
    { month: 'Mar', revenue: 42000, customers: 580, transactions: 1680 },
    { month: 'Apr', revenue: 45000, customers: 620, transactions: 1820 },
    { month: 'May', revenue: 51000, customers: 680, transactions: 2100 },
    { month: 'İyn', revenue: 55000, customers: 720, transactions: 2340 }
  ];

  const hourlyData = [
    { hour: '06:00', orders: 12 },
    { hour: '09:00', orders: 45 },
    { hour: '12:00', orders: 89 },
    { hour: '15:00', orders: 67 },
    { hour: '18:00', orders: 134 },
    { hour: '21:00', orders: 98 },
    { hour: '24:00', orders: 34 }
  ];

  const customerBehavior = [
    { metric: 'Təkrar Alış', value: 85 },
    { metric: 'Məmnuniyyət', value: 92 },
    { metric: 'Tövsiyə', value: 78 },
    { metric: 'Loyallıq', value: 88 },
    { metric: 'Məşğulluq', value: 75 }
  ];

  const topProducts = [
    { name: 'Cappuccino', sales: 245, revenue: 1225 },
    { name: 'Hamburger', sales: 189, revenue: 1890 },
    { name: 'Caesar Salad', sales: 156, revenue: 1560 },
    { name: 'Pizza Margarita', sales: 134, revenue: 2010 },
    { name: 'Latte', sales: 123, revenue: 615 }
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/60 text-sm mb-1">Gəlir Artımı</p>
                <h3 className="text-3xl text-white">+24%</h3>
                <p className="text-green-400 text-sm mt-2">vs keçən ay</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
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
                <p className="text-white/60 text-sm mb-1">Təkrar Müştəri</p>
                <h3 className="text-3xl text-white">68%</h3>
                <p className="text-green-400 text-sm mt-2">+5% artım</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                <Users className="w-6 h-6 text-white" />
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
                <p className="text-white/60 text-sm mb-1">Orta Gözləmə</p>
                <h3 className="text-3xl text-white">2.3d</h3>
                <p className="text-green-400 text-sm mt-2">-15% azalma</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Clock className="w-6 h-6 text-white" />
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
                <p className="text-white/60 text-sm mb-1">Məqsəd İcra</p>
                <h3 className="text-3xl text-white">87%</h3>
                <p className="text-yellow-400 text-sm mt-2">Aylıq məqsəd</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Revenue & Customers Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <h3 className="text-xl text-white mb-6">Gəlir və Müştəri Trendi</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.6)" />
              <YAxis stroke="rgba(255,255,255,0.6)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1f3a', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Area type="monotone" dataKey="revenue" stroke="#10b981" fillOpacity={1} fill="url(#colorRevenue)" />
              <Area type="monotone" dataKey="customers" stroke="#6366f1" fillOpacity={1} fill="url(#colorCustomers)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </motion.div>

      {/* Hourly & Customer Behavior */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <h3 className="text-xl text-white mb-6">Saatlıq Sifariş Paylanması</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hourlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="hour" stroke="rgba(255,255,255,0.6)" />
                <YAxis stroke="rgba(255,255,255,0.6)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1f3a', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="orders" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
            <h3 className="text-xl text-white mb-6">Müştəri Davranışı</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={customerBehavior}>
                <PolarGrid stroke="rgba(255,255,255,0.2)" />
                <PolarAngleAxis dataKey="metric" stroke="rgba(255,255,255,0.6)" />
                <PolarRadiusAxis stroke="rgba(255,255,255,0.4)" />
                <Radar name="Göstəricilər" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>
      </div>

      {/* Top Products */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <h3 className="text-xl text-white mb-6">Ən Çox Satılan Məhsullar</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">#{index + 1}</span>
                  </div>
                  <div>
                    <div className="text-white">{product.name}</div>
                    <div className="text-sm text-white/60">{product.sales} satış</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white">₼{product.revenue}</div>
                  <div className="text-sm text-green-400">Gəlir</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
