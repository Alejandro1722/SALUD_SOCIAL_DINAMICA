const { Router } = require("express");
const router = Router()

const CargaOrdenesController = require('../controllers/CargaOrdenesController')

router 
    .get('/', CargaOrdenesController.iniciarApi)
    .post('/', CargaOrdenesController.enviarOrdenes)

module.exports = router