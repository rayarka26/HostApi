const mongoose = require('mongoose');

const productschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: [true, "price must be provided"],
    },
    featured:{
        type: Boolean,
        default: false,
    },
    rating:{
        type: Number,
        default: 4.9,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    company:{
        type: String,
        enum:{
            values:["a","b","c","d"],
            message: `not supported`,
        },
    },

});

module.exports = mongoose.model('Product', productschema);