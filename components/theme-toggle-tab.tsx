'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ThemeToggleTabProps {
  className?: string;
}
export function ThemeToggleTab({ className }: ThemeToggleTabProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onThemeChange = (value: string) => {
    setTheme(value);
  };

  return (
    <>
      <Tabs
        defaultValue={theme}
        className={className}
        onValueChange={onThemeChange}
      >
        <TabsList className='w-full'>
          <TabsTrigger className='w-1/2' value='light'>
            Light
          </TabsTrigger>
          <TabsTrigger className='w-1/2' value='dark'>
            Dark
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <span className='sr-only'>Toggle theme</span>
    </>
  );
}
