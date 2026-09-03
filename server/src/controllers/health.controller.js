const contactService = require('../services/contact.service');

class HealthController {
  async getHealth(req, res) {
    const memory = process.memoryUsage();
    const metrics = await contactService.getSystemStats();

    res.status(200).json({
      status: 'HEALTHY',
      service: 'Shashank Gowda NB Enterprise Systems Gateway',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      systemMetrics: {
        rssMb: (memory.rss / (1024 * 1024)).toFixed(2),
        heapUsedMb: (memory.heapUsed / (1024 * 1024)).toFixed(2),
        heapTotalMb: (memory.heapTotal / (1024 * 1024)).toFixed(2)
      },
      persistence: {
        status: 'ONLINE',
        engine: metrics.engine,
        recordsProcessed: metrics.total
      },
      architecture: {
        tier: 'Principal Systems Architect (1Cr+ Tier)',
        sla: '99.99%',
        nodeVersion: process.version
      }
    });
  }
}

module.exports = new HealthController();
