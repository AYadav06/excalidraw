import express from "express"
import { router } from "../routes/index.js";
const app=express();

app.use(express.json());

app.use("/api/v1",router);

app.listen(3001,()=>{
    console.log("server is runnnig on port:3000");
})