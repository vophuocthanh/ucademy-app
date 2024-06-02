import { Manrope, Roboto } from 'next/font/google';
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export { manrope, roboto };
