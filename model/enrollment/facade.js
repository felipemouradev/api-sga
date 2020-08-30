const Facade = require('../../lib/facade')
const enrollmentSchema = require('./schema')
const {ObjectId} = require('mongodb');
const CourseFacade = require('../course/facade');
const StudentFacade = require('../student/facade');
const ClientFacade = require('../client/facade');

class EnrollmentFacade extends Facade {
  courseModel;
  clientModel;
  studentModel;

  constructor(name, schema) {
    super(name, schema);
    this.clientModel = ClientFacade;
    this.courseModel = CourseFacade;
    this.studentModel = StudentFacade;
  }

  async enrollment(enrollment) {
    enrollment.clientId = ObjectId(enrollment.clientId)
    enrollment.studentId = ObjectId(enrollment.studentId)
    enrollment.courseId = ObjectId(enrollment.courseId)
    const checkHasEnroll = await this.findOne({...enrollment})
    const checkHasStudentExists = await this.studentModel.findById(enrollment.studentId)
    const checkHasClientExists = await this.clientModel.findById(enrollment.clientId)
    const checkHasCourseExists = await this.courseModel.findById(enrollment.courseId)
    if (checkHasEnroll) {
      throw new Error("This student has enrolled in this course")
    }
    if (!checkHasClientExists || !checkHasStudentExists || !checkHasCourseExists) {
      throw new Error("Student or Client or Course not exists")
    }
    return await this.create({...enrollment, enrollmentDate: new Date()})
  }
}

module.exports = new EnrollmentFacade('Enrollment', enrollmentSchema)
