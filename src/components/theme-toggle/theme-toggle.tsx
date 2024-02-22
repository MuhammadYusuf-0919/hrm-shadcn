import Iconify from '@/components/iconify';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/settings/toggle-theme';
import { Toggle } from '../ui/toggle';

type CompProps = {};

export default function ThemeToggle({}: CompProps) {
  const { theme, setTheme } = useTheme();
  return (
    <Toggle
      className="mr-2"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle italic"
    >
      <Iconify
        width={20}
        aria-hidden="true"
        icon="radix-icons:moon"
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />

      <Iconify
        width={20}
        aria-hidden="true"
        icon="radix-icons:sun"
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-inherit"
      />
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
