'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function ModeToggle() {
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
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
        </Button>
      ) : (
        <Button variant='outline' size='icon' onClick={() => setTheme('light')}>
          <Moon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ' />
        </Button>
      )}
      <span className='sr-only'>Toggle theme</span>
    </>
  );
}
