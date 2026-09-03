/**
 * Strict Payload Validation Middleware
 * Enforces sanitization and RFC-compliant type and range checks.
 */

function validateContactPayload(req, res, next) {
  const { name, email, message, company, subject, tier } = req.body || {};
  const errors = [];

  // Name validation
  if (!name || typeof name !== 'string') {
    errors.push({ field: 'name', message: 'Name is required and must be a string.' });
  } else {
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 100) {
      errors.push({ field: 'name', message: 'Name must be between 2 and 100 characters.' });
    }
    if (/<[^>]*>/g.test(trimmed)) {
      errors.push({ field: 'name', message: 'HTML tags or script injections are not permitted.' });
    }
  }

  // Email validation (RFC 5322 standard simplified)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!email || typeof email !== 'string') {
    errors.push({ field: 'email', message: 'Email address is required.' });
  } else if (!emailRegex.test(email.trim())) {
    errors.push({ field: 'email', message: 'A valid email address is required.' });
  }

  // Message validation
  if (!message || typeof message !== 'string') {
    errors.push({ field: 'message', message: 'Message content is required.' });
  } else {
    const trimmedMsg = message.trim();
    if (trimmedMsg.length < 10) {
      errors.push({ field: 'message', message: 'Message must be at least 10 characters long to provide sufficient context.' });
    }
    if (trimmedMsg.length > 5000) {
      errors.push({ field: 'message', message: 'Message exceeds maximum allowable length of 5000 characters.' });
    }
  }

  // Optional company validation
  if (company && typeof company === 'string' && company.length > 150) {
    errors.push({ field: 'company', message: 'Company name cannot exceed 150 characters.' });
  }

  // Optional subject validation
  if (subject && typeof subject === 'string' && subject.length > 200) {
    errors.push({ field: 'subject', message: 'Subject cannot exceed 200 characters.' });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      type: 'https://tools.ietf.org/html/rfc7807',
      title: 'Invalid Request Payload',
      status: 400,
      detail: 'One or more fields failed validation checks.',
      errors: errors,
      timestamp: new Date().toISOString()
    });
  }

  next();
}

module.exports = {
  validateContactPayload
};
