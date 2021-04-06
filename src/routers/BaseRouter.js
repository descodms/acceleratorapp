const express = require('express')
const router = express.Router()
const DirectoryController = require('../controllers/DirectoryController');

router.get('/fullDirectoryListing', (req, res, next) => DirectoryController.getAll(req, res, next))

module.exports = router