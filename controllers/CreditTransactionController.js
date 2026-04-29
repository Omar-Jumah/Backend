const CreditTransaction = require('../models/CreditTransaction');

async function createTransaction(req, res) {
    try {
        await CreditTransaction.create(req.body);
        res.status(200).send("TCreated");
    } catch (err) {
        console.log(err);
        res.status(500).send("error creating");
    }
}

async function updateTransaction(req, res) {
    try {
        await CreditTransaction.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        console.log(updated);
        res.status(200).send("TUpdated");
    } catch (err) {
        console.log( err);
        res.status(500).send("error updating");
    }
}

async function deleteTransaction(req, res) {
    try {
        await CreditTransaction.findByIdAndDelete(req.params.id);
        console.log(req.params.id);
        res.status(200).send("TDeleted");
    } catch (err) {
        console.log(err);
        res.status(500).send("error deleting");
    }
}

module.exports = {
    createTransaction,
    updateTransaction,
    deleteTransaction
};