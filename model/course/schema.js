const mongoose = require('mongoose')
const Schema = mongoose.Schema
const disciplineSchema = require('../discipline/schema')

const courseSchema = new Schema({
  title: {type: String, required: true},
  disciplines: [
    {_id: {type: mongoose.ObjectId}}
  ],
  price: {type: Number, required: true}
})

module.exports = courseSchema
