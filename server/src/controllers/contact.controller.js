const contactService = require('../services/contact.service');

class ContactController {
  /**
   * Handle POST /api/contact
   */
  async submitContact(req, res, next) {
    try {
      const metadata = {
        ip: req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        userAgent: req.get('User-Agent')
      };

      const result = await contactService.handleContactSubmission(req.body, metadata);

      return res.status(201).json({
        success: true,
        message: 'Your engagement request has been securely processed and dispatched to Shashank Gowda NB.',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ContactController();
