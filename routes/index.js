const express = require('express')
const router = express.Router()
// console.log(conn);
/* GET home page. */
router.get('/', function (_req, res) {
  res.render('index', { title: 'Express' })
})

module.exports = router
