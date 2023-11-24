let express = require('express');
app.use(express.urlencoded({extended:True}))


//creer la liste

let taskList = [];
//mettre les elems exemple
taskList.push("MANGER 1ere fois");
taskList.push("MAnger ENCOREREE");
taskList.push("Miam manger 3eme fois");

let app = express();
app.use(express.static('public'));
app.post('/addTask', (request,response)=>{

    if (request.query.task != null){
        taskList.push(request.query.task);
    }
    if (request.query.delete != null){
        taskList.splice(request.query.delete,1);
    }
    response.render('home.ejs', { taskList : taskList });
})

app.get('')

app.listen(3000, function(){
    console.log("Server ok");
});

//// Page LOgic



