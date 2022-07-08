const express = require('express');
const router = express.Router()
const controller = require('./controller')

console.log("je passe par le router")

router.get('/',controller.homePage)

module.exports = router