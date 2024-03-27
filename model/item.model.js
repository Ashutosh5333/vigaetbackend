const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['perishable', 'non-perishable'],
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Item', itemSchema);
