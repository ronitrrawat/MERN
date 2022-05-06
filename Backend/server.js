const express = require("express");
const notes = require("./data/notes");

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send("API is running fine");
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((n)=> n._id == req.params.id)
    if(note)
     res.send(note);
    else
    {res.send("ID doesn't exists");}
})

app.listen(5000, console.log(`Server running on ${PORT}`));