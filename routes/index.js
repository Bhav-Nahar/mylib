const express = require('express')
const router = express.Router() //to create a new router object.

router.get('/', (req, res)=>{
    res.render("index")
})

//hook up with server 
module.exports=router