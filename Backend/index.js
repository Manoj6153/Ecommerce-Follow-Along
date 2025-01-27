const express=require('express');
const app=express();
const userModel = require('./src/Model/userModel');
const connectDB=require('./src/Database/db');
const userRouter = require('./src/Controllers/user');

app.use(express.json());

require('dotenv').config({
    path:'./src/Config/.env'
});

const port=process.env.port;
const url=process.env.db_url;


app.listen(3000,async ()=>{
    console.log(`Server is running on port ${port}`);
    try{
        await connectDB(url);
    }catch(error){
        console.log(error);
    }
})

app.use('/register',userRouter);