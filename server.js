import Express from 'express';
import path from 'path';
const app = Express();

let port


if(process.env.APP_NAME==="app1")
port=3001
else if(process.env.APP_NAME==="app2")
port=3002
else if(process.env.APP_NAME==="app3")
port=3003


app.listen(port,(err)=>{
if(!err)
console.log(`Server is running on port : ${port}. APP_NAME:${process.env.APP_NAME}`);
else
console.log(err);
})

app.use("/images",Express.static("./images"))
const __dirname = path.resolve();
app.get("/",(req,res)=>{
    console.log("APP_NAME:",process.env.APP_NAME);
    res.sendFile(path.join(__dirname,"index.html"));
})