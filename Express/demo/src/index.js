const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())


app.get("/home",(request,response)=>{
    response.send({"status":[1,2,3,4,5]})
})

app.post("/postrequest",(request,response)=>{
    console.log("POST DATA: ", request.body )
})


const port = 8000

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})