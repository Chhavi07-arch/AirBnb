import { v2 as cloudinary } from 'cloudinary';

const uploadOnCloudinary = async (fileBuffer) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    try {
        if(!fileBuffer){
            return null
        }

        // Upload from buffer using stream
        const uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "airbnb",
                    resource_type: "auto"
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
            stream.end(fileBuffer);
        });

        return uploadResult.secure_url;
    } catch (error) {
        console.error("Cloudinary upload error:", error);
        throw error;
    }
}

export default uploadOnCloudinary
    
