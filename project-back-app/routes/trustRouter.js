const router = new require('express')();
const { getAll } = require('../controllers/trustController');


router.get('/all', getAll);



module.exports = router