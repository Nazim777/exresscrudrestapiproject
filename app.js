import express from "express";
const app= express()
const port= process.env.port || 5000
import database from './db/dbconnect.js'
import router from './routes/index.js'


//middlewear
app.use(express.json())
//middlewear (req.body)
//app.use(express.urlencoded({extended:false}))
//router
app.use(router)
//database connection
database()


console.log('hello')
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})