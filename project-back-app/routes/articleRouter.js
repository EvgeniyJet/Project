const router = new require('express')();
const { getAll } = require('../controllers/articleController');


router.get('/all', getAll);



module.exports = router