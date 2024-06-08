const express=require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const router= require('./router/routes')
const app= express();
const port=3000;
const url="mongodb://localhost:27017/solvtask"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect(url).then((res)=>{
    console.log("Db connected successfully")
})
.catch((err)=>{
    console.log("there is error")
})

app.use('/',router)
app.listen(port,()=>{
    console.log("server is running on port 3000")
})

