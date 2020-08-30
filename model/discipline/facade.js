const Facade = require('../../lib/facade')
const disciplineSchema = require('./schema')

class DisciplineFacade extends Facade {}

module.exports = new DisciplineFacade('Discipline', disciplineSchema)
