import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Download, Mail, Phone, Star, TrendingUp } from 'lucide-react';
import { Card } from '../../ui/card';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

export function CustomerManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const customers = [
    {
      id: 'CUST-001',
      name: 'Anar Məmmədov',
      email: 'anar.m@example.com',
      phone: '+994 50 123 45 67',
      totalSpent: 2450,
      orders: 34,
      lastOrder: '2 gün əvvəl',
      loyalty: 85,
      status: 'VIP'
    },
    {
      id: 'CUST-002',
      name: 'Leyla Həsənova',
      email: 'leyla.h@example.com',
      phone: '+994 55 234 56 78',
      totalSpent: 1890,
      orders: 28,
      lastOrder: '5 gün əvvəl',
      loyalty: 72,
      status: 'Gold'
    },
    {
      id: 'CUST-003',
      name: 'Rəşad Əliyev',
      email: 'rashad.a@example.com',
      phone: '+994 70 345 67 89',
      totalSpent: 1230,
      orders: 19,
      lastOrder: '1 həftə əvvəl',
      loyalty: 58,
      status: 'Silver'
    },
    {
      id: 'CUST-004',
      name: 'Nigar İsmayılova',
      email: 'nigar.i@example.com',
      phone: '+994 51 456 78 90',
      totalSpent: 890,
      orders: 12,
      lastOrder: '3 gün əvvəl',
      loyalty: 45,
      status: 'Regular'
    },
    {
      id: 'CUST-005',
      name: 'Elvin Quliyev',
      email: 'elvin.q@example.com',
      phone: '+994 77 567 89 01',
      totalSpent: 3240,
      orders: 45,
      lastOrder: 'Bu gün',
      loyalty: 92,
      status: 'VIP'
    }
  ];

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VIP': return 'from-purple-500 to-pink-500';
      case 'Gold': return 'from-yellow-500 to-orange-500';
      case 'Silver': return 'from-gray-400 to-gray-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Müştəri axtar..."
            className="pl-10 bg-white/5 border-white/10 text-white"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-gradient-to-r from-green-500 to-emerald-500">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-1">Ümumi Müştəri</div>
          <div className="text-2xl text-white">1,247</div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-1">VIP Müştəri</div>
          <div className="text-2xl text-white">89</div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-1">Orta LTV</div>
          <div className="text-2xl text-white">₼1,850</div>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-white/10 to-white/5 border-white/10">
          <div className="text-white/60 text-sm mb-1">Təkrar Alış</div>
          <div className="text-2xl text-white">68%</div>
        </Card>
      </div>

      {/* Customer List */}
      <div className="space-y-4">
        {filteredCustomers.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6 bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:border-white/20 transition-all">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Customer Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${getStatusColor(customer.status)} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xl">
                      {customer.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white truncate">{customer.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs bg-gradient-to-r ${getStatusColor(customer.status)} text-white`}>
                        {customer.status}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{customer.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <span>{customer.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div>
                    <div className="text-white/60 text-xs mb-1">Xərc</div>
                    <div className="text-white">₼{customer.totalSpent}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Sifarişlər</div>
                    <div className="text-white">{customer.orders}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Son Sifariş</div>
                    <div className="text-white text-sm">{customer.lastOrder}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs mb-1">Loyallıq</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                          style={{ width: `${customer.loyalty}%` }}
                        />
                      </div>
                      <span className="text-white text-sm">{customer.loyalty}%</span>
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
