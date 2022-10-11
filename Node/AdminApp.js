const express=require('express');
const app=express();
const cors=require('cors');
const router=require('./AdminRouter');

app.use(cors());
app.use(router);
app.listen('8082',()=>{
    console.log("AdminApp 8082 opening");
})
