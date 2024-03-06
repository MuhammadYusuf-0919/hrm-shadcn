import Header from './header';
import Sidebar from './sidebar';
import { ReactNode } from 'react';
// import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Header />
        {/* <ScrollArea className="h-[92vh] text-primary"> */}
          <main className="w-full h-full px-4 md:px-8 py-6 md:py-10 overflow-y-auto">
            {children}
          </main>
          {/* <ScrollBar orientation="vertical" className='text-primary' />
        </ScrollArea> */}
      </div>
    </div>
  );
}

export default AppLayout;
