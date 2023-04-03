const mongoose = require('mongoose')

const criticalSchema = mongoose.Schema({
     critical:String
})

const CriticalModel = mongoose.model('critical', criticalSchema)

module.exports = {CriticalModel}