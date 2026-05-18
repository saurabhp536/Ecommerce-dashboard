import { motion } from 'framer-motion';
import {
  Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis,
} from 'recharts';
import Header from '../components/Header';
import {
  churnData, customerSegments, rfmData, cohortData, repeatPurchaseData,
} from '../data/mockData';

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

function getCohortColor(value: number) {
  if (value >= 80) return 'bg-indigo-600 text-white';
  if (value >= 40) return 'bg-indigo-500 text-white';
  if (value >= 25) return 'bg-indigo-400 text-white';
  if (value >= 15) return 'bg-indigo-300 text-indigo-900';
  if (value >= 10) return 'bg-indigo-200 text-indigo-800';
  if (value > 0) return 'bg-indigo-100 text-indigo-700';
  return 'bg-slate-50 text-slate-300';
}

export default function CustomerAnalytics() {
  return (
    <div>
      <Header
        title="Customer Analytics"
        subtitle="Deep dive into customer behavior, retention, and segmentation"
      />

      {/* Top Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: 'Total Customers', value: '41,240', sub: '+12.3% YoY' },
          { label: 'Repeat Customers', value: '14,310', sub: '34.7% of total' },
          { label: 'Avg Purchase Frequency', value: '2.8x', sub: '+0.3 vs last year' },
          { label: '30-Day Repeat Rate', value: '18.4%', sub: '2.3x higher retention' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-slate-200/60 bg-white p-4 shadow-sm"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-slate-900">{stat.value}</p>
            <p className="mt-1 text-xs text-indigo-500 font-medium">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Row: Churn Trend + Customer Segments */}
      <div className="mb-6 grid gap-6 lg:grid-cols-3">
        {/* Churn & Retention Trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="lg:col-span-2 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Churn & Retention Trend</h3>
          <p className="mb-4 text-xs text-slate-400">Monthly customer churn rate and new vs lost customers</p>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={churnData}>
              <defs>
                <linearGradient id="churnGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} domain={[0, 10]} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area yAxisId="left" type="monotone" dataKey="churnRate" fill="url(#churnGrad)" stroke="#ef4444" strokeWidth={2} name="Churn %" />
              <Bar yAxisId="right" dataKey="newCustomers" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={12} name="New Customers" />
              <Bar yAxisId="right" dataKey="lostCustomers" fill="#f97316" radius={[4, 4, 0, 0]} barSize={12} name="Lost Customers" />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Customer Segments Pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Customer Segments</h3>
          <p className="mb-4 text-xs text-slate-400">Distribution by value tier</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={customerSegments}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="count"
                nameKey="segment"
                stroke="none"
              >
                {customerSegments.map((s, i) => (
                  <Cell key={i} fill={s.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {customerSegments.map((s) => (
              <div key={s.segment} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                  <span className="font-medium text-slate-700">{s.segment}</span>
                </div>
                <span className="text-slate-500">{s.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RFM Scatter Plot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mb-6 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
      >
        <h3 className="mb-1 text-base font-semibold text-slate-900">RFM Segmentation Analysis</h3>
        <p className="mb-4 text-xs text-slate-400">Recency vs Frequency — bubble size = customer count, color = segment</p>
        <ResponsiveContainer width="100%" height={320}>
          <ScatterChart margin={{ left: 10, right: 30, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="recency" name="Recency (days)" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} label={{ value: 'Recency (days)', position: 'bottom', fontSize: 11, fill: '#94a3b8' }} />
            <YAxis dataKey="frequency" name="Frequency" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} label={{ value: 'Frequency', angle: -90, position: 'insideLeft', fontSize: 11, fill: '#94a3b8' }} />
            <ZAxis dataKey="count" range={[100, 800]} name="Customers" />
            <Tooltip
              content={({ active, payload }: any) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload;
                return (
                  <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                    <p className="text-xs font-bold mb-1" style={{ color: d.color }}>{d.segment}</p>
                    <p className="text-xs text-slate-600">Recency: {d.recency} days</p>
                    <p className="text-xs text-slate-600">Frequency: {d.frequency}x</p>
                    <p className="text-xs text-slate-600">Monetary: ${d.monetary}</p>
                    <p className="text-xs text-slate-600">Customers: {d.count.toLocaleString()}</p>
                  </div>
                );
              }}
            />
            <Scatter data={rfmData}>
              {rfmData.map((entry, i) => (
                <Cell key={i} fill={entry.color} fillOpacity={0.7} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Bottom row: Cohort + Repeat Purchase */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Cohort Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Cohort Retention Analysis</h3>
          <p className="mb-4 text-xs text-slate-400">% of customers retained by monthly cohort</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="py-2 px-2 text-left font-medium text-slate-500">Cohort</th>
                  {['M0', 'M1', 'M2', 'M3', 'M4', 'M5'].map(m => (
                    <th key={m} className="py-2 px-2 text-center font-medium text-slate-500">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {cohortData.map((row) => (
                  <tr key={row.cohort}>
                    <td className="py-1.5 px-2 font-medium text-slate-700 whitespace-nowrap">{row.cohort}</td>
                    {[row.month0, row.month1, row.month2, row.month3, row.month4, row.month5].map((val, i) => (
                      <td key={i} className="py-1.5 px-2 text-center">
                        <span className={`inline-block w-12 rounded-md px-2 py-1 text-[10px] font-semibold ${getCohortColor(val)}`}>
                          {val > 0 ? `${val}%` : '—'}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Repeat Purchase Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
        >
          <h3 className="mb-1 text-base font-semibold text-slate-900">Repeat Purchase Rate</h3>
          <p className="mb-4 text-xs text-slate-400">Time to second purchase and associated revenue</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={repeatPurchaseData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="timeframe" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={formatCurrency} />
              <Tooltip content={<CustomTooltip />} />
              <Bar yAxisId="left" dataKey="rate" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={32} name="Repeat Rate %" />
              <Bar yAxisId="right" dataKey="revenue" fill="#10b981" radius={[6, 6, 0, 0]} barSize={32} name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-3">
            <p className="text-xs text-amber-800 font-medium">💡 Key Insight</p>
            <p className="text-xs text-amber-700 mt-1">
              Customers purchasing within 30 days show <strong>2.3x higher retention</strong> than those
              with 60+ day gaps. Early engagement campaigns are critical.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
