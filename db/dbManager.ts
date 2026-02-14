import mysql, { Pool } from "mysql2/promise";
import { config } from "../config/config";

/**
 * Create MySQL Pool Connection
 */
export async function createConnection(): Promise<Pool> {
    console.log("Creating database connection pool")
    const pool = mysql.createPool({
      host: config.dbConfig.dbHost,
      user: config.dbConfig.dbUser,
      password: config.dbConfig.dbPass,
      database: config.dbConfig.dbName,
      port: 3306,
      ssl: {
        rejectUnauthorized: false
      },
      waitForConnections: true,
      connectionLimit: 10,
    });
  
    return pool;
}

/**
 * Close MySQL Pool
 */
export async function closeConnection(pool: Pool): Promise<void> {
    try {
        if (!pool) return;
        await pool.end();   // ✅ correct way
        console.log("🔒 MySQL Pool Closed");
    } catch (e) {
        console.error(`Error while closing connection: ${e}`);
    }
}

/**
 * Execute Query (Non-blocking)
 */
export async function queryDB<T = any>(
    pool: Pool,
    query: string
): Promise<T[]> {
    try {
        if (!pool) {
            console.warn("⚠ No active DB connection. Creating one...");
            await createConnection();
        }
        const [rows] = await pool!.query(query);
        return rows as T[];

    } catch (error) {
        console.error(`❌ Error while executing query: ${error}`);
        return []; // execution continues
    }
}
