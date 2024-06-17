import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getUserPostsBySessionAndFollowing, getUserProfile } from '@/lib/auth';
import ImageSvg from '@/public/undraw_friendship_mni7.svg';
import Image from 'next/image';
import Link from 'next/link';
import { UsernamePostFeed } from './[username]/components/username-post-feed/username-post-feed';
import { StatusUpdateForm } from './components/status-update-form';

export default async function DashboardPage() {
  const profile = await getUserProfile();
  const posts = await getUserPostsBySessionAndFollowing();

  return (
    <div className='container grid grid-cols-3 py-6'>
      <Tabs
        defaultValue='following'
        className='col-span-3 w-full lg:col-span-2'
      >
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='following'>Following</TabsTrigger>
          <TabsTrigger value='featured'>Featured</TabsTrigger>
        </TabsList>
        <div className='w-full rounded-lg bg-card px-2 py-4'>
          <div className='flex items-start space-x-2'>
            <Avatar className='mt-1 h-9 w-9'>
              <AvatarImage
                src={profile.avatar_url || ''}
                alt={`${profile.username} avatar`}
              />
              <AvatarFallback>
                {profile.name.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <StatusUpdateForm />
          </div>
        </div>
        <TabsContent value='following'>
          {posts ? (
            <UsernamePostFeed
              posts={posts}
              sessionUsername={profile.username}
            />
          ) : (
            <div className='flex min-h-[30vh] flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm'>
              <div className='flex flex-col items-center gap-1 p-12 py-20 text-center'>
                <Image className='max-w-[60%]' src={ImageSvg} alt='icon' />
                <h3 className='text-2xl font-bold tracking-tight'>
                  Kamu tidak mengikuti siapapun
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Yuk ikuti kreator favoritmu dan dapatkan update terkini
                </p>
                <Button asChild>
                  <Link className='mt-2' href='/explore'>
                    Explore Now
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
        <TabsContent value='featured'>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
              <div className='space-y-1'>
                <Label htmlFor='current'>Current password</Label>
                <Input id='current' type='password' />
              </div>
              <div className='space-y-1'>
                <Label htmlFor='new'>New password</Label>
                <Input id='new' type='password' />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
