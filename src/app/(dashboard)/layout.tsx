import Sidebar from '@/components/layout/Sidebar';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen'>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
