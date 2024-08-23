import express from "express";
import connection from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js"

const PORT = process.env.PORT || 3009;
const server = express();

server.use(express.json());
server.use("/user", userRouter)

server.get("/", (req, res)=>{
    res.send(`Server running fine`)
})

server.listen(PORT, async ()=>{
    try {
        await connection;
        console.log(`Server is running at port ${PORT} & DB is connected`)
    } catch (error) {
        console.log(`Error occured ${error}`)
    }
})