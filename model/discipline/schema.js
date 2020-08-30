const mongoose = require('mongoose')
const Schema = mongoose.Schema

const disciplineSchema = new Schema({
  title: {type: String},
  workLoad: {type: Number},
})

module.exports = disciplineSchema
