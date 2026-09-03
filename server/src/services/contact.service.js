const contactRepository = require('../repositories/contact.repository');

class ContactService {
  /**
   * Process and persist incoming contact submission
   * @param {Object} payload 
   * @param {Object} metadata 
   * @returns {Promise<Object>}
   */
  async handleContactSubmission(payload, metadata = {}) {
    const data = {
      name: payload.name.trim(),
      email: payload.email.trim().toLowerCase(),
      company: payload.company ? payload.company.trim() : null,
      tier: payload.tier || 'Architecture Advisory',
      subject: payload.subject ? payload.subject.trim() : 'Enterprise Inquiry',
      message: payload.message.trim(),
      ip: metadata.ip,
      userAgent: metadata.userAgent
    };

    const savedRecord = await contactRepository.create(data);

    // Telemetry log for systems architecture monitoring
    console.info(`[SYSTEM_TELEMETRY] New contact submission logged: ${savedRecord.id} from ${data.email} (${data.tier})`);

    return {
      referenceId: savedRecord.id,
      timestamp: savedRecord.createdAt,
      status: 'CONFIRMED',
      recipient: 'Shashank Gowda NB (Principal Systems Architect)',
      tier: savedRecord.tier
    };
  }

  /**
   * Fetch system metrics for health telemetry
   */
  async getSystemStats() {
    return await contactRepository.getMetrics();
  }
}

module.exports = new ContactService();
