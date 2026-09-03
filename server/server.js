const app = require('./src/app');
const config = require('./src/config/environment');

const server = app.listen(config.port, () => {
  console.log(`
======================================================
  SHASHANK GOWDA NB - SYSTEMS ARCHITECTURE API
  Status: ONLINE [Port ${config.port}]
  Environment: ${config.env}
  Gateway: http://localhost:${config.port}
  Health Check: http://localhost:${config.port}/api/health
  Contact Endpoint: http://localhost:${config.port}/api/contact
======================================================
  `);
});

// Graceful Shutdown Handler
function gracefulShutdown(signal) {
  console.info(`\n[SHUTDOWN] Received ${signal}. Terminating HTTP server gracefully...`);
  server.close(() => {
    console.info('[SHUTDOWN] HTTP server closed successfully.');
    process.exit(0);
  });

  // Force shutdown after 10s if hanging
  setTimeout(() => {
    console.error('[SHUTDOWN] Forced process exit: Connections timed out.');
    process.exit(1);
  }, 10000).unref();
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));
