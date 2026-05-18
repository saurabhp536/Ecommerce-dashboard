import {
  LayoutDashboard,
  Users,
  Package,
  MapPin,
  Code2,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  BarChart3,
} from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { id: 'executive', label: 'Executive Overview', icon: LayoutDashboard },
  { id: 'customer', label: 'Customer Analytics', icon: Users },
  { id: 'product', label: 'Product Analytics', icon: Package },
  { id: 'regional', label: 'Regional Insights', icon: MapPin },
  { id: 'recommendations', label: 'Recommendations', icon: Lightbulb },
  { id: 'methodology', label: 'Methodology & Code', icon: Code2 },
];

export default function Sidebar({ activePage, onPageChange, collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-full flex-col border-r border-slate-200/60 bg-white transition-all duration-300 ${
        collapsed ? 'w-[68px]' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="flex h-16 items-center gap-3 border-b border-slate-100 px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-200/50">
          <BarChart3 className="h-5 w-5 text-white" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <h1 className="text-sm font-bold text-slate-900 truncate">E-Commerce Analytics</h1>
            <p className="text-[10px] text-slate-400 truncate">Retention & Sales Dashboard</p>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 shadow-sm'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon
                className={`h-5 w-5 shrink-0 transition-colors ${
                  isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'
                }`}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-slate-100 p-3">
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
    </aside>
  );
}
