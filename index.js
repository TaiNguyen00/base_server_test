import express from "express"
import cors from "cors"
import 'dotenv/config'
import ConnectToDB from "./src/Config/connectDB"
import authRoute from "./src/Router/Auth"
import packageRoute from "./src/Router/Package";
import userRoute from "./src/Router/User"
import cookieParser from "cookie-parser"
import morgan from "morgan"

const app = express()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(morgan())


app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/package", packageRoute)
app.listen(PORT, () => {
  ConnectToDB()
  console.log(`server is running on the port: http://localhost:${PORT}/`)
})