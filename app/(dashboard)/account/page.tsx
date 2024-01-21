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
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AccountTabPage from './components/account';

export default function AccountPage() {
  return (
    <div className='container h-full px-4 py-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Account Settings
          </h2>
        </div>
      </div>
      <Separator className='my-4' />
      <Tabs defaultValue='account'>
        <TabsList>
          <TabsTrigger value='account'>Account</TabsTrigger>
        </TabsList>
        <div className='grid grid-cols-4'>
          <TabsContent value='account' className='col-span-3'>
            <AccountTabPage />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
