const rateLimit = require('express-rate-limit');
const config = require('../config/environment');

const contactRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.contactMax,
  standardHeaders: true, // Return standard RateLimit headers
  legacyHeaders: false,
  message: {
    type: 'https://tools.ietf.org/html/rfc7807',
    title: 'Rate Limit Exceeded',
    status: 429,
    detail: 'Too many requests from this client. Please try again after 15 minutes.',
    timestamp: new Date().toISOString()
  }
});

const globalRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    type: 'https://tools.ietf.org/html/rfc7807',
    title: 'Too Many Requests',
    status: 429,
    detail: 'Global rate limit exceeded.',
    timestamp: new Date().toISOString()
  }
});

module.exports = {
  contactRateLimiter,
  globalRateLimiter
};
