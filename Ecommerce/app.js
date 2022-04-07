const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public')); 

app.listen(3030, (req, res)=>{
    console.log("levantando el servidor")
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'view/index.html'))
})
