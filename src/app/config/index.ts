import dotenv from 'dotenv';
import path from 'path'

const configPath = {path: path.join( (process.cwd(), '.env'))};

dotenv.config(configPath);

export const config = {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    jwt_key: process.env.JWT,
}