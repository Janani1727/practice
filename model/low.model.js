const mongoose = require('mongoose')

const lowSchema = mongoose.Schema({
     low:String
})

const LowModel = mongoose.model('low', lowSchema)

module.exports = {LowModel}