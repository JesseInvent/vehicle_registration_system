import cloudinary from "cloudinary"
import config from "../../config/config.js";

cloudinary.v2.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET
})

export const uploadToCloudinary = async (file) => {

    try {

        const result = await cloudinary.v2.uploader.upload(file, {
            resource_type: "image",
            folder: "vehicle_reg"
        })

        return result

    } catch (error) {
        
        console.log(error);
    }

}