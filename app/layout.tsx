import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'kreasea',
    'trakteer alternative',
    'ko-fi alternative',
    'patreon alternative',
    'trakteer id',
    'trakteer gratis',
    'karyakarsa',
    'sociabuzz',
  ],
  authors: [
    {
      name: 'billgun',
      url: 'https://github.com/billgun',
    },
  ],
  creator: 'billgun',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@shadcn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

// If loading a variable font, you don't need to specify the font weight
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
});

// TODO: Console to remove when supabase fixed
// Reference: https://github.com/supabase/auth-js/issues/873
const conWarn = console.warn
const conLog = console.log

const IGNORE_WARNINGS = [
  'Using supabase.auth.getSession() is potentially insecure',
  'Using the user object as returned from supabase.auth.getSession()',
]

console.warn = function (...args) {
  const match = args.find((arg) =>
    typeof arg === 'string' ? IGNORE_WARNINGS.find((warning) => arg.includes(warning)) : false,
  )
  if (!match) {
    conWarn(...args)
  }
}

console.log = function (...args) {
  const match = args.find((arg) =>
    typeof arg === 'string' ? IGNORE_WARNINGS.find((warning) => arg.includes(warning)) : false,
  )
  if (!match) {
    conLog(...args)
  }
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            nunitoSans.className
          )}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <TailwindIndicator />
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
