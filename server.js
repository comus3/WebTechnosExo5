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
        let dataBase = {}
        response.status(200);
        dataBase = resultSQL;
        console.log(dataBase);
        response.render('home.ejs', { taskTable: dataBase });
        }
    });
};
  



app.use(express.static('public'));


app.post('/addTask', (request,response)=>{

    if (request.body.task != null){
        //taskList.push(request.body.task);
    }
    getUserData()
})

app.post('/deleteTask', (request,response)=>{

    if (request.body.delete != null){
        //taskList.splice(request.body.delete,1);
    }
    getUserData()
})

app.get('/',(request,response)=>{
    getUserData(response, connection);
})


app.listen(3000, function(){
    console.log("Server ok");
});




