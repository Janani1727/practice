const mongoose = require('mongoose')

const mediumSchema = mongoose.Schema({
     medium:String
})

const MediumModel = mongoose.model('medium', mediumSchema)

module.exports = {MediumModel}