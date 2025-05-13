const express = require('express')
const router = express.Router()
const { getAllCourses,addCourse, getCourse, deleteCourse} = require('../controllers/controller.js')

router.post('/courses', addCourse)
router.get('/courses',getAllCourses)
router.get('/courses/:id', getCourse)
router.delete('/courses/:id', deleteCourse)

module.exports = router