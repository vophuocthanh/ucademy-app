'use server';

import User, { IUser } from '@/database/user.model';
import { connectToDattabase } from '@/lib/mongoose';

export default async function createUser(params: IUser) {
  try {
    connectToDattabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {}
}
