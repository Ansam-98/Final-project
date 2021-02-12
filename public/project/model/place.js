const mongoose = require('mongoose');

const objectId = mongoose.Schema.Types.ObjectID 

let schema = mongoose.Schema;

let place = new schema ({
    
    name : String , 
    description:String,
    cat : String,
   
    categories: [{ type : objectId , ref:'Category'}]
   
})

module.exports = mongoose.model ('Place',place)