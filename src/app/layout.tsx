import type { Metadata } from 'next';
import './globals.css';
import { manrope, roboto } from '@/components/fonts';

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
    <html lang='en'>
      <body className={`${manrope.variable} font-primary`}>{children}</body>
    </html>
  );
}
