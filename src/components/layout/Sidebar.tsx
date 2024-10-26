'use client';
import { ModeToggle } from '@/components/common/ToggleMode';
import { IconUsers } from '@/components/icons';
import { menuItems } from '@/constants';
import { TMenuItem } from '@/types';
import { useAuth, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { ActiveLink } from '../common';

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className='hidden p-5 border-r borderDarkMode bgDarkMode lg:flex flex-col fixed top-0 left-0 bottom-0 w-[300px]'>
      <Link
        href='/'
        className='font-bold text-3xl inline-flex items-baseline gap-0.5 mb-5 h-10 self-start'
      >
        <Image alt='Ucademy' src='/logo.png' width={20} height={20} />
        <span className='text-primary'>cademy</span>
      </Link>
      <ul className='flex flex-col gap-2'>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className='flex items-center justify-end gap-5 mt-auto'>
        <ModeToggle />
        {!userId ? (
          <Link
            href='/sign-in'
            className='flex items-center justify-center p-1 text-white rounded-lg size-10 bg-primary'
          >
            <IconUsers />
          </Link>
        ) : (
          <UserButton />
        )}
      </div>
    </div>
  );
};

export function MenuItem({ url = '/', title = '', icon, onlyIcon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {onlyIcon ? null : title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
