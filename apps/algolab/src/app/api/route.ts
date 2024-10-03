import fs from 'fs';
import { db } from '@/lib/db'; 
import postgres from 'postgres';

const sqlClient = postgres(process.env.DATABASE_URL!);

export async function GET(): Promise<Response> {
    try {
        const sql = fs.readFileSync('./src/sql/user.sql', 'utf-8');
        const queries = sql.split(';').map(query => query.trim()).filter(query => query);
        let responseData = [];
       

        for (const query of queries) {
            const result = await sqlClient.unsafe(query); 
            responseData.push(result);
        }
        console.log(responseData);

        return new Response(JSON.stringify(responseData), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export async function POST(): Promise<Response> {
    try {
        const sql = fs.readFileSync('./src/sql/dummydata.sql', 'utf-8');
        const queries = sql.split(';').map(query => query.trim()).filter(query => query);

        for (const query of queries) {
            await sqlClient.unsafe(query);
        }
        console.log("Inserted successfully");
        return new Response(JSON.stringify({ message: "Data inserted successfully" }), { status: 201 });
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
