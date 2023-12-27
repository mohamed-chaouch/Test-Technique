const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Test")
    .then(
        res=>{
            console.log("Connection avec succès");
        }
    )
    .catch(
        err=>{
            console.log("Echec de connection")
        }
    )

module.exports = mongoose;