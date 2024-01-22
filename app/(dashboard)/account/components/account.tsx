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
import SocialLinksPage from './social-links';
import SocialLinksForm from './social-links-form';

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
      <SocialLinksPage />
    </div>
  );
}
