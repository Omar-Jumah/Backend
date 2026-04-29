const mongoose = require('mongoose');

const creditTransactionSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['add', 'use'], required: true },
    description: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Credit_Transaction', creditTransactionSchema);