import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'
/* import session from 'express-session'
import MongoStore from 'connect-mongo' */

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
/* app.use(session({
    secret: 'coding my first server',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI })
  })) */

//routes import

import userRouter from "./routes/user.routes.js"




//router decleration

app.use("/api/v1/users", userRouter) // https://localhost:8000/api/v1/users/...






export { app }