import express from "express";
import router  from "./routes/orarend.js";
import orarend from "./data/orarend.js";

const app =express()

app.use(express.json())
app.use('/orarned', router )

app.listen(3000, (req, res)=>{
    console.log(`server runs`)
})

app.use('/orarend.js', orarend)
async function name(params) {
    
}