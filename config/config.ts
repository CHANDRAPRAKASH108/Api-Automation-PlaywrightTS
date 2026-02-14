require('dotenv').config({ path: '.env' })

function requireEnv(key: string){
    const value = process.env[key]
    if(!value){
        throw new Error(`Value not found in .env for key: ${key}`)
    }else{
        console.log(`Base Url - ${value}`)
        return value;
    }
}

export const config = {
    apiConfig: {
        apiBaseUrl: requireEnv('API-BASE-URL')
    }
}

