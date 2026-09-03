const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const { validateContactPayload } = require('../middleware/validator.middleware');
const { contactRateLimiter } = require('../middleware/rateLimiter.middleware');

/**
 * @route   POST /api/contact
 * @desc    Submit engineering / architecture advisory inquiry
 * @access  Public (Rate Limited)
 */
router.post('/', contactRateLimiter, validateContactPayload, contactController.submitContact);

module.exports = router;
