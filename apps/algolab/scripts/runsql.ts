import * as fs from 'fs';
import postgres from 'postgres';
import '../envConfig'

export default async function runSqlFile(filePath: string): Promise<void> {
  const connectionString = process.env.DATABASE_URL!;
  const sql = fs.readFileSync(filePath, 'utf-8');
  const sqlClient = postgres({
    database: process.env.DATABASE_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: Number(process.env.PORT),
    host: process.env.HOST
  });

  try {
    if (!fs.existsSync(filePath)) {
      console.error(`File does not exist.`);
      return;
    }

    await sqlClient.unsafe(sql);
    console.log(`File executed successfully.`);
  } catch (error) {
    console.error(`Error During execution: ${error}`);
  } finally {
    await sqlClient.end();
    console.log('Disconnected from PostgreSQL database');
  }
}

const args = process.argv.slice(2);
console.log(process.argv[2]);

runSqlFile(process.argv[2]).catch(error => console.error(error));
