import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreatorButton } from './components/creator-button';
import { Overview } from './components/overview';
import { RecentSales } from './components/recent-sales';
import {
  ChevronUpIcon,
  GemIcon,
  HandCoinsIcon,
  UsersIcon,
  WalletIcon,
} from 'lucide-react';

export default async function IndexPage() {
  return (
    <div className='hidden flex-col md:flex'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
        </div>
        <div className='flex'>
          <div className='w-1/2'>
            <CreatorButton />
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Jumlah Saldo
              </CardTitle>
              <WalletIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>Rp.500.000</div>
              <p className='text-xs text-muted-foreground'>
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Followers</CardTitle>
              <UsersIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>100</div>
              <p className='text-xs text-muted-foreground'>
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Donations</CardTitle>
              <HandCoinsIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>Rp.1.000.000</div>
              <p className='text-xs text-muted-foreground'>
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Donations
              </CardTitle>
              <GemIcon className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>Rp.3.000.000</div>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-4'>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className='pl-2'>
              <Overview />
            </CardContent>
          </Card>
          <Card className='col-span-3'>
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
