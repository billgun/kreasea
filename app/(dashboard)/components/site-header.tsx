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

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 md:w-auto md:flex-none'>
            {/* <Button
              variant='outline'
              className={cn(
                'relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64'
              )}
            >
              <span className='hidden lg:inline-flex'>
                Search your favorite creator...
              </span>
              <span className='inline-flex lg:hidden'>Search...</span>
            </Button> */}
          </div>
          <nav className='flex items-center gap-1'>
            <Button variant='outline' size='icon'>
              <BellIcon className='h-[1.2rem] w-[1.2rem]' />
            </Button>
            <AvatarNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
