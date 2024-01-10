import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server';
import { CalendarDaysIcon, MapPinIcon } from 'lucide-react';
import { ProfileEdit } from './components/profile-edit';
import React from 'react';
import { ProfilePost } from './components/profile-post';

interface UsernamePageProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
export default async function UsernamePage({
  params,
  children,
}: UsernamePageProps) {
  return (
    <div className='flex w-full flex-col gap-4'>
      <ProfilePost className='mx-auto w-[36rem]' />
      <ProfilePost className='mx-auto w-[36rem]' />
      <ProfilePost className='mx-auto w-[36rem]' />
      <ProfilePost className='mx-auto w-[36rem]' />
    </div>
  );
}
