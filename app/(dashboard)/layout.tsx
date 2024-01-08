import { Sidebar } from './components/sidebar';
import { SiteHeader } from './components/site-header';

interface DashboardPageLayoutProps {
  children: React.ReactNode;
}
export default function DashboardPageLayout({
  children,
}: DashboardPageLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <SiteHeader />
      <div className='border-t bg-background'>
        <div className='grid lg:grid-cols-6 '>
          <Sidebar className='hidden lg:block' />
          <div className='col-span-4 lg:col-span-5 lg:border-l'>
            <main className='flex-1'>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
