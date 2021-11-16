import mongoose from 'mongoose';
import { app } from './app';

const PORT = process.env.PORT || 3000;
const MONGO_DB = process.env.MONGO_DB || 'mongodb://auth-mongo-srv:27017/auth';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  try {
    await mongoose.connect(MONGO_DB);
    console.log('Connected to auth db');
  } catch (err) {
    console.error(err);
  }

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

start();
