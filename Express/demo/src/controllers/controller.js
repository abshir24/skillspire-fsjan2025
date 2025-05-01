const User = require('../models/User')

const addUser = (request,response) =>{
    const newUser = new User(request.body)

    newUser.save()
        .then((user)=>{
            console.log("The User was added successfully")
            response.json(user)
        })
        .catch((err) => console.log(err))
}

const getAllUsers = async (request,response)=>{
    let allUsers = await User.find() //[<User>, <User>]

    response.json(allUsers)
}

module.exports = {
   addUser,
   getAllUsers
}