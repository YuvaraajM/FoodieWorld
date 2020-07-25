const mongoose = require('mongoose');
//Message Schema:
const msgSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    Email:String,
    Message:String
})

const Message = mongoose.model('Message',msgSchema);

module.exports = Message;