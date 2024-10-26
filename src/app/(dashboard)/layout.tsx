import Sidebar, { MenuItem } from '@/components/layout/Sidebar';
import { menuItems } from '@/constants';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='wrapper block pb-20 lg:pb-0 lg:grid lg:grid-cols-[300px,minmax(0,1fr)] h-screen'>
      <Sidebar />

      <ul className='fixed bottom-0 left-0 flex justify-center w-full h-16 gap-5 p-3 border-t bgDarkMode borderDarkMode lg:hidden'>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
            onlyIcon
          ></MenuItem>
        ))}
      </ul>
      <div className='hidden lg:block'></div>
      <main className='p-5'>{children}</main>
    </div>
  );
}
