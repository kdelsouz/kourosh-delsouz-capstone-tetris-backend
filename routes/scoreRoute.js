const router = require('express').Router();
const scoreController = require('../controllers/scoreController');

router.route('/').get(scoreController.index);

router.route('/').post(scoreController.create);

module.exports = router;
