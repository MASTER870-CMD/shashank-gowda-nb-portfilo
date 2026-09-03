/**
 * Contact Repository Interface
 * Currently implements an in-memory/buffered storage model.
 * Architected to seamlessly toggle to PostgreSQL or AWS RDS via pg.Pool
 * without altering any service or controller code.
 */

class ContactRepository {
  constructor() {
    this.submissions = [];
    this.pgPool = null;
    
    // If DATABASE_URL is provided, initialize PostgreSQL pool
    if (process.env.DATABASE_URL) {
      try {
        const { Pool } = require('pg');
        this.pgPool = new Pool({
          connectionString: process.env.DATABASE_URL,
          ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
        });
        console.log('[DB] PostgreSQL pool configured.');
      } catch (err) {
        console.warn('[DB] PostgreSQL driver not loaded or not configured. Defaulting to in-memory store.');
      }
    }
  }

  /**
   * Persist a new contact record
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async create(data) {
    const record = {
      id: `TKT-SYS-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      name: data.name,
      email: data.email,
      company: data.company || 'Confidential / Enterprise',
      tier: data.tier || 'Architecture Advisory',
      subject: data.subject || 'Engineering Engagement',
      message: data.message,
      ip: data.ip || '0.0.0.0',
      userAgent: data.userAgent || 'Unknown',
      createdAt: new Date().toISOString(),
      status: 'RECEIVED'
    };

    if (this.pgPool) {
      const query = `
        INSERT INTO contact_submissions 
        (id, name, email, company, tier, subject, message, ip, created_at, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
      `;
      const values = [
        record.id, record.name, record.email, record.company,
        record.tier, record.subject, record.message, record.ip,
        record.createdAt, record.status
      ];
      const result = await this.pgPool.query(query, values);
      return result.rows[0];
    }

    // Default fast in-memory persistence
    this.submissions.push(record);
    return record;
  }

  /**
   * Retrieve submission count or stats
   */
  async getMetrics() {
    if (this.pgPool) {
      const result = await this.pgPool.query('SELECT COUNT(*) FROM contact_submissions;');
      return { total: parseInt(result.rows[0].count, 10), engine: 'PostgreSQL/RDS' };
    }
    return { total: this.submissions.length, engine: 'High-Performance In-Memory Buffer' };
  }
}

module.exports = new ContactRepository();
