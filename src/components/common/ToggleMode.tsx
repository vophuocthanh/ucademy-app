'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { LaptopMinimal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex dark:border border dark:border-opacity-10 dark:border-blue-400 rounded-full space-x-2'>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        className={`rounded-full w-8 h-8 ${
          theme === 'light' ? '' : 'border-none !bg-transparent'
        }`}
      >
        <SunIcon
          className={`h-[1rem] w-[1rem] transition-all ${
            theme === 'light' ? 'text-yellow-500' : 'text-gray-500'
          }`}
        />
        <span className='sr-only'>Light mode</span>
      </Button>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        className={`rounded-full w-8 h-8 ${
          theme === 'dark' ? '' : 'border-none !bg-transparent'
        }`}
      >
        <MoonIcon
          className={`h-[1rem] w-[1rem] transition-all ${
            theme === 'dark' ? 'text-blue-500' : 'text-gray-500'
          }`}
        />
        <span className='sr-only'>Dark mode</span>
      </Button>
      <Button
        variant='outline'
        size='icon'
        onClick={() => setTheme('system')}
        aria-pressed={theme === 'system'}
        className={`rounded-full w-8 h-8 ${
          theme === 'system' ? '' : 'border-none !bg-transparent'
        }`}
      >
        <div className='flex items-center justify-center h-[1rem] w-[1rem]'>
          <LaptopMinimal
            className={`h-[1rem] w-[1rem] transition-all text-gray-500 ${
              theme === 'system' ? 'text-primary' : 'dark:text-white'
            }`}
          />
        </div>
        <span className='sr-only'>System mode</span>
      </Button>
    </div>
  );
}
