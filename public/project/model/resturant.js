const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectID;
let schema = mongoose.Schema;


let resturant = new schema ({
    
    ResturantName : String,
    Features : String,
    Location : String,
    Services : String,
    places:[{type : objectId, ref:"Place"}]
    
})


module.exports =  mongoose.model('Resturant',resturant);
