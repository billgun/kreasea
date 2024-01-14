import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';
import React from 'react';

interface MembershipPageProps {
  params: {
    username: string;
  };
  children: React.ReactNode;
}
export default async function MembershipPage({
  params,
  children,
}: MembershipPageProps) {
  return (
    <div className='grid w-full grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <Card className='w-full bg-card'>
          <CardHeader className='pb-3 text-center'>
            <CardTitle className='text-lg font-semibold'>
              mochi companion
            </CardTitle>
            <CardDescription className='text-2xl text-primary'>
              $3 <span className='text-base'>/ month</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full'>Join</Button>
            <p className='mt-4 text-sm'>
              Enjoying my creations? You can join this tier to help me continue
              to make my art journey possible! :D
            </p>
            <ul className='mt-4 list-inside list-disc space-y-2'>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Exclusive Content
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Looping here */}
      {/* Delete if done */}

      <div className='col-span-1'>
        <Card className='w-full bg-card'>
          <CardHeader>
            <CardTitle className='text-lg font-semibold'>
              mochi companion
            </CardTitle>
            <CardDescription className='text-sm'>$3 per month</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full bg-[#ff4d6d] py-2 text-white'>
              Join
            </Button>

            <p className='mb-2 text-sm'>
              Enjoying my creations? You can join this tier to help me continue
              to make my art journey possible! :D
            </p>
            <p className='mb-4 text-xs'>All membership prices in USD.</p>
            <ul className='list-inside list-disc space-y-2'>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Exclusive Content
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className='col-span-1'>
        <Card className='w-full bg-card'>
          <CardHeader>
            <CardTitle className='text-lg font-semibold'>
              mochi companion
            </CardTitle>
            <CardDescription className='text-sm'>$3 per month</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full bg-[#ff4d6d] py-2 text-white'>
              Join
            </Button>

            <p className='mb-2 text-sm'>
              Enjoying my creations? You can join this tier to help me continue
              to make my art journey possible! :D
            </p>
            <p className='mb-4 text-xs'>All membership prices in USD.</p>
            <ul className='list-inside list-disc space-y-2'>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Exclusive Content
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className='col-span-1'>
        <Card className='w-full bg-card'>
          <CardHeader>
            <CardTitle className='text-lg font-semibold'>
              mochi companion
            </CardTitle>
            <CardDescription className='text-sm'>$3 per month</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full bg-[#ff4d6d] py-2 text-white'>
              Join
            </Button>

            <p className='mb-2 text-sm'>
              Enjoying my creations? You can join this tier to help me continue
              to make my art journey possible! :D
            </p>
            <p className='mb-4 text-xs'>All membership prices in USD.</p>
            <ul className='list-inside list-disc space-y-2'>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Exclusive Content
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className='col-span-1'>
        <Card className='w-full bg-card'>
          <CardHeader>
            <CardTitle className='text-lg font-semibold'>
              mochi companion
            </CardTitle>
            <CardDescription className='text-sm'>$3 per month</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full py-2'>Join</Button>
            <p className='mt-4 text-sm'>
              Enjoying my creations? You can join this tier to help me continue
              to make my art journey possible! :D
            </p>
            <p className='mt-4 text-xs'>All membership prices in USD.</p>
            <ul className='list-inside list-disc space-y-2'>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Exclusive Content
              </li>
              <li className='flex items-center'>
                <CheckIcon className='mr-2 text-green-500' />
                Digital Wallpapers
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
