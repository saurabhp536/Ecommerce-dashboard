import { motion } from 'framer-motion';
import { Database, Code2, BarChart3, FileSpreadsheet, GitBranch, Layers } from 'lucide-react';
import Header from '../components/Header';
import { sqlQueries, pythonSnippets } from '../data/mockData';
import { useState } from 'react';

export default function Methodology() {
  const [activeTab, setActiveTab] = useState<'overview' | 'sql' | 'python'>('overview');

  return (
    <div>
      <Header
        title="Methodology & Code"
        subtitle="Technical documentation — SQL queries, Python scripts, and data pipeline"
      />

      {/* Tab Navigation */}
      <div className="mb-6 flex gap-1 rounded-xl bg-slate-100 p-1 w-fit">
        {[
          { id: 'overview' as const, label: 'Tech Stack', icon: Layers },
          { id: 'sql' as const, label: 'SQL Queries', icon: Database },
          { id: 'python' as const, label: 'Python Code', icon: Code2 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Data Pipeline */}
          <div className="mb-6 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4">Data Pipeline Architecture</h3>
            <div className="flex flex-col sm:flex-row items-stretch gap-3">
              {[
                { icon: FileSpreadsheet, label: 'Raw Data', sub: 'CSV/Excel', color: 'from-amber-500 to-orange-500', desc: 'Olist, Superstore, Amazon datasets' },
                { icon: Code2, label: 'Python', sub: 'Cleaning + EDA', color: 'from-blue-500 to-cyan-500', desc: 'Pandas, NumPy, Matplotlib' },
                { icon: Database, label: 'SQL', sub: 'KPI Queries', color: 'from-purple-500 to-indigo-500', desc: 'Aggregations, CTEs, Window functions' },
                { icon: BarChart3, label: 'Power BI', sub: 'Dashboard', color: 'from-emerald-500 to-teal-500', desc: 'Interactive visualizations' },
              ].map((step, i) => (
                <div key={i} className="flex-1 flex flex-col items-center relative">
                  <div className={`w-full rounded-xl bg-gradient-to-br ${step.color} p-4 text-white text-center`}>
                    <step.icon className="h-8 w-8 mx-auto mb-2 opacity-90" />
                    <p className="text-sm font-bold">{step.label}</p>
                    <p className="text-xs opacity-80">{step.sub}</p>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 text-center">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden sm:block absolute -right-3 top-1/3 z-10">
                      <div className="text-slate-300 text-lg">→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Datasets */}
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                name: 'Olist E-commerce Dataset',
                records: '100K+ orders',
                fields: 'Orders, customers, products, reviews, geolocation',
                source: 'Brazilian e-commerce public dataset',
                color: 'border-l-indigo-500',
              },
              {
                name: 'Superstore Dataset',
                records: '9,994 records',
                fields: 'Orders, returns, customers, segments, regions',
                source: 'Tableau sample dataset',
                color: 'border-l-emerald-500',
              },
              {
                name: 'Amazon Sales Dataset',
                records: '50K+ records',
                fields: 'Products, pricing, ratings, categories, seller data',
                source: 'Kaggle marketplace data',
                color: 'border-l-amber-500',
              },
            ].map((ds, i) => (
              <motion.div
                key={ds.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border border-slate-200/60 border-l-4 ${ds.color} bg-white p-4 shadow-sm`}
              >
                <h4 className="text-sm font-bold text-slate-900 mb-2">{ds.name}</h4>
                <div className="space-y-1.5 text-xs text-slate-500">
                  <p><span className="font-medium text-slate-600">Records:</span> {ds.records}</p>
                  <p><span className="font-medium text-slate-600">Fields:</span> {ds.fields}</p>
                  <p><span className="font-medium text-slate-600">Source:</span> {ds.source}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills & Tools */}
          <div className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4">Skills Demonstrated</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { category: 'SQL', skills: ['Complex CTEs & Subqueries', 'Window Functions (NTILE, ROW_NUMBER)', 'Date Aggregations', 'Multi-table JOINs', 'Performance Optimization'] },
                { category: 'Python', skills: ['Pandas Data Wrangling', 'NumPy Computations', 'Matplotlib/Seaborn Viz', 'Feature Engineering', 'Cohort Analysis'] },
                { category: 'Business Analysis', skills: ['KPI Definition & Tracking', 'RFM Segmentation', 'Churn Analysis', 'Revenue Forecasting', 'Stakeholder Reporting'] },
                { category: 'Power BI', skills: ['DAX Measures', 'Calculated Columns', 'Interactive Filters', 'Drill-through Reports', 'Dashboard Design'] },
                { category: 'Data Visualization', skills: ['Chart Selection', 'Color Theory', 'Information Hierarchy', 'Responsive Layouts', 'Storytelling with Data'] },
                { category: 'Domain Knowledge', skills: ['E-commerce Metrics', 'Customer Lifecycle', 'Retention Strategies', 'Profit Margin Analysis', 'Regional Analytics'] },
              ].map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="rounded-xl bg-slate-50 p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch className="h-4 w-4 text-indigo-500" />
                    <h4 className="text-sm font-bold text-slate-800">{group.category}</h4>
                  </div>
                  <ul className="space-y-1.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="h-1 w-1 rounded-full bg-indigo-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* SQL Tab */}
      {activeTab === 'sql' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          {sqlQueries.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200/60 bg-white shadow-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 border-b border-slate-100">
                <Database className="h-4 w-4 text-indigo-500" />
                <h4 className="text-sm font-bold text-slate-800">{q.title}</h4>
              </div>
              <pre className="p-5 overflow-x-auto text-xs leading-relaxed text-slate-700 bg-slate-950 text-slate-300 font-mono">
                <code>{q.query}</code>
              </pre>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Python Tab */}
      {activeTab === 'python' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          {pythonSnippets.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200/60 bg-white shadow-sm overflow-hidden"
            >
              <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 border-b border-slate-100">
                <Code2 className="h-4 w-4 text-blue-500" />
                <h4 className="text-sm font-bold text-slate-800">{p.title}</h4>
              </div>
              <pre className="p-5 overflow-x-auto text-xs leading-relaxed bg-slate-950 text-green-400 font-mono">
                <code>{p.code}</code>
              </pre>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
