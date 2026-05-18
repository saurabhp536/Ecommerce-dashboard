import { motion } from 'framer-motion';
import { Lightbulb, AlertTriangle, Rocket, TrendingUp, Target, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { recommendations } from '../data/mockData';

const typeConfig = {
  insight: {
    icon: Lightbulb,
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    badgeLabel: 'Insight',
  },
  warning: {
    icon: AlertTriangle,
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
    badgeLabel: 'Warning',
  },
  opportunity: {
    icon: Rocket,
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
    badgeLabel: 'Opportunity',
  },
};

export default function Recommendations() {
  const insights = recommendations.filter(r => r.type === 'insight');
  const warnings = recommendations.filter(r => r.type === 'warning');
  const opportunities = recommendations.filter(r => r.type === 'opportunity');

  return (
    <div>
      <Header
        title="Business Recommendations"
        subtitle="Data-driven insights with actionable business recommendations"
      />

      {/* Summary Badges */}
      <div className="mb-6 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-2">
          <Lightbulb className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-semibold text-blue-700">{insights.length} Insights</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-4 py-2">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <span className="text-sm font-semibold text-amber-700">{warnings.length} Warnings</span>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-2">
          <Rocket className="h-4 w-4 text-emerald-600" />
          <span className="text-sm font-semibold text-emerald-700">{opportunities.length} Opportunities</span>
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {recommendations.map((rec, i) => {
          const config = typeConfig[rec.type];
          const Icon = config.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border ${config.border} ${config.bg} p-5 shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${config.iconBg}`}>
                  <Icon className={`h-5 w-5 ${config.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${config.badge}`}>
                      {config.badgeLabel}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{rec.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{rec.description}</p>

                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-1.5 border border-white/80">
                      <TrendingUp className="h-3.5 w-3.5 text-indigo-500" />
                      <span className="text-[11px] font-medium text-slate-700">{rec.impact}</span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-white/60 px-3 py-1.5 border border-white/80">
                      <Target className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-[11px] font-medium text-slate-500">{rec.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 p-6 text-white shadow-xl"
      >
        <h3 className="text-lg font-bold mb-1">📋 Recommended Action Plan</h3>
        <p className="text-xs text-slate-300 mb-5">Prioritized actions based on analysis findings</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              priority: 'P0 — Immediate',
              color: 'from-red-500 to-red-600',
              actions: [
                'Launch 7-14 day post-purchase email sequence',
                'Implement size guide for Running Shoes',
                'Review West region shipping cost structure',
              ],
            },
            {
              priority: 'P1 — This Quarter',
              color: 'from-amber-500 to-orange-500',
              actions: [
                'Develop Health & Beauty subscription model',
                'Plan July engagement campaign',
                'Cross-sell Books & Media with top categories',
              ],
            },
            {
              priority: 'P2 — Next Quarter',
              color: 'from-blue-500 to-indigo-500',
              actions: [
                'Evaluate South region fulfillment center',
                'Electronics accessory bundle strategy',
                'Implement RFM-based personalized marketing',
              ],
            },
          ].map((plan, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
              <span className={`inline-block rounded-full bg-gradient-to-r ${plan.color} px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-3`}>
                {plan.priority}
              </span>
              <ul className="space-y-2">
                {plan.actions.map((action, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-300">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-indigo-400 shrink-0" />
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* What Makes This Analysis Different */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-6 rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50 p-6"
      >
        <h3 className="text-sm font-bold text-indigo-900 mb-3">🎯 What Makes This Analysis Powerful</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Beyond Visualization', desc: 'Every chart leads to a specific business recommendation' },
            { title: 'Quantified Impact', desc: 'Each insight includes estimated revenue/cost impact' },
            { title: 'Analyst Thinking', desc: 'Connects metrics to root causes and solutions' },
            { title: 'Prioritized Actions', desc: 'Recommendations ranked by urgency and business value' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white/60 border border-white/80 p-3">
              <p className="text-xs font-bold text-indigo-800 mb-1">{item.title}</p>
              <p className="text-[11px] text-indigo-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
