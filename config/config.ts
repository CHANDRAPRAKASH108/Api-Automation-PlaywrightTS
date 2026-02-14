require('dotenv').config({ path: '.env' })

function requireEnv(key: string) {
    const value = process.env[key]; 
    if (!value) {
        throw new Error(`Value not found for key: ${key}`);
    }
    return value;
}

export const config = {
    apiConfig: {
        apiBaseUrl: requireEnv('API-BASE-URL')
    },
    dbConfig: {
        dbHost: requireEnv('DB_HOST'),
        dbName: requireEnv('DB_NAME'),
        dbUser: requireEnv('DB_USER'),
        dbPass: requireEnv('DB_PASS')
    }
}

