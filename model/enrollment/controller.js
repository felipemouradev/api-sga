const Controller = require('../../lib/controller')
const enrollmentFacade = require('./facade')

class EnrollmentController extends Controller {
  async enrollment(req, res, next) {
    try {
      const body = {...req.body}
      const enrollment = await enrollmentFacade.enrollment(body)
      res.status(201).json(enrollment)
    } catch (e) {
      res.status(400).json({message: e.message})
    }
  }
}

module.exports = new EnrollmentController(enrollmentFacade)
