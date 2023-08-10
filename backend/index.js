const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/latestdb",{

    useNewUrlParser:true, useUnifiedTopology:true

},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("connected");
    }
})

app.listen(3000)


