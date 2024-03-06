import { cn } from "@/lib/utils";
import { UserNav } from "./user-nav";
import Notification from "@/modules/notification";
import ThemeToggle from "./theme-toggle/theme-toggle";
import { MobileSidebar } from "../sidebar/mobile-sidebar";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 shadow-sm bg-background/95 bg-popover dark:bg-card backdrop-blur z-20">
      <nav className="h-14 md:h-16 flex items-center justify-between px-4 md:px-10 py-4 md:py-6">
        <div className="hidden lg:block">
          Users Management
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Notification />
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
