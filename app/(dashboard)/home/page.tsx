import { Button } from '@/components/ui/button';
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './components/page-header';
import { Announcement } from './components/announcements';
import { Input } from '@/components/ui/input';
import { FAQ } from './components/faq';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default async function IndexPage() {
  return (
    <>
      <div className='relative mx-auto h-[92vh] w-full bg-kreasi-1 bg-cover bg-no-repeat'>
        <PageHeader className='xl:pt-48'>
          <Announcement />
          <PageHeaderHeading className='text-balance'>
            All you need to make money doing what you love
          </PageHeaderHeading>
          <PageHeaderDescription>
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </PageHeaderDescription>
          <PageActions>
            <div className='flex items-center gap-4 bg-card p-4'>
              <Input
                className='h-11 rounded-md px-8'
                placeholder='Klaim username'
              />
              <Button type='submit' size={'lg'}>
                Klaim
              </Button>
            </div>
          </PageActions>
        </PageHeader>
      </div>
      <div className='relative isolate overflow-hidden  px-6 py-24 text-center shadow-2xl sm:px-16'>
        <h2 className='mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl'>
          0% fee on donation / tips
        </h2>
        <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
          id veniam aliqua proident excepteur commodo do ea.
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Button>Get started</Button>
          <Link href='#' className='text-sm font-semibold leading-6 text-white'>
            Learn more <span aria-hidden='true'>→</span>
          </Link>
        </div>
        <svg
          viewBox='0 0 1024 1024'
          className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
          aria-hidden='true'
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
            fillOpacity='0.7'
          />
          <defs>
            <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
              <stop stopColor='#7775D6' />
              <stop offset={1} stopColor='#E935C1' />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className='relative mx-auto h-screen w-3/5'>
        <PageHeader>
          <PageHeaderHeading className='text-balance'>
            Frequently Asked Questions
          </PageHeaderHeading>
          <PageHeaderDescription className='sm:text-base'>
            Have a different question and can&apos;t find the answer you&apos;re
            looking for? Reach out to our support team by sending us an email
            and we&apos;ll get back to you as soon as we can.
          </PageHeaderDescription>
        </PageHeader>
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
