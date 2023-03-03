const path = require('path')
const fs = require('fs')
const router = require('express').Router();
var uniqid = require('uniqid');


router.get('/notes', (req, res) => {
fs.readFile('db/db.json', 'utf8', (err, data) =>{
   if(err){
    console.log(err)
}
 res.json(JSON.parse(data))   
})

})
router.post('/notes', (req, res) => {
const { title,text } = req.body
const newNote = {
title,
text,
id: uniqid()
}
fs.readFile('db/db.json', 'utf8', (err, data) => {
if(err){
    console.log(err)
}
const parseNotes = JSON.parse(data)
console.log(parseNotes)
parseNotes.push(newNote)
fs.writeFile('db/db.json', JSON.stringify(parseNotes), (err) => {
    if(err){
        console.log(err)

    }
    console.log('Note Saved!')

});

res.json(parseNotes)
})
})




module.exports = router
