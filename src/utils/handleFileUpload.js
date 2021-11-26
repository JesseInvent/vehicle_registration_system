import { unlinkSync } from "fs"
import path from "path"
import { uploadToCloudinary } from "../utils/cloudinary.js"

export default async (file) => {

    const tmpPath = path.resolve(`tmp/images/${file.name}`)

    file.mv(tmpPath)
    
    const result = await uploadToCloudinary(tmpPath)

    unlinkSync(tmpPath)
    
    return result.url
}