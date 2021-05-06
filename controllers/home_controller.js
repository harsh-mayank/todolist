//importing the task schema
const Task = require('../models/task');


//rendering the home screen
module.exports.home = function(req,res){
    Task.find({},function(error,tasks){
        if(error){
            console.log('Error in connecting to the database');
            return;
        }
        return res.render('home',{
            title: 'TODO APP',
            task_list: tasks
        }); 
    });
}


//Create task after the user input
module.exports.createTask = function(req,res){
    Task.create({
        desc: req.body.desc,
        dropdown: req.body.dropdown,
        date: req.body.date,
    },function(error,newTask){
        if(error){
            console.log('Error in creating a Task',error);
            return;
        }
        console.log('*********',newTask);
        return res.redirect('back');
    });
}


//delete the task after the user selects and hit the delete button
module.exports.deleteTask = function(req,res){
    var id = req.query;
    //console.log(Object.keys(id));
    for(let i= 0;i<Object.keys(id).length;i++){
        Task.findByIdAndDelete(Object.keys(id)[i],function(err){
            if(err){
                console.log('Error in Deleting the task');
                return;
            }
        });
    }
    return res.redirect('back');
}
