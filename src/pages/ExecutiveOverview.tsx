import { motion } from 'framer-motion';
import {
  Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ComposedChart, Line, PieChart, Pie, Cell,
} from 'recharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import { executiveKPIs, monthlyRevenue, categoryData, regionSummary } from '../data/mockData';

const COLORS = ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd'];

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value}`;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
      <p className="text-xs font-semibold text-slate-600 mb-2">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} className="text-xs" style={{ color: entry.color }}>
          <span className="font-medium">{entry.name}:</span>{' '}
          {typeof entry.value === 'number' && entry.value > 100
            ? formatCurrency(entry.value)
            : entry.value?.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

export default function ExecutiveOverview() {
  const topCategories = categoryData.slice(0, 5);
  const pieData = regionSummary.map(r => ({ name: r.region, value: r.revenue }));

  return (
    <div>
      <Header
        title="Executive Overview"
        subtitle="Key performance indicators across all business verticals"
      />

      {/* KPI Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-6">
        {executiveKPIs.map((kpi, i) => (
          <KPICard key={kpi.label} {...kpi} index={i} />
        ))}
      </div>

      {/* Revenue & Profit Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-6 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Revenue & Profit Trend</h3>
            <p className="text-xs text-slate-400">18-month rolling performance</p>
          </div>
          <div className="flex gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" /> Revenue
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Profit
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Orders
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <ComposedChart data={monthlyRevenue}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={formatCurrency} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area yAxisId="left" type="monotone" dataKey="revenue" fill="url(#revGrad)" stroke="#6366f1" strokeWidth={2.5} name="Revenue" />
            <Area yAxisId="left" type="monotone" dataKey="profit" fill="url(#profitGrad)" stroke="#10b981" strokeWidth={2} name="Profit" />
            <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#f59e0b" strokeWidth={2} dot={false} name="Orders" />
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bottom row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Top Categories by Revenue</h3>
          <p className="mb-4 text-xs text-slate-400">Revenue distribution across product categories</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={topCategories} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={formatCurrency} />
              <YAxis dataKey="category" type="category" tick={{ fontSize: 11, fill: '#64748b' }} axisLine={false} tickLine={false} width={120} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="revenue" fill="#6366f1" radius={[0, 6, 6, 0]} name="Revenue" barSize={24} />
              <Bar dataKey="profit" fill="#10b981" radius={[0, 6, 6, 0]} name="Profit" barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Regional Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Revenue by Region</h3>
          <p className="mb-4 text-xs text-slate-400">Geographic revenue distribution</p>
          <div className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={240}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-3">
              {regionSummary.map((r, i) => (
                <div key={r.region} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full" style={{ background: COLORS[i] }} />
                    <span className="text-sm font-medium text-slate-700">{r.region}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-slate-900">{formatCurrency(r.revenue)}</span>
                    <span className="ml-2 text-xs text-slate-400">{r.margin}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
