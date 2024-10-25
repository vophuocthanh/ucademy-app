'use client';
import { ModeToggle } from '@/components/common/ToggleMode';
import { IconUsers } from '@/components/icons';
import { menuItems } from '@/constants';
import { TMenuItem } from '@/types';
import { useAuth, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ActiveLink } from '../common';

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className='hidden p-5 border-r borderDarkMode bgDarkMode lg:flex flex-col'>
      <a href='/' className='font-bold text-3xl inline-block mb-5'>
        <span className='text-primary'>U</span>
        cademy
      </a>
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
      <div className='mt-auto flex items-center justify-end gap-5'>
        <ModeToggle />
        {!userId ? (
          <Link
            href='/sign-in'
            className='size-10 rounded-lg bg-primary text-white flex items-center justify-center p-1'
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

function MenuItem({ url = '/', title = '', icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
