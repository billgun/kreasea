'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { FacebookIcon, LinkIcon, ShareIcon } from 'lucide-react';
import { Icons } from './icons';

interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ShareToSocial({ className, ...props }: ProfileProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ShareIcon className='h-5 w-5 stroke-muted-foreground' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Share this post</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LinkIcon className='mr-2 h-4 w-4' />
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icons.twitter className='mr-2 h-4 w-4 fill-current' />
          Share on X
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FacebookIcon className='mr-2 h-4 w-4' />
          Share on Facebook
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
