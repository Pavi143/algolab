import * as fs from 'fs';
import pg from 'pg'
const { Client } = pg


export default async function runSqlFile(filePath: string): Promise<void> {
  const connectionString = 'postgresql://pavithra:pavithra@localhost:5432/mydatabase';
  const client = new Client({ connectionString });
  await client.connect();

  try {

    if (!fs.existsSync(filePath)) {
      console.error(`File does not exist.`);
      return;
    }

    const sql = fs.readFileSync(filePath, 'utf-8');
    await client.query(sql);
    console.log(`File executed successfully.`);
  } catch (error) {
    console.error(`Error During execution: ${error}`);
  }
  finally {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
}
}

const args = process.argv.slice(2);

console.log(process.argv[2])
runSqlFile(process.argv[2]).catch(error => console.error(error));