import { ThemeProvider } from '@/components/common/ThemeProvider';
import { manrope } from '@/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <body className={`${manrope.variable} font-primary`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer
              autoClose={2000}
              bodyClassName='text-sm font-medium'
              position='top-right'
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
