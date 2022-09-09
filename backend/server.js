const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const path=require('path')
const hotelroute=require('../backend/Routes/hotelRoute');

const HApp=express();

HApp.use(cors());


HApp.use(express.json());

HApp.use('/hotels',hotelroute)

mongoose.connect("mongodb://localhost:27017").then(res=>console.log("database is connected !")).then(()=>{
    HApp.listen(5000)

}).catch((err)=>console.log(err))
