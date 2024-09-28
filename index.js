const express = require('express');            // express is a module which is loaded by the require() method
const path = require('path');                  // the path module is a built-in module in Node.js. which is loaded
const student = require('./routes/student')    //routes--> student which has all routes 
const app = express();                        // express () is  a function in express module
const connection = require('./connection');   // connecting our mongoose database 
connection();                                 // function inside connection

app.use(student);
app.set('view engine','ejs');
app.set('views', path.resolve('./views'));

app.listen(3000,(err) =>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is running on 3000");
    }
})