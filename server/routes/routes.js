const Router = require('express')
const router = new Router()
const textController = require('../controllers/textController')

router.post('/textProcessing', textController.textProcessing)

module.exports = router