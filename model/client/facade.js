const Facade = require('../../lib/facade')
const clientSchema = require('./schema')

class ClientFacade extends Facade {}

module.exports = new ClientFacade('Client', clientSchema)
