'use server';

import User from '@/database/user.model';
import { connectToDattabase } from '@/lib/mongoose';
import { TCreateUserParams } from '@/types';

export default async function createUser(params: TCreateUserParams) {
  try {
    connectToDattabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
