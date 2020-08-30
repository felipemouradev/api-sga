const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {personObject} = require('../person/schema')

const studentSchema = new Schema({...personObject})

module.exports = studentSchema
