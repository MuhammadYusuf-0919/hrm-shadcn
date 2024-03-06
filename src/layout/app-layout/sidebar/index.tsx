import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigation';
import { DashboardNav } from '@/layout/app-layout/sidebar/dashboard-nav';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r lg:block w-72 bg-[#2A3E4C]`
      )}
    >
      <div className="space-y-4 py-2">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <div className="ml-4 lg:block">
              <Link to="/">
                <h3 className="text-[#2BC48A] text-3xl font-extrabold tracking-[0.5rem]">HRM</h3>
              </Link>
            </div>
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </nav>
  );
}
