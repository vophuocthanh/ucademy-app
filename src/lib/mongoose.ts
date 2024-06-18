'use server';

import mongoose from 'mongoose';

// signleton connection: có nghĩa là nếu kết nối rồi thì không kết nối nữa, còn nếu chưa kết nối thì nó sẽ kết nối.

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined');
  }

  if (isConnected) {
    console.log('Already connected to database');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'Ucademy',
    });
    isConnected = true;
    console.log('Using new database connection');
  } catch (error) {
    console.log('Error while connecting to database');
  }
};
