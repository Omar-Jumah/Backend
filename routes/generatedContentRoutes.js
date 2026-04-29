const express = require('express');
const router = express.Router();
const GeneratedContentController = require('../controllers/GeneratedContentController');

router.post('/create', GeneratedContentController.createGeneratedContent);

module.exports = router;