import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { HeartIcon, Mail, Search, User, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { MessageList } from './components/message-list';
import { mails } from './data';
import { Message } from './components/message';

export default async function MessagesPage() {
  return (
    <div className='container h-full px-4 pb-0 pt-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        {/* <div className='col-span-'> */}
        <Message mails={mails} />
        {/* </div> */}
      </div>
    </div>
  );
}
