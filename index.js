const express=require("express");
const cors=require("cors");

const app=express();
app.use(cors());
const PORT=9000;
app.use(("/",(req,resp)=>{
    resp.send("server running");
}))

app.listen(PORT,()=>{
    console.log("listening on port"+PORT);
})

