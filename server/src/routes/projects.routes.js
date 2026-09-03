const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects.controller');

/**
 * @route   GET /api/projects
 * @desc    Fetch all projects from Firestore (server-side, secure)
 * @access  Public
 */
router.get('/', projectsController.getProjects);

module.exports = router;
