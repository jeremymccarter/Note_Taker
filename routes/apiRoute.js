const path = require('path')
const fs = require('fs')
const router = require('express').Router();


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
text

}
fs.readFile('db/db.json', 'utf8', (err, data) => {
if(err){
    console.log(err)
}
const parseNotes = json.parse(data)
console.log(parseNotes)
parseNotes.push(newNote)
fs.writeFile('')
})

})




module.exports = router
