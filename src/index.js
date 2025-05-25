//("dotenv").config({ path: "./env" });





import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})
connectDB()
















/*
const app = express()

(async ()=> {
    try{
   await mongoose.connect('${process.env.MONGO_URI}/${DB_NAME}')
   app.on('error', (error) => {
       console.error("Mongoose connection error");
       throw error;
    })
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
)}
    catch (error) {
        console.error("ERROR",error)
    }throw err
})()*/
