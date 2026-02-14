import jwt from "jsonwebtoken";

let token: string | null = null
let expiresIn: number | null = null

export async function getValidToken(): Promise<string> {
    if(token && expiresIn && expiresIn > Date.now() - 60000){
        return token;
    }else{
        return getNewToken();
    }
}

export function getNewToken(): Promise<string>{
    const token = jwt.sign({ user: "test" }, "secretKey", { expiresIn: "1h" });
    console.log(token);
    return token;
}