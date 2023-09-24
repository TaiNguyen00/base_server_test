import mongoose from "mongoose"
 const ConnectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log(`Connected to DB success...`)
  } catch (e) {
    console.log(e)
  }

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected!")
  })
  
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!")
  })
}
export default ConnectToDB;
