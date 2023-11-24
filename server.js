const express = require('express');
const app = express();
app.use(express.static("public"));

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));


//creer la liste

let taskList = [];
//mettre les elems exemple
taskList.push("MANGER 1ere fois");
taskList.push("MAnger ENCOREREE");
taskList.push("Miam manger 3eme fois");

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
    response.render('home.ejs', { taskList : taskList });
})
app.listen(3000, function(){
    console.log("Server ok");
});

//// Page LOgic



