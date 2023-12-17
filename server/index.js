import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import authRouter from "./routes/authRoute.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";


dotenv.config()

const app = express()
const PORT = 3000;

const connect = (uri) => {
    return mongoose.connect(uri)
}

const start = async () => {
    try {
        await connect(process.env.MONGO_URI)
        console.log('connected')
        app.listen(PORT, () => {
            console.log("working on" + PORT)
        })
    } catch (error) {
        console.log(error)
    }
}


app.use(express.json())
app.use(cors())
app.use(cookieParser())




app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)




// error handling
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "something went wrong";
    return res.status(status).json({
        succes: false,
        status,
        message

    })
})


app.get('/', (req, res) => {
    res.send("hello")
})






start()


