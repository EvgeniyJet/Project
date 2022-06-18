const router = new require('express')();
const { getAll, getOne } = require('../controllers/authorController');


router.get('/all', getAll);
router.get('/one', getOne);


module.exports = router