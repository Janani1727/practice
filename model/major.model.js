const mongoose = require('mongoose')

const majorSchema = mongoose.Schema({
     major:String
})

const MajorModel = mongoose.model('major', majorSchema)

module.exports = {MajorModel}