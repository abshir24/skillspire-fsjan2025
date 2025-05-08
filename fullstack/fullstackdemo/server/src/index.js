const express = require("express")
const bodyParser = require("body-parser")
const mongoose =  require('mongoose');
const app = express()
const router = require('./routers/router')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.use('/',router)

const port = 8000

const connectionString = "mongodb+srv://abshirtech24:yrdNw2DsHC1mM3YX@cluster0.jcmlqkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString)
.then(()=>{
    console.log("Connect to DB")

    app.listen(port, ()=>{
        console.log(`Server is up on port ${port}`)
    })
}).catch((error)=>{
    console.log(error)
})