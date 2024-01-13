import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BellIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AvatarNav } from './avatar-nav';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'></div>
          <nav className='flex items-center gap-1'>
            <Button variant={'outline'} asChild>
              <Link href={'/login'}>Login</Link>
            </Button>
            <Button asChild>
              <Link href={'/signup'}>Get Started</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
