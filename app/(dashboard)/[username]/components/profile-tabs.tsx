import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

interface ProfileTabsProps {
  username: string;
}
export function ProfileTabs({ username }: ProfileTabsProps) {
  return (
    <Tabs defaultValue='home' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-3'>
        <TabsTrigger value='home' asChild>
          <Link href={`/${username}/home`}>Home</Link>
        </TabsTrigger>
        <TabsTrigger value='about' asChild>
          <Link href={`/${username}/about`}>About</Link>
        </TabsTrigger>
        <TabsTrigger value='about' asChild>
          <Link href={`/${username}/about`}>Shop</Link>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
