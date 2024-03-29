const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
    organization_id: {
        type: String,
        required: [true, 'Organization ID is required'],
        trim: true,
        minlength: [3, 'Organization ID should be at least 3 characters long'],
        maxlength: [50, 'Organization ID should not exceed 50 characters']
    },
    item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: [true, 'Item ID is required']
    },
    zone: {
        type: String,
        required: [true, 'Zone is required'],
        trim: true,
        minlength: [1, 'Zone should be at least 1 character long'],
        maxlength: [50, 'Zone should not exceed 50 characters']
    },
    base_distance_in_km: {
        type: Number,
        required: [true, 'Base distance in km is required'],
        min: [0, 'Base distance should not be negative']
    },
    km_price: {
        type: Number,
        required: [true, 'Price per km is required'],
        min: [0, 'Price per km should not be negative']
    },
    fix_price: {
        type: Number,
        required: [true, 'Fixed price is required'],
        min: [0, 'Fixed price should not be negative']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Pricing', pricingSchema);
