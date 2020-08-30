const Controller = require('../../lib/controller')
const clientFacade = require('./facade')

class ClientController extends Controller {}

module.exports = new ClientController(clientFacade)
