'use client';

import { Button } from '@/components/ui/button';
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
import { LogOutIcon, UserCogIcon } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';
import { usePathname, useRouter } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import { revalidatePath } from 'next/cache';

export function AvatarNav() {
  const router = useRouter();
  const pathname = usePathname();
  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    if (!(pathname === '/')) {
      router.push('/');
    }
    return router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='flex w-full justify-start'>
          <Avatar className='h-9 w-9'>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <DropdownMenuLabel className='font-normal '>
            <div className='flex flex-col space-y-1 text-left'>
              <p className='text-sm font-medium leading-none'>shadcn</p>
              <p className='text-xs leading-none text-muted-foreground'>
                m@example.com
              </p>
            </div>
          </DropdownMenuLabel>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuItem>
          <ModeToggle />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Terms of Use</DropdownMenuItem>
          <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
          <DropdownMenuItem>
            <UserCogIcon className='mr-2 h-4 w-4' />
            Account Setting
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          <LogOutIcon className='mr-2 h-4 w-4' />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
