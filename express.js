const express = require('express')

const app = express()
const port=3000;
const routers=require('./router/routes')

const router = require('./router/routes');



app.use(express.static('public'))

app.use('/',routers)

app.listen(port,()=>{
    console.log("Servidor rodando na porta :"+port);
})