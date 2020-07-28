const express = require("express");
const router = express.Router();
const catController = require('../controllers/catController')

router.post('/cats', catController.create)
router.get('/cats', catController.getCats)
router.get('/cats/:id', catController.getCat)
router.put('/cats/:id', catController.updateCat)
router.delete('/cats/:id', catController.deleteCat)

module.exports = router
