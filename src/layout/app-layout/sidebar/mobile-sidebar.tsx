import { useState } from 'react';
import Iconify from '@/components/iconify';
import { navItems } from '@/data/navigation';
import { DashboardNav } from '@/layout/app-layout/sidebar/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="cursor-pointer">
          <Iconify icon="radix-icons:hamburger-menu" />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0 !bg-[#2A3E4C]">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="ml-2 lg:block">
                <Link to="/">
                  <h3 className="text-[#2BC48A] text-3xl font-extrabold tracking-[0.5rem]">
                    HRM
                  </h3>
                </Link>
              </div>
              <div className="space-y-1">
                <DashboardNav items={navItems} setOpen={setOpen} />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
