//import dependencies
const mongoose = require('mongoose')

//equipment is a model
//one to many ( equipment -|---< fish )

const equipmentSchema = new mongoose.Schema({
    rod: {
        type: String,
        required: true
    },
    reel: {
        type: String,
        required: false
    },
    line: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = equipmentSchema