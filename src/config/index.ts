import { config } from 'dotenv';

const envfile = `.env.${process.env.NODE_ENV}`;
const envdir = process.cwd();

config({ path: `${envdir}/${envfile}` });

export const server = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
}

export const dbConnections = {
  mongo: {
    name: 'mongo',
    conn: String(process.env.DATABASE_MONGO_CONN)
  }
}