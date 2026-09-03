require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '5000', 10),
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    contactMax: 10 // maximum 10 contact submissions per 15 min per IP
  },
  // Future Database Configuration Hook (PostgreSQL / AWS RDS)
  database: {
    url: process.env.DATABASE_URL || null,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  }
};

module.exports = config;
