const express = require('express')
const router=express.Router();
const path = require("path")
const IndexController = require('../controllers/indexController');


router.get('/',IndexController.helloNode)

router.get('/html',(req,res)=>{
res.sendFile(path.resolve('index.html'));
})

router.use(function (req,res,next){
    res.status(404).sendFile(path.resolve('404.html'))
})
module.exports = router;