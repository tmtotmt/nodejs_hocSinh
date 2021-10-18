const express = require('express')
const router = express.Router()

const studentController = require('../app/controllers/Student.controller')

router.get('/create',studentController.createPage)
router.post('/create/store',studentController.store)
router.get('/:slug',studentController.show)


module.exports = router;
