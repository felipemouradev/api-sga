const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enrollmentSchema = new Schema({
  clientId: {type: mongoose.Schema.ObjectId, required: true},
  studentId: {type: mongoose.Schema.ObjectId, required: true},
  courseId: {type: mongoose.Schema.ObjectId, required: true},
  enrollmentDate: {type: Date}
})

module.exports = enrollmentSchema
