import { useState } from 'react';
import Sidebar from './components/Sidebar';
import ExecutiveOverview from './pages/ExecutiveOverview';
import CustomerAnalytics from './pages/CustomerAnalytics';
import ProductAnalytics from './pages/ProductAnalytics';
import RegionalInsights from './pages/RegionalInsights';
import Recommendations from './pages/Recommendations';
import Methodology from './pages/Methodology';

const pages: Record<string, React.FC> = {
  executive: ExecutiveOverview,
  customer: CustomerAnalytics,
  product: ProductAnalytics,
  regional: RegionalInsights,
  recommendations: Recommendations,
  methodology: Methodology,
};

export default function App() {
  const [activePage, setActivePage] = useState('executive');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const ActivePage = pages[activePage] || ExecutiveOverview;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      <Sidebar
        activePage={activePage}
        onPageChange={setActivePage}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'ml-[68px]' : 'ml-64'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <ActivePage />
        </div>
      </main>
    </div>
  );
}
