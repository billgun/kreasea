import nextSaturday from 'date-fns/nextSaturday';
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from 'lucide-react';

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import { Mail } from '../data';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface MessageDisplayProps {
  mail: Mail | null;
  className?: string;
}

export function MessageDisplay({ mail, className }: MessageDisplayProps) {
  const today = new Date();

  return (
    <div className={cn(`flex h-full flex-col`, className)}>
      {mail ? (
        <div className='flex flex-1 flex-col overflow-hidden'>
          <div className='flex items-center justify-between px-6 py-2 shadow-md '>
            <span className='text-lg font-semibold'>John Doe</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='icon' disabled={!mail}>
                  <MoreVertical className='h-4 w-4' />
                  <span className='sr-only'>More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                <DropdownMenuItem>Star thread</DropdownMenuItem>
                <DropdownMenuItem>Add label</DropdownMenuItem>
                <DropdownMenuItem>Mute thread</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator />
          <div className='flex-1 overflow-y-auto p-5'>
            <div className='mb-4 flex items-end gap-2'>
              <div className='flex flex-col gap-1'>
                <div className='inline-block rounded-lg bg-blue-500 px-4 py-2 text-white'>
                  Hello! How can I help you today?
                </div>
                <span className='text-sm text-gray-500'>10:14 AM</span>
              </div>
            </div>
            <div className='mb-4 ml-auto flex items-end justify-end gap-2'>
              <div className='flex flex-col gap-1 text-right'>
                <div className='inline-block rounded-lg bg-gray-300 px-4 py-2 text-gray-800'>
                  Hi John, I need assistance with my order.
                </div>
                <span className='text-sm text-gray-500'>10:15 AM</span>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between border-t px-6 py-4 '>
            <Input
              className='mr-4 flex-1 rounded-md px-4 py-2 shadow-md'
              placeholder='Type your message'
            />
            <Button>Send</Button>
          </div>
        </div>
      ) : (
        <div className='p-8 text-center text-muted-foreground'>
          No message selected
        </div>
      )}
    </div>
  );
}
