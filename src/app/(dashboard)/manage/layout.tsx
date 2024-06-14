import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  if (!userId) return redirect('/sign-in');

  return <div>{children}</div>;
}
