const express = require('express')
const router = express.Router()

const studentController = require('../app/controllers/Student.controller')

router.get('/create',studentController.createPage)

router.get('/:slug/edit',studentController.edit)
router.put('/:slug/edit',studentController.update)
router.delete('/:slug/edit',studentController.delete)
router.get('/showStore',studentController.showStore)
router.post('/create/store',studentController.store)
router.get('/:slug',studentController.show)


module.exports = router;
