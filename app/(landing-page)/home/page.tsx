import { Button, buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './components/page-header';
import { Announcement } from './components/announcements';
import { Icons } from '@/components/icons';

export default async function IndexPage() {
  return (
    <div className='container relative h-[90vh]'>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link href='/docs' className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target='_blank'
            rel='noreferrer'
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className='mr-2 h-4 w-4' />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
