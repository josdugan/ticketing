import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { JWTService } from '@josdugantickets/common';

jest.mock('../events/nats-wrapper');

let mongo: any;

beforeAll(async () => {
  process.env.JWT_KEY = 'secret';
  mongo = await MongoMemoryServier.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  jest.setTimeout(15000);
  await mongo.stop();
  await mongoose.connection.close();
});

declare global {
  var signin: () => string[];
}

global.signin = () => {
  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: 'test@example.com',
  };

  const token = JWTService.generate(payload);

  const session = { jwt: token };

  const sessionJSON = JSON.stringify(session);

  const base64 = Buffer.from(sessionJSON).toString('base64');

  return [`express:sess=${base64}`];
};
