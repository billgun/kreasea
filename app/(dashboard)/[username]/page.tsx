'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React, { createRef, useState } from 'react';
import { ProfilePost } from './components/profile-post';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface UsernamePageProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
export default function UsernamePage({ params, children }: UsernamePageProps) {
  return (
    <div className='grid w-full grid-cols-2 gap-4'>
      <div className='col-span-1 flex flex-col gap-y-4'>
        <ProfilePost className='w-full' />
        <ProfilePost className='w-full' />
        <ProfilePost className='w-full' />
        <ProfilePost className='w-full' />
      </div>
      <div className='col-span-1'>
        <Card>
          <CardHeader className='space-y-0 py-4'>
            <CardTitle className='text-xl'>Supporter!</CardTitle>
            <CardDescription>
              Support billgun and be a part of our community
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-3'>
            <div className='flex items-center justify-between space-x-4'>
              <div className='flex items-center space-x-4'>
                <Avatar>
                  <AvatarImage src='/avatars/01.png' />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <p className='text-sm font-medium leading-none'>
                    Sofia Davis, mengsupport 10 cendol
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Terus berkarya ya kakak
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src='/avatars/01.png' />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium leading-none'>
                  Asun, mengsupport 1 cendol
                </p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage src='/avatars/01.png' />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <div>
                <p className='text-sm font-medium leading-none'>
                  Dimas, menjadi patron
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className='p-0 text-base text-muted-foreground underline underline-offset-4'
              variant={'none'}
            >
              Show More
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
