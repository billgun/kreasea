'use client';
import * as React from 'react';
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMail } from '../use-message';
import { MessageList } from './message-list';
import { MessageDisplay } from './message-display';
import { Mail } from '../data';

interface MailProps {
  accounts?: {
    label: string;
    email: string;
    icon: React.ReactNode;
  }[];
  mails: Mail[];
  className?: string;
}

export function Message({ accounts, mails, className }: MailProps) {
  const [mail] = useMail();

  return (
    <>
      <Tabs defaultValue='all' className={cn('col-span-2', className)}>
        <div className='flex items-center'>
          <h2 className='text-2xl font-semibold tracking-tight'>Messages</h2>
          {/* <h1 className='text-xl font-bold'>Inbox</h1> */}
          <TabsList className='ml-auto'>
            <TabsTrigger
              value='all'
              className='text-zinc-600 dark:text-zinc-200'
            >
              All mail
            </TabsTrigger>
            <TabsTrigger
              value='supporter'
              className='text-zinc-600 dark:text-zinc-200'
            >
              Supporter
            </TabsTrigger>
          </TabsList>
        </div>
        <Separator className='my-4' />
        <div className='bg-background/95 p-4 pt-0 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
          <form>
            <div className='relative'>
              <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input placeholder='Search' className='pl-8' />
            </div>
          </form>
        </div>
        <TabsContent value='all' className='m-0'>
          <MessageList items={mails} />
        </TabsContent>
        <TabsContent value='supporter' className='m-0'>
          <MessageList items={mails.filter((item) => !item.read)} />
        </TabsContent>
      </Tabs>
      <MessageDisplay
        mail={mails.find((item) => item.id === mail.selected) || null}
        className='col-span-2'
      />
    </>
  );
}
