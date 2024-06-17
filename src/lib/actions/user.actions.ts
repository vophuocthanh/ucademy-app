'use server';

import User, { IUser } from '@/database/user.model';
import { connectToDattabase } from '@/lib/mongoose';
import { TCreateUserParams } from '@/types';

export async function createUser(params: TCreateUserParams) {
  try {
    connectToDattabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
export async function getUserInfo({
  userId,
}: {
  userId: string;
}): Promise<IUser | null | undefined> {
  try {
    connectToDattabase();
    const findUser = await User.findOne({ clerkId: userId });
    if (!findUser) return null;
    return findUser;
  } catch (error) {
    console.log(error);
  }
}
