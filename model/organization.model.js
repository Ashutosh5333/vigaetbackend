const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Organization name is required'],
        unique: true,
        trim: true,
        minlength: [3, 'Organization name should be at least 3 characters long'],
        maxlength: [50, 'Organization name should not exceed 50 characters']
    }
});

module.exports = mongoose.model('Organization', organizationSchema);
