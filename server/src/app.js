const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config/environment');
const contactRoutes = require('./routes/contact.routes');
const healthRoutes = require('./routes/health.routes');
const projectsRoutes = require('./routes/projects.routes');
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler.middleware');
const { globalRateLimiter } = require('./middleware/rateLimiter.middleware');

const app = express();

// Trust reverse proxy (e.g. Next.js, Nginx, AWS ALB)
app.set('trust proxy', 1);

// Security Headers with Helmet
app.use(helmet({
  contentSecurityPolicy: false // Handled cleanly at frontend / edge
}));

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://shashankgowdanb.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps, curl, server-to-server)
    if (!origin || allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      callback(new Error('CORS policy violation: Origin not allowed'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Request payload parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Logging
if (config.env !== 'test') {
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
}

// Global rate limiting
app.use(globalRateLimiter);

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/projects', projectsRoutes);

// Catch 404
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
