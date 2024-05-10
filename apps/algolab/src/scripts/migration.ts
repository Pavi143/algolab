import { Client } from 'pg';
import * as fs from 'fs';

export default async function runMigrations() {

    const migrationSQL = fs.readFileSync('./sql/migration.sql', 'utf8');

    const connectionString = 'postgresql://pavithra:pavithra@localhost:5432/mydatabase';
    const client = new Client({ connectionString });

    try {
        await client.connect();
        console.log('Connected to PostgreSQL database');

        await client.query(migrationSQL);
        console.log('Migration executed successfully');
    } catch (error) {
        console.error('Error executing migration:', error);
    } finally {
        await client.end();
        console.log('Disconnected from PostgreSQL database');
    }
}


