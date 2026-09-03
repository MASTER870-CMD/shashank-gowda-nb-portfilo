/**
 * RFC 7807 Compliant Error Handling Middleware
 */

function errorHandler(err, req, res, next) {
  console.error(`[SYSTEM_ERROR] ${err.name || 'Error'}: ${err.message}`, err.stack);

  const status = err.status || err.statusCode || 500;
  const response = {
    type: 'https://tools.ietf.org/html/rfc7807',
    title: err.title || (status === 500 ? 'Internal Server Error' : 'Application Error'),
    status: status,
    detail: process.env.NODE_ENV === 'production' && status === 500 
      ? 'An unexpected error occurred while processing your request. Our systems team has been notified.' 
      : err.message,
    instance: req.originalUrl,
    timestamp: new Date().toISOString()
  };

  if (err.errors) {
    response.errors = err.errors;
  }

  res.status(status).json(response);
}

function notFoundHandler(req, res) {
  res.status(404).json({
    type: 'https://tools.ietf.org/html/rfc7807',
    title: 'Resource Not Found',
    status: 404,
    detail: `The requested endpoint '${req.method} ${req.originalUrl}' does not exist on this server.`,
    timestamp: new Date().toISOString()
  });
}

module.exports = {
  errorHandler,
  notFoundHandler
};
