const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['perishable', 'non-perishable'],
        required: [true, 'Item type is required'],
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'Item description is required'],
        trim: true,
        maxlength: [255, 'Description should not exceed 255 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', itemSchema);
