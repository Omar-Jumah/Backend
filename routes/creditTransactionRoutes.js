const express = require('express');
const router = express.Router();
const CreditTransactionController = require('../controllers/CreditTransactionController');

router.post('/create', CreditTransactionController.createTransaction);
router.put('/update/:id', CreditTransactionController.updateTransaction);
router.delete('/delete/:id', CreditTransactionController.deleteTransaction);

module.exports = router;