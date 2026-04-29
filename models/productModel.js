const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        productName : String,
        description_p : String,
        original_image_url : String,
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

module.exports = mongoose.model('Product', productSchema);