const Course = require('../model/course')

async function getAllCourses(req, res) {
    const courses = await Course.find().exec();
    res.json(courses)
    //Course.findById().then().catch()
    //Course.findById((error,result)=>{})
}

async function getCourseById(req, res) {
    const { id } = req.params;
    const course = await Course.findById(id)
    if (!course) {
        return res.sendStatus(404);
    }
    return res.json(course)


}
async function updateCourseById(req, res) {
    const { id } = req.params;
    const { name, des } = req.body;
    const course = await Course.findByIdAndUpdate(id, { name, des })
    if (!course) {
        return res.sendStatus(404);
    }
    return res.json(course)
}
async function deleteCourseById(req, res) {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id)
    if (!course) {
        return res.sendStatus(404);
    }
    return res.sendStatus(204)
    // return res.json(course)

}
async function createCourse(req, res) {
    const { code ,name, des } = req.body;
    //验证数据的有效性；
    const course = new Course({ _id:code, name, des })
    await course.save();
    return res.states(201).json(course)

}

module.exports = {
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById,
    createCourse
}