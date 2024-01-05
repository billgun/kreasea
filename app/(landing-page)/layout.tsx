import { SiteHeader } from './components/site-header';

interface LandingPageLayoutProps {
  children: React.ReactNode;
}
export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <SiteHeader />
      <main className='flex-1'>{children}</main>
    </div>
  );
}
