const express = require('express');
const router = express.Router();
const sma = require('../controller/SmaController'); 


router.get('/', sma.index);
router.get('/about', sma.about);
router.get('/socialmedia', sma.socialmedia);
router.get('/family', sma.family);
router.get('/contact', sma.contact);

module.exports = router;

