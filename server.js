const express = require("express")
const fs = require("fs")

let website = fs.readFileSync("index.html","utf-8")

const app = express();



app.use(express.static("/Karthik/twitter-reader"))

app.get("/",(req,res)=>{
    res.send(website)
});

const port = 5051
app.listen(port,()=>{
    console.log(`server running at port : http://localhost:${port}`)
});