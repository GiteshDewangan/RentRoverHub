const mongoose = require('mongoose')

const houseSchema  = mongoose.Schema({
    address: {
        type: String,
        required: true
      },
      bedrooms: {
        type: Number,
        required: true
      },
      bathrooms: {
        type: Number,
        required: true
      },
      squareFeet: {
        type: Number,
        required: true
      },
      occupants: {
        type: String,
        enum: ['Family', 'Individual', 'Other'],
        required: true
      },
      rent: {
        type: Number,
        required: true
      }
}, {timestamps:true});

// Creating Model

const house = mongoose.model('House', houseSchema)

module.exports = house;