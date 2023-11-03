const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
var cors =require("cors");
const fs = require('fs');
const app = express();
let field='';
let value='';

mongoose.connect("mongodb+srv://ayush_arya:abcdefghi123@cluster0.qpbgokm.mongodb.net/bCoffer?retryWrites=true&w=majority");
const itemSchema = new mongoose.Schema({
            end_year: String,
            intensity: Number,
            sector: String,
            topic: String,
            insight: String,
            url: String,
            region: String,
            start_year: String,
            impact: String,
            added: String,
            published: String,
            country: String,
            relevance: Number,
            pestle: String,
            source: String,
            title: String,
            likelihood: Number
});
const data = mongoose.model('data',itemSchema);

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
// const file = JSON.parse(fs.readFileSync('./jsondata.json','utf-8'));
// data.insertMany(file);

app.get('/getData',function(req,res){
    data.find().then(found=>{
        res.json(found);
    });
});
app.get('/getDatafilter',function(req,res){
    if(field==="country"){
        data.find({country:value}).then(found=>{
            res.json(found);
        });
    }else if(field==="end_year"){
        data.find({end_year:value}).then(found=>{
            res.json(found);
        });
    }else if(field==="topic"){
        data.find({topic:value}).then(found=>{
            res.json(found);
        });
    }else if(field==="region"){
        data.find({region:value}).then(found=>{
            res.json(found);
        });
    }else if(field==="sector"){
        data.find({sector:value}).then(found=>{
            res.json(found);
        });
    }else if(field==="pestle"){
        data.find({pestle:value}).then(found=>{
            res.json(found);
        });
    }else if(field==="source"){
        data.find({source:value}).then(found=>{
            res.json(found);
        });
    }  
    else{
        data.find().then(found=>{
            res.json(found);
        });
    }
});
app.post('/data',function (req,res){

    field=req.body.field;
    value=req.body.value;
});
app.listen(9000,function(){
    console.log(`Server is running on port 9000`);
});