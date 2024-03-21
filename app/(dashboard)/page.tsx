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
import { getUserProfile } from '@/lib/auth';
import { StatusUpdateForm } from './components/status-update-form';

export default async function DashboardPage() {
  const profile = await getUserProfile();

  return (
    <div className='container grid grid-cols-3 px-4 py-6 lg:px-8'>
      <Tabs
        defaultValue='following'
        className='col-span-3 w-full lg:col-span-2'
      >
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='following'>Following</TabsTrigger>
          <TabsTrigger value='featured'>Featured</TabsTrigger>
        </TabsList>
        <div className='w-full rounded-lg py-4'>
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
          {/* <ProfilePost
            profile={profile}
            post={{ title: 'Dummy Title', content: 'Dummy Content' }}
          />
          <ProfilePost
            profile={profile}
            post={{ title: 'Dummy Title', content: 'Dummy Content' }}
          />
          <ProfilePost
            profile={profile}
            post={{ title: 'Dummy Title', content: 'Dummy Content' }}
          />
          <ProfilePost
            profile={profile}
            post={{ title: 'Dummy Title', content: 'Dummy Content' }}
          /> */}
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
