const mongoose = require('mongoose')


var datiSchema = new mongoose.Schema({
    item: {
        type: String,
    }, 
    description:  {
        type: String,
    }, 
    brand: {
        type: String,
    }, 
    price:  {
        type: Number,
    }, 
    stock:  {
        type: Number,
    }, 

});


mongoose.model('datiModel', datiSchema)