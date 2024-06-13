import { Separator } from '@/components/ui/separator';

interface SettingsPageLayoutProps {
  children: React.ReactNode;
}

export default function SettingsPageLayout({
  children,
}: SettingsPageLayoutProps) {
  return (
    <div className='container h-full px-4 py-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>Settings</h2>
        </div>
      </div>
      <Separator className='my-4' />
      {children}
    </div>
  );
}
