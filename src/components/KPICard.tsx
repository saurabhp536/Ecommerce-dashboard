import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Package,
  Users,
  ShoppingCart,
  Heart,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

interface KPICardProps {
  label: string;
  value: string;
  change: number;
  prefix?: string;
  suffix?: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, React.ElementType> = {
  dollar: DollarSign,
  trending: TrendingUp,
  package: Package,
  users: Users,
  cart: ShoppingCart,
  heart: Heart,
};

export default function KPICard({ label, value, change, prefix, suffix, icon, index }: KPICardProps) {
  const Icon = iconMap[icon] || DollarSign;
  const isPositive = change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</p>
          <p className="text-2xl font-bold text-slate-900">
            {prefix}{value}{suffix}
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200/50">
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {isPositive ? (
          <ArrowUpRight className="h-4 w-4 text-emerald-500" />
        ) : (
          <ArrowDownRight className="h-4 w-4 text-red-500" />
        )}
        <span className={`text-sm font-semibold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
          {Math.abs(change)}%
        </span>
        <span className="text-xs text-slate-400">vs last period</span>
      </div>
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50" />
    </motion.div>
  );
}
