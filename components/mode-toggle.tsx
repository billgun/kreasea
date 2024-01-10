'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ModeToggleProps {
  className?: string;
}
export function ModeToggle({ className }: ModeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === 'light' ? (
        <Button variant='outline' size='icon' onClick={() => setTheme('dark')}>
          <Sun
            className={cn(
              `h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all`,
              className
            )}
          />
        </Button>
      ) : (
        <Button variant='outline' size='icon' onClick={() => setTheme('light')}>
          <Moon
            className={cn(
              `h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all`,
              className
            )}
          />
        </Button>
      )}
      <span className='sr-only'>Toggle theme</span>
    </>
  );
}
