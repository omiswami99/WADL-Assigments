const mongoose = require("mongoose")

const DB_URI = "mongodb+srv://admin:admin@cluster0.coaj6kc.mongodb.net/assignment3b?retryWrites=true&w=majority"

module.exports = mongoose.connect(DB_URI)  // exporting promise