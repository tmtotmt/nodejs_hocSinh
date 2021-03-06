const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/Site.controller')

router.get('/admin',siteController.admin)
router.get('/:taolao',siteController.err)
router.get('/',siteController.home)

module.exports = router;
