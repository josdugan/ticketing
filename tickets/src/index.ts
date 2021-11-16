import 'express-async-errors';
import mongoose from 'mongoose';
import { app } from './app';

const PORT = process.env.PORT || 3000;
const MONGO_DB =
  process.env.MONGO_DB || 'mongodb://tickets-mongo-srv:27017/tickets';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  try {
    await mongoose.connect(MONGO_DB);
  } catch (err) {
    console.log(err);
  }

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

start();
