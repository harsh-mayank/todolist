//importing express
const express = require('express');

//creating a router 
const router = express.Router();

//importing the home controller file
const homeController = require('../controllers/home_controller');

//get requests to host the homepage
router.get('/',homeController.home);

//post request for creating task
router.post('/create-task',homeController.createTask);

//get request to select and delete a task
router.get('/delete-task',homeController.deleteTask);


//exporting the router module
module.exports = router;