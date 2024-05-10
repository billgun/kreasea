import { getUserNonStrict } from '@/lib/auth';
import { MobileNav } from './components/mobile-nav';
import { Sidebar } from './components/sidebar';
import { cn } from '@/lib/utils';
import { MainNav } from './components/main-nav';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

interface DashboardPageLayoutProps {
  children: React.ReactNode;
}
export default async function DashboardPageLayout({
  children,
}: DashboardPageLayoutProps) {
  const user = await getUserNonStrict();

  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      {user ? (
        <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden'>
          <div className='container flex h-14 max-w-screen-2xl items-center'>
            <MobileNav />
          </div>
        </header>
      ) : (
        <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
          <div className='container flex h-14 max-w-screen-2xl items-center'>
            <MainNav />
            <MobileNav />
            <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
              <div className='w-full flex-1 md:w-auto md:flex-none'></div>
              <nav className='flex items-center gap-1'>
                <Button variant={'outline'} asChild>
                  <Link href={'/login'}>Login</Link>
                </Button>
                <Button asChild>
                  <Link href={'/signup'}>Get Started</Link>
                </Button>
                {/* <ThemeToggle /> */}
              </nav>
            </div>
          </div>
        </header>
      )}
      <div className='bg-background'>
        <div className='grid grid-cols-6 '>
          {user ? <Sidebar className={cn(`hidden lg:block`)} /> : <></>}
          <div
            className={cn(
              `flex lg:border-l`,
              user ? `col-span-6 lg:col-span-5` : `col-span-6`
            )}
          >
            <main className='flex-1'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
