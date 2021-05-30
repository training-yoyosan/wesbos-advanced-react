import { config, createSchema } from '@keystone-next/keystone/schema';
import 'dotenv/config';
import { User } from './schemas/User';

const databaseURL =
  process.env.DATABASE_URL ||
  'mongodb://location:27017/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 5,
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
    port: 3002,
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding
  },
  lists: createSchema({
    User,
  }),
  ui: {
    // TODO: Change for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values
});
