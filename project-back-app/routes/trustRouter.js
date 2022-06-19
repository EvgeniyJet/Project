const router = new require('express')();
const { getAll, getOne } = require('../controllers/trustController');


router.get('/all', getAll);
router.get('/one', getOne);


module.exports = router