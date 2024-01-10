import { getSession } from '@/lib/auth';
import { MobileNav } from './components/mobile-nav';
import { Sidebar } from './components/sidebar';
import { SiteHeader } from './components/site-header';
import { cn } from '@/lib/utils';

interface DashboardPageLayoutProps {
  children: React.ReactNode;
}
export default async function DashboardPageLayout({
  children,
}: DashboardPageLayoutProps) {
  const session = await getSession();

  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden'>
        <div className='container flex h-14 max-w-screen-2xl items-center'>
          <MobileNav />
        </div>
      </header>
      <div className='bg-background'>
        <div className='grid lg:grid-cols-6 '>
          {session ? (
            <Sidebar className={cn(session ? `lg:block` : `hidden`)} />
          ) : (
            <></>
          )}
          <div
            className={cn(
              `col-span-4  lg:border-l`,
              session ? `lg:col-span-5` : `lg:col-span-6`
            )}
          >
            <main className='flex-1'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
