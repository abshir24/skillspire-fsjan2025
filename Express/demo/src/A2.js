const express = require("express")
const app = express()
const port = 8000

app.get("/",(request,response)=>{
    response.send("<h1>INDEX</h1>")
})

app.get('/display-name', (request,response)=>{
    response.send("<h1>Abshir</h1>")
})

app.get('/display-food', (request,response)=>{
    let img = "https://cdn.jwplayer.com/v2/media/87SkVc26/thumbnails/68gtqAmf.jpg?width=1280"

    response.send(
        `
            <div>
                <h1>Pasta</h1>
                <img src=${img}>
            </div>
        `
    )
})

app.get('/display-vacation', (request,response)=>{
    response.send("<h1>Tulum</h1>")
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})