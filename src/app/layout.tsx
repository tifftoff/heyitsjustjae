import type { Metadata } from 'next';
import './globals.css';

import { Sidebar } from '@/components/Sidebar';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'heyitsjustjae - official website',
  description: 'heyitsjustjae - official website',
  openGraph: {
    title: 'heyitsjustjae - official website',
    description: 'heyitsjustjae - official website',
    url: 'https://heyitsjustjae.vercel.app', 
    siteName: 'heyitsjustjae - official website',
    images: [
      {
        url: '/icon.svg',
      },
    ],
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
      <body className="flex flex-col min-h-[100dvh] antialiased" >
        <main className='flex flex-grow min-h-[100dvh] justify-center items-center w-full'>
          {children}
        </main>
        <Section />
        <Sidebar />
      </body>
    </html>
  );
}
