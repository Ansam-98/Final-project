const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
let schema = mongoose.Schema;


let hotel = new schema ({
    
    HotelName : String,
    Phone : Number,
    Website : String
    
    
})


module.exports =  mongoose.model('Hotel',hotel);