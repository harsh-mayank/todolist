//require the library
const mongoose = require('mongoose');

//connect to the database.
// mongoose.connect('mongodb://localhost/todo_db');

mongoAtlasUri = 'mongodb+srv://prasansha:prasansha@cluster0.xjr2n.mongodb.net/todo_list_db?retryWrites=true&w=majority';

try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }


//acquire the connection (to check if connection is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to the database'));

//up and running and print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});