import { connectToDattabase } from '@/lib/mongoose';

export default async function Home() {
  const connect = connectToDattabase();
  console.log('connect:', connect);
  return <div>Hompage</div>;
}
