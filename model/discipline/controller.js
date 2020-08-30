const Controller = require('../../lib/controller')
const disciplineFacade = require('./facade')

class DisciplineController extends Controller {}

module.exports = new DisciplineController(disciplineFacade)
