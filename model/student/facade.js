const Facade = require('../../lib/facade')
const studentSchema = require('./schema')

class StudentFacade extends Facade {}

module.exports = new StudentFacade('Student', studentSchema)
