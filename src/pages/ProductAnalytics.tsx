import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ScatterChart, Scatter, ZAxis, Cell,
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, Star, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';
import { categoryData, productData } from '../data/mockData';

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
            : `${entry.value}${entry.name.includes('%') || entry.name.includes('Margin') ? '%' : ''}`}
        </p>
      ))}
    </div>
  );
};

const marginColors = (margin: number) => {
  if (margin >= 40) return '#10b981';
  if (margin >= 30) return '#6366f1';
  if (margin >= 20) return '#f59e0b';
  return '#ef4444';
};

export default function ProductAnalytics() {
  const topProducts = [...productData].sort((a, b) => b.revenue - a.revenue).slice(0, 8);
  const lowPerformers = [...productData].sort((a, b) => a.margin - b.margin).slice(0, 5);
  const highReturnProducts = [...productData].filter(p => p.returnRate > 4).sort((a, b) => b.returnRate - a.returnRate);

  const scatterData = productData.map(p => ({
    x: p.margin,
    y: p.revenue,
    z: p.units,
    name: p.product,
    category: p.category,
    returnRate: p.returnRate,
  }));

  return (
    <div>
      <Header
        title="Product Analytics"
        subtitle="Category performance, margin analysis, and product-level insights"
      />

      {/* Category Performance Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
      >
        <h3 className="mb-1 text-base font-semibold text-slate-900">Category Performance Overview</h3>
        <p className="mb-4 text-xs text-slate-400">Revenue, profit, margin, and retention by product category</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-3 px-3 text-left font-semibold text-slate-500 text-xs">Category</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Revenue</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Profit</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Orders</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Margin</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Retention</th>
                <th className="py-3 px-3 text-left font-semibold text-slate-500 text-xs">Margin Bar</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((cat, i) => (
                <motion.tr
                  key={cat.category}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-3 px-3 font-medium text-slate-800 text-xs">{cat.category}</td>
                  <td className="py-3 px-3 text-right text-xs font-semibold text-slate-900">{formatCurrency(cat.revenue)}</td>
                  <td className="py-3 px-3 text-right text-xs text-emerald-600 font-medium">{formatCurrency(cat.profit)}</td>
                  <td className="py-3 px-3 text-right text-xs text-slate-600">{cat.orders.toLocaleString()}</td>
                  <td className="py-3 px-3 text-right">
                    <span className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
                      cat.margin >= 35 ? 'bg-emerald-50 text-emerald-700' :
                      cat.margin >= 25 ? 'bg-blue-50 text-blue-700' :
                      'bg-amber-50 text-amber-700'
                    }`}>
                      {cat.margin >= 30 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {cat.margin}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <span className={`text-xs font-semibold ${cat.retention >= 40 ? 'text-emerald-600' : cat.retention >= 30 ? 'text-blue-600' : 'text-amber-600'}`}>
                      {cat.retention}%
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="w-24 bg-slate-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(cat.margin / 50) * 100}%`, background: marginColors(cat.margin) }}
                      />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Charts Row */}
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Top Products by Revenue</h3>
          <p className="mb-4 text-xs text-slate-400">Best performing individual products</p>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={topProducts} layout="vertical" margin={{ left: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={formatCurrency} />
              <YAxis
                dataKey="product"
                type="category"
                tick={{ fontSize: 10, fill: '#64748b' }}
                axisLine={false}
                tickLine={false}
                width={140}
                tickFormatter={(v: string) => v.length > 20 ? v.substring(0, 20) + '...' : v}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="revenue" fill="#6366f1" radius={[0, 6, 6, 0]} barSize={20} name="Revenue">
                {topProducts.map((_, i) => (
                  <Cell key={i} fill={i < 3 ? '#6366f1' : '#a5b4fc'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Margin vs Revenue Scatter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Margin vs Revenue Matrix</h3>
          <p className="mb-4 text-xs text-slate-400">Bubble size = units sold — identify high-value, high-margin products</p>
          <ResponsiveContainer width="100%" height={320}>
            <ScatterChart margin={{ left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="x" name="Margin %" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false}
                label={{ value: 'Profit Margin %', position: 'bottom', fontSize: 11, fill: '#94a3b8' }} />
              <YAxis dataKey="y" name="Revenue" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false}
                tickFormatter={formatCurrency}
                label={{ value: 'Revenue', angle: -90, position: 'insideLeft', fontSize: 11, fill: '#94a3b8' }} />
              <ZAxis dataKey="z" range={[80, 500]} name="Units" />
              <Tooltip
                content={({ active, payload }: any) => {
                  if (!active || !payload?.length) return null;
                  const d = payload[0].payload;
                  return (
                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                      <p className="text-xs font-bold text-slate-800">{d.name}</p>
                      <p className="text-xs text-slate-500">{d.category}</p>
                      <p className="text-xs text-slate-600 mt-1">Margin: {d.x}%</p>
                      <p className="text-xs text-slate-600">Revenue: {formatCurrency(d.y)}</p>
                      <p className="text-xs text-slate-600">Units: {d.z.toLocaleString()}</p>
                    </div>
                  );
                }}
              />
              <Scatter data={scatterData}>
                {scatterData.map((entry, i) => (
                  <Cell key={i} fill={marginColors(entry.x)} fillOpacity={0.7} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom: Underperformers + High Returns */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Low Margin Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <h3 className="text-base font-semibold text-slate-900">Low Margin Products</h3>
          </div>
          <p className="mb-4 text-xs text-slate-400">Products with lowest profit margins requiring attention</p>
          <div className="space-y-3">
            {lowPerformers.map((p, i) => (
              <div key={p.product} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-600">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-xs font-medium text-slate-800">{p.product}</p>
                    <p className="text-[10px] text-slate-400">{p.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-amber-600">{p.margin}% margin</p>
                  <p className="text-[10px] text-slate-400">{formatCurrency(p.revenue)} rev</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* High Return Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-1">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <h3 className="text-base font-semibold text-slate-900">High Return Rate Products</h3>
          </div>
          <p className="mb-4 text-xs text-slate-400">Products exceeding 4% return rate threshold</p>
          <div className="space-y-3">
            {highReturnProducts.map((p) => (
              <div key={p.product} className="rounded-xl border border-red-100 bg-red-50/50 p-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs font-medium text-slate-800">{p.product}</p>
                    <p className="text-[10px] text-slate-400">{p.category}</p>
                  </div>
                  <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
                    {p.returnRate}% returns
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-amber-400" /> {p.rating}
                  </span>
                  <span>{formatCurrency(p.revenue)} revenue</span>
                  <span>{p.units.toLocaleString()} units</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-red-100">
                  <div
                    className="h-1.5 rounded-full bg-red-400"
                    style={{ width: `${Math.min(p.returnRate * 8, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
