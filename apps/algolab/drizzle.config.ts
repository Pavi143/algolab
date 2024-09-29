import { defineConfig } from 'drizzle-kit';
import './envConfig'

export default defineConfig({
  schema: './src/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
  dbCredentials: {
    host: process.env.HOST!,
    user: process.env.USER!,
    password: process.env.PASSWORD!,
    database: process.env.DATABASE_NAME!,
  },
});