import { manrope } from '@/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ucademy - App',
  description: 'Nền tảng học lập trình số 1 thế giới của Thạnh Dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${manrope.variable} font-primary`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
