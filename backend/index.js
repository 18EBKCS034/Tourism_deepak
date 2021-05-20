var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var nodemailer = require('nodemailer');

var app = express();
app.use(cors());

var client = new MongoClient('mongodb+srv://mydashboard:mydashboard@cluster0.5cuqd.mongodb.net/tour?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
var connection;
client.connect((err, db)=>{
    if(!err){
        connection = db;
        console.log("Database Connected Successfully");
    }
    else{
        console.log(err);
    }
});

app.get('/checkUser', (req,res)=>{
    var userCollection = connection.db('tour').collection('user');
    userCollection.find({email: req.query.email}).toArray((err,docs)=>{
        if(!err){
            res.send({status:"ok",data:docs});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.post('/verifyUser',bodyParser.json(),(req,res)=>{
    sendMail("myhome052021@gmail.com","trvkjgaggokicrjf", req.body.email, "Verification Email","<h1>Hi! Your verification code is = "+req.body.code+"</h1>");
    res.send({status:"ok",data:"An Verification Code is send to your Email"});
});

app.post('/registerUser', bodyParser.json(), (req,res)=>{
    var userCollection = connection.db('tour').collection('user');
    userCollection.insert(req.body , (err,result)=>{
        if(!err){
            res.send({status:"ok",data:"User Registered Succesfully"});
        }
        else{
            res.send({status:"failed",data:err});
        }
    });
});

app.get('/getUser', (req,res)=>{
    var userCollection = connection.db('tour').collection('user');
    userCollection.find({_id:ObjectID(req.query.id)}).toArray((err,docs)=>{
        if(!err){
            res.send({status:"ok",data:docs});
        }
        else{
            res.send({status:"failed",data:err});
        }
    });
});

app.get('/loginUser', (req,res)=>{
    var userCollection = connection.db('tour').collection('user');
    userCollection.find({email: req.query.email , password: req.query.password}).toArray((err,docs)=>{
        if(!err){
            res.send({status:"ok",data:docs});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

app.get('/forgotPassword',(req,res)=>{
    var userCollection = connection.db('tour').collection('user');
    userCollection.find({email: req.query.email}).toArray((err,data)=>{
        if(!err){
            sendMail("myhome052021@gmail.com","trvkjgaggokicrjf", req.query.email, "Forgot Password","<h1>Hi!"+data[0].name+"<br/> Your password is = "+data[0].password+"</h1>");
            res.send({status:"ok",data:"An Email is send to you..."});
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});

function sendMail(from, appPassword, to, subject,  htmlmsg){
    let transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
             user:from,
             pass:appPassword
            }
        });

    let mailOptions={
       from:from ,
       to:to,
       subject:subject,
       html:htmlmsg
    };

    transporter.sendMail(mailOptions ,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log('Email sent:'+info.response);
        }
    });
}

app.listen(3000,()=>{
    console.log("Server is listing at port 3000");
});