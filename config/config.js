import dotenv from "dotenv"

dotenv.config()

export default {
    DB_URL: process.env.DB_URL,
    CLOUD_NAME: process.env.CLOUD_NAME || '',
    API_KEY: process.env.CLOUDINARY_API_KEY || '',
    API_SECRET: process.env.CLOUDINARY_API_SECRET || ''
}

