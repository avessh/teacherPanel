const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    batch:{
        type:String
    },
    classStartHour:{
        type:Number
    },
    ClassStartMin:{
        type:Number
    },
    classEndHour:{
        type:Number
    },
    classEndMin:{
        type:Number
    },
    ClassFrequency:{
        type:String
    }
})

const classModel = new mongoose.model('class' , classSchema)

module.exports = classModel