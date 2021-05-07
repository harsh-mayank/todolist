const express = require('express');               //importing express 
const path = require('path');                     //importing path
const port = process.env.PORT || '8000';                                //assigning development server port number

const app = express();                            //creating app using express
app.set("port", port);

const mongoose = require('./config/mongoose');    //importing mongoose from config 

app.set('view engine','ejs');                     //setting up view engine
app.set('views','./views');                       //importing views folder
app.use(express.urlencoded());                    //using urlencoded which is a built-in middleware func
app.use(express.static('./assets'));              //importing the static files

app.use('/',require('./routes'));                 //app using the routes after importing routes folder

app.listen(port,function(err){                    //hosting the app
    if(err){
        console.log('Error in running the server',err);
    }
    console.log('Server running on port',port);
});