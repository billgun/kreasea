import { Separator } from '@/components/ui/separator';
import BlogForm from './components/blog-form';

export default function Blog() {
  return (
    <div className='container h-full px-4 py-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>📝 New Post</h2>
        </div>
      </div>
      <Separator className='my-4' />
      <BlogForm />
    </div>
  );
}
