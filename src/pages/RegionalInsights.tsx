import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { MapPin, Truck, TrendingUp, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import { regionalData, regionSummary } from '../data/mockData';

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
            : entry.value}
        </p>
      ))}
    </div>
  );
};

const regionColors: Record<string, string> = {
  West: '#6366f1',
  East: '#10b981',
  South: '#f59e0b',
  Central: '#8b5cf6',
};

const deliveryColor = (days: number) => {
  if (days <= 3) return 'text-emerald-600 bg-emerald-50';
  if (days <= 3.5) return 'text-blue-600 bg-blue-50';
  if (days <= 4) return 'text-amber-600 bg-amber-50';
  return 'text-red-600 bg-red-50';
};

export default function RegionalInsights() {
  const radarData = regionSummary.map(r => ({
    region: r.region,
    revenue: (r.revenue / 1500000) * 100,
    profit: (r.profit / 400000) * 100,
    orders: (r.orders / 20000) * 100,
    margin: r.margin * 3,
    delivery: ((5 - r.avgDelivery) / 2) * 100,
  }));

  return (
    <div>
      <Header
        title="Regional Insights"
        subtitle="Geographic performance analysis with delivery metrics"
      />

      {/* Region Cards */}
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {regionSummary.map((r, i) => (
          <motion.div
            key={r.region}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: regionColors[r.region] }} />
                <span className="text-sm font-bold text-slate-900">{r.region}</span>
              </div>
              <MapPin className="h-4 w-4 text-slate-300" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1"><DollarSign className="h-3 w-3" /> Revenue</span>
                <span className="text-xs font-semibold text-slate-900">{formatCurrency(r.revenue)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> Margin</span>
                <span className={`text-xs font-semibold ${r.margin >= 28 ? 'text-emerald-600' : 'text-amber-600'}`}>{r.margin}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1"><Truck className="h-3 w-3" /> Delivery</span>
                <span className={`text-xs font-semibold rounded-full px-2 py-0.5 ${deliveryColor(r.avgDelivery)}`}>{r.avgDelivery} days</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        {/* Region Revenue Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Revenue vs Profit by Region</h3>
          <p className="mb-4 text-xs text-slate-400">Comparing revenue generation with profit extraction</p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={regionSummary}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="region" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={formatCurrency} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="revenue" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={32} name="Revenue" />
              <Bar dataKey="profit" fill="#10b981" radius={[6, 6, 0, 0]} barSize={32} name="Profit" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Regional Performance Radar</h3>
          <p className="mb-4 text-xs text-slate-400">Multi-dimensional comparison across key metrics</p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={[
              { metric: 'Revenue', West: radarData[0].revenue, East: radarData[1].revenue, South: radarData[2].revenue, Central: radarData[3].revenue },
              { metric: 'Profit', West: radarData[0].profit, East: radarData[1].profit, South: radarData[2].profit, Central: radarData[3].profit },
              { metric: 'Orders', West: radarData[0].orders, East: radarData[1].orders, South: radarData[2].orders, Central: radarData[3].orders },
              { metric: 'Margin', West: radarData[0].margin, East: radarData[1].margin, South: radarData[2].margin, Central: radarData[3].margin },
              { metric: 'Delivery', West: radarData[0].delivery, East: radarData[1].delivery, South: radarData[2].delivery, Central: radarData[3].delivery },
            ]}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: '#64748b' }} />
              <PolarRadiusAxis tick={false} axisLine={false} />
              <Radar name="West" dataKey="West" stroke="#6366f1" fill="#6366f1" fillOpacity={0.15} strokeWidth={2} />
              <Radar name="East" dataKey="East" stroke="#10b981" fill="#10b981" fillOpacity={0.15} strokeWidth={2} />
              <Radar name="South" dataKey="South" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} strokeWidth={2} />
              <Radar name="Central" dataKey="Central" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} strokeWidth={2} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {Object.entries(regionColors).map(([region, color]) => (
              <span key={region} className="flex items-center gap-1.5 text-xs text-slate-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
                {region}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* State-level Heatmap Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mb-6 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
      >
        <h3 className="mb-1 text-base font-semibold text-slate-900">State-Level Performance Heatmap</h3>
        <p className="mb-4 text-xs text-slate-400">Revenue, margin, and delivery performance by state</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-3 px-3 text-left font-semibold text-slate-500 text-xs">State</th>
                <th className="py-3 px-3 text-left font-semibold text-slate-500 text-xs">Region</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Revenue</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Profit</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Orders</th>
                <th className="py-3 px-3 text-right font-semibold text-slate-500 text-xs">Margin</th>
                <th className="py-3 px-3 text-center font-semibold text-slate-500 text-xs">Avg Delivery</th>
                <th className="py-3 px-3 text-left font-semibold text-slate-500 text-xs">Revenue Heat</th>
              </tr>
            </thead>
            <tbody>
              {[...regionalData].sort((a, b) => b.revenue - a.revenue).map((state, i) => {
                const maxRev = Math.max(...regionalData.map(r => r.revenue));
                const heatPct = (state.revenue / maxRev) * 100;
                return (
                  <motion.tr
                    key={state.state}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-3 px-3 font-medium text-slate-800 text-xs">{state.state}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex items-center gap-1.5 text-xs">
                        <span className="h-2 w-2 rounded-full" style={{ background: regionColors[state.region] }} />
                        {state.region}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right text-xs font-semibold text-slate-900">{formatCurrency(state.revenue)}</td>
                    <td className="py-3 px-3 text-right text-xs text-emerald-600 font-medium">{formatCurrency(state.profit)}</td>
                    <td className="py-3 px-3 text-right text-xs text-slate-600">{state.orders.toLocaleString()}</td>
                    <td className="py-3 px-3 text-right">
                      <span className={`text-xs font-semibold ${state.margin >= 29 ? 'text-emerald-600' : state.margin >= 26 ? 'text-blue-600' : 'text-amber-600'}`}>
                        {state.margin}%
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${deliveryColor(state.avgDelivery)}`}>
                        {state.avgDelivery}d
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full transition-all duration-700"
                          style={{
                            width: `${heatPct}%`,
                            background: `linear-gradient(90deg, ${regionColors[state.region]}80, ${regionColors[state.region]})`,
                          }}
                        />
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Delivery vs Margin Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-5"
      >
        <h4 className="text-sm font-bold text-indigo-900 mb-2">📊 Regional Analysis Key Finding</h4>
        <p className="text-xs text-indigo-800 leading-relaxed">
          <strong>Delivery speed strongly correlates with profit margins.</strong> The East region achieves the fastest average delivery (2.8 days)
          and the highest margin (29.6%), while the South region has the slowest delivery (4.1 days) and comparatively lower margins (27.1%).
          Investment in South region fulfillment infrastructure could yield an estimated <strong>$62K improvement in annual profit</strong>.
          The West region, despite leading in revenue ($1.42M), has the lowest margin (22.1%) — suggesting aggressive pricing or high shipping costs.
        </p>
      </motion.div>
    </div>
  );
}
