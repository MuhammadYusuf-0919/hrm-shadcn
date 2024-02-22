import Header from './header';
import Sidebar from './sidebar';
import { ReactNode } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Header />
        <ScrollArea className="w-full h-[calc(100vh-80px)] h-[96vh]">
          <main className="w-full h-full absolute flex-grow px-4 md:px-8 py-6 md:py-10 overflowy-auto">
            {children}
          </main>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
}

export default AppLayout;
