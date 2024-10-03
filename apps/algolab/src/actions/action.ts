'use server'
import fs from 'fs';
import { db } from '@/lib/db'; 
import postgres, { Row, RowList } from 'postgres';
const sqlClient = postgres(process.env.DATABASE_URL!);

interface GetParams {
    initialDisplay?: boolean;
    category?: string;
    answered?: boolean;
    programmingLanguage?: string;
    followedOnly?: boolean;
    currentUserId?: number;
    
}

export async function GET(params: GetParams  ) {
        const sql = fs.readFileSync('./src/sql/filter.sql', 'utf-8').trim();

        let responseData = [];
        const result = await sqlClient.unsafe(sql,{
            initialDisplay: params.initialDisplay,
            category: params.category,
            answered: params.answered,
            programmingLanguage: params.programmingLanguage,
            followedOnly: params.followedOnly,
            currentUserId: params.currentUserId
        }); 
        responseData.push(result);

        return responseData;
    } 





    // export async function GET() {
    //     const sql = fs.readFileSync('./src/sql/user.sql', 'utf-8');
    //     const queries = sql.split(';').map(query => query.trim()).filter(query => query);
    //     let responseData = [];

    //     for (const query of queries) {
    //         const result = await sqlClient.unsafe(query); 
    //         responseData.push(result);
    //     }

    //     return responseData;
    // } 

export async function POST() {
    try {
        const sql = fs.readFileSync('./src/sql/filter.sql', 'utf-8');
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
