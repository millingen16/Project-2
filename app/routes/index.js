const router = require('express').Router();
const bookController = require('../controllers').book;

// Base route
router.get('/', (req, res) => {
	res.status(200).render('home');
});

// Book Router
router.get('/book', bookController.list);
router.get('/book/:id', bookController.getById);
router.post('/book', bookController.add);
router.put('/book/:id', bookController.update);
router.delete('/book/:id', bookController.delete);

module.exports = router;
