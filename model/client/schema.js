const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {personObject} = require('../person/schema')

const clientSchema = new Schema({
  ...personObject,
  cardCredit: {
    CardNumber: {type: String},
    Holder: {type: String},
    ExpirationDate: {type: String},
    SecurityCode: {type: String},
    Brand: {type: String},
  }
})

module.exports = clientSchema
