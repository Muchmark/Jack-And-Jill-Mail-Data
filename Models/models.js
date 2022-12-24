const mongoose = require("mongoose")
let userScheama = new mongoose.Schema({

    email: String,
    contact: String,
    relation1: String,
    child_age: String,
    relation2: String,
    shopMethod: String

})
module.exports = mongoose.model("christmasoffer", userScheama)

