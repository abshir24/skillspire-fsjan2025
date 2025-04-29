const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const router = require('./routers/router')

app.use(bodyParser.json())

app.use('/',router)

const port = 8000

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})