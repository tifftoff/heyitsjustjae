import type { Metadata } from 'next';
import './globals.css';

import { Soundcloud } from '@/components/Soundcloud';

export const metadata: Metadata = {
  title: 'heyitsjustjae - official website',
  description: 'heyitsjustjae - official website',
  icons: {
    icon: '/icon.svg',
    apple: '/squared-logo.png',
  },
  openGraph: {
    title: 'heyitsjustjae - official website',
    description: 'heyitsjustjae - official website',
    url: 'https://heyitsjustjae.vercel.app', 
    siteName: 'heyitsjustjae - official website',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <meta name="google-site-verification" content="FRHjFBevsa0-4BRugQJ0lADRXYCT_1qLbW7DWXkaiBg" />
      <body className="flex flex-col antialiased" >
        <main className='flex min-h-[100dvh] justify-center items-center w-full'>
          {children}
        </main>
        {/* <Soundcloud /> */}
      </body>
    </html>
  );
}
