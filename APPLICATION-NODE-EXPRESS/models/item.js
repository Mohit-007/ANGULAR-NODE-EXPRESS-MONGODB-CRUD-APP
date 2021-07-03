const mongoose = require('mongoose');

// making the schema
const ItemSchema = mongoose.Schema({
    item_name:{
        type: String,
        required: true
    },
    item_price:{
        type: Number,
        required: true
    }
});

// exporting the schema
const Item = module.exports = mongoose.model('Item', ItemSchema)