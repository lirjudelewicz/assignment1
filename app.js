import express from "express";
import dotenv from "dotenv";
import postsRouter from "./routes/postsRoute.js";
dotenv.config({ path: ".env.dev" });


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/post", postsRouter);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is running, listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);
