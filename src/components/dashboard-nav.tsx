import Iconify from './iconify';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const location = useLocation();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2 pt-4">
      {items.map((item, index) => {
        // const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.path && (
            <Link
              key={index}
              to={item.disabled ? '/' : item.path}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground text-white',
                  location.pathname === item.path ? 'bg-accent text-[#2BC48A]' : 'transparent',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                <Iconify
                  icon={`tabler:${item.icon}`}
                  className="mr-2 h-4 w-4"
                />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
