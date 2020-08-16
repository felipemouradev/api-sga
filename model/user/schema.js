const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String, required: true },
  secondName: { type: String },
  cpf: { type: String },
})

module.exports = userSchema
