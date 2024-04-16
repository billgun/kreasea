import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function ProductsPage() {
  return (
    <div className='w-full flex-1 space-y-4 p-8 pt-6'>
      <div className='flex items-center justify-between space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>Products</h2>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
