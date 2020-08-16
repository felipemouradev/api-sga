const Controller = require('../../lib/controller')
const studentFacade = require('./facade')

class StudentController extends Controller {
    enrollment(req, res, next) {
       res.status(201).json(req.body)
    }
}

module.exports = new StudentController(studentFacade)
