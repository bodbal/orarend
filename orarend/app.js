import express from "express";
import router  from "./routes/orarend.js";

const app =express()

app.use(express.json())
app.use('/orarned', router )

app.listen(3000, (req, res)=>{
    console.log(`server runs`)
})