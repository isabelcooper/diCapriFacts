var express = require('express');
var router = express.Router();

var recipientController = require('../controllers/recipient');

router.get('/create', recipientController.create);
//
// router.get('/', post_controller.post_show);


module.exports = router;
