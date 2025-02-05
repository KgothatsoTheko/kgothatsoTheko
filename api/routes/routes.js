const express =require ('express')
const router = express.Router()

const routesController = require('../controllers/routesController.js')

router.get('/', routesController.defaultRoute)

router.post('/send-message', routesController.messageRoute)

module.exports = router