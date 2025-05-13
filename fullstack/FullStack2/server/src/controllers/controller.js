const Course = require('../models/Course')

const getAllCourses = async (request,response) =>{
    let courses = await Course.find()

    response.json(courses)
}

const addCourse = async (request, response) =>{
    let newCourse = new Course(request.body)

    console.log("Request info", request.body)

    newCourse.save()
        .then((course)=>{
            response.send(course)
        })
        .catch((err)=> console.log("Error:", err))
}

const getCourse = async(request,response) =>{
    const id = request.params.id

    let course = await Course.findById(id)
        .then((course)=>{
            response.json(course)
        })
        .catch((err)=>console.log("Error:", err))
}

const deleteCourse = async(request,response) =>{
    const id = request.params.id

    await Course.findByIdAndDelete(id)
        .then((course)=>{
            response.json(course)
        })
        .catch((err)=>console.log("Error:", err))
}

module.exports = {
    getAllCourses,
    addCourse,
    deleteCourse,
    getCourse
}