const express = require('express')
const app = express()
const apiRoutes = require('./routes/index')
const bodyParser= require('body-parser')
const {User}= require('./models/index')
const {PORT}= require('./config/serverConfig')
const bcrypt = require('bcrypt')

const preapareAndStartServer = async()=>{
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api',apiRoutes)
    // const password = '12345';
    // const user = await User.findByPk(1)
    
    // console.log(bcrypt.compareSync(password,user.password))
    app.listen(PORT,()=>{
        console.log(`Server Started`)
    })
}
preapareAndStartServer()