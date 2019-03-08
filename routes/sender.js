var express = require('express');
var router = express.Router();

var senderController = require('../controllers/sender');

router.get('/create', senderController.create);
//
// router.get('/', post_controller.post_show);


module.exports = router;
