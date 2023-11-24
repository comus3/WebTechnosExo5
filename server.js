const express = require('express');
const app = express();
app.use(express.static("public"));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


//db.js

let connection = require('./db.js');


const getUserData = (response) => {
    connection.query("SELECT * FROM user;", function (error, resultSQL) {
        if (error) {
        response.status(400).send(error);
        } else {
        response.status(200);
        let dataBase = resultSQL;
        console.log(dataBase);
        response.render('home.ejs', { DBData: dataBase });
        }
    });
};
  

//creer la liste

let taskList = [];
//mettre les elems exemple


app.use(express.static('public'));
app.post('/addTask', (request,response)=>{

    if (request.body.task != null){
        taskList.push(request.body.task);
    }
    
    response.render('home.ejs', { taskList : taskList });
})

app.post('/deleteTask', (request,response)=>{

    if (request.body.delete != null){
        taskList.splice(request.body.delete,1);
    }
    
    response.render('home.ejs', { taskList : taskList });
})

app.get('/',(request,response)=>{
    getUserData(response, connection);
    response.render('home.ejs', { taskList : taskList });
})
app.listen(3000, function(){
    console.log("Server ok");
});

//// Page LOgic



