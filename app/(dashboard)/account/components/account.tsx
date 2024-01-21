import { DiscordIcon, Icons } from '@/components/icons';
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
import {
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from 'lucide-react';

export default function AccountTabPage() {
  return (
    <div className='space-y-4'>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Current Password</Label>
                <Input id='name' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Password</Label>
                <Input id='name' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Confirm Password</Label>
                <Input id='name' />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Change Password</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Social Links</CardTitle>
          <CardDescription>
            Add your social accounts to display them on your public profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='relative w-full'>
                <GlobeIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
                <Input placeholder='Your website' className='pl-10' />
              </div>
              <div className='relative w-full'>
                <InstagramIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
                <Input placeholder='Instagram' className='pl-10' />
              </div>
              <div className='relative w-full'>
                <FacebookIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
                <Input placeholder='Facebook' className='pl-10' />
              </div>
              <div className='relative w-full'>
                <Icons.twitter className='absolute left-2.5 top-3 h-4 w-4 fill-current text-muted-foreground' />
                <Input placeholder='X' className='pl-10' />
              </div>
              <div className='relative w-full'>
                <TwitchIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
                <Input placeholder='Twitch' className='pl-10' />
              </div>
              <div className='relative w-full'>
                <DiscordIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
                <Input placeholder='Discord' className='pl-10' />
              </div>
              <div className='relative w-full'>
                <YoutubeIcon className='absolute left-2.5 top-3 h-4 w-4 text-muted-foreground' />
                <Input placeholder='Youtube' className='pl-10' />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
