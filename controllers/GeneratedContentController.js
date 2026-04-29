const GeneratedContent = require('../models/GeneratedContent');

exports.createGeneratedContent = async (req, res) => {
    try {
        const content = await GeneratedContent.create({
            ad_text: req.body.ad_text,
            description_G: req.body.description_G,
            hashtags: req.body.hashtags,
            product_id: req.body.product_id
        });
        res.status(201).json(content);
    } catch (error) {
        res.status(500).json({ message: 'Failed to link content', error: error.message });
    }
};