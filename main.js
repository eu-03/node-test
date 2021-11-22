const express = require("express")
require('dotenv').config();
const router = express.Router()

router.get('/', async function (req, res) {
    res.send(process.env.DISPLAY)
})
module.exports = router;