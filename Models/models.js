const mongoose = require("mongoose")
let userScheama = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    content: String

})
module.exports = mongoose.model("christmasoffer", userScheama)
