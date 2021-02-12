const mongoose = require('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let category = new schema ({
    Name : String ,
    no:Number
})

module.exports = mongoose.model ('Category',category)