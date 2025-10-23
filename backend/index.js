import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
dotenv.config()
import cors from "cors"
import userRouter from "./routes/user.route.js"
import listingRouter from "./routes/listing.route.js"
import bookingRouter from "./routes/booking.route.js"
let port = process.env.PORT || 8000

let app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "https://air-bnb-frontend-zapx16ojo-chhavis-projects-e5f24557.vercel.app", "https://air-bnb-frontend-5x60vq9g7-chhavis-projects-e5f24557.vercel.app"],
    credentials:true
}))

app.get("/", (req, res) => {
    res.status(200).json({message: "AirBnb Clone Backend is Running"})
})

app.use("/api/auth", authRouter )
app.use("/api/user", userRouter )
app.use("/api/listing",listingRouter )
app.use("/api/booking",bookingRouter )

app.use((req, res) => {
    res.status(404).json({message: "Route not found"})
})

app.listen(port,()=>{
    connectDb()
    console.log("server started")
})