import multer from "multer"

// Use memory storage instead of disk storage since Render has ephemeral filesystem
const storage = multer.memoryStorage()

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB limit per file
    }
})

export default upload