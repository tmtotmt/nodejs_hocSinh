const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/Site.controller')

router.get('/',siteController.admin)

module.exports = router;
