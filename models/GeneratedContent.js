const mongoose = require('mongoose');

const generatedContentSchema = new mongoose.Schema({
    ad_text: String,
    description_G: String,
    hashtags: String,
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    created_at: { type: Date, default: Date.now }
});

const GeneratedContent = mongoose.model('GeneratedContent', generatedContentSchema);
module.exports = GeneratedContent;