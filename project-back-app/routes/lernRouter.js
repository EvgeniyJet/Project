const router = new require('express')();
const { getAll } = require('../controllers/lernController');


router.get('/all', getAll);


module.exports = router