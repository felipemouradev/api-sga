const personObject = {
  name: {type: String, required: true},
  birthDate: {type: Date, required: true},
  documents: {
    cpf: {type: String, required: true},
    rg: {type: String}
  }
}
module.exports = {personObject}