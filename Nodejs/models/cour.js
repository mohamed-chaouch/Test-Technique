const mongoose = require('mongoose');

const Cour = mongoose.model('Cour',{
    image:{
        type:String
    },
    titre:{
        type:String
    },
    prix:{
        type:Number
    }
})

module.exports = Cour;