const express = require('express');
const app = express();
const path = require('path');


const userRoutes = require("./server/routes/user");
//add routes for each entity


app.use(express.json());

//app.use(express.static(_dirname +"/public"));

//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
    next();
});

app.use("/users",userRoutes);
//app.use(entity)

app.get('*',function (req,res){
    res.sendFile(path.resolve(_dirname,'public','post.html'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));