const express = require('express')
const app = express()

const {PORT}= require('./config/serverConfig')

const preapareAndStartServer = ()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started`)
    })
}
preapareAndStartServer()