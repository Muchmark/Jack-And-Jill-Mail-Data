const mongoose = require("mongoose")
let leadScheama = new mongoose.Schema({
    name: String,
    email: String,

})
module.exports = mongoose.model("leaddata", leadScheama)
