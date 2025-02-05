const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    message: {type: String}
})

module.exports = mongoose.model('messages', messageSchema)