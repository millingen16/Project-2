const Book = require('../models').Book,
	Author = require('../models').Author;

module.exports = {
	list(req, res) {
		return Book.findAll({
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((books) => {
				console.log(JSON.stringify(books));

				res.status(200).render('viewBook', { books });
			})
			.catch((error) => {
				res.status(400).send(error);
			});
	},

	getById(req, res) {
		return Book.findById(req.params.id, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return res.status(404).send({
						message: 'Book Not Found',
					});
				}
				return res.status(200).send(book);
			})
			.catch((error) => res.status(400).send(error));
	},

	add(req, res) {
		return Book.create({
			name: req.body.name,
			volume: req.body.volume,
			description: req.body.description,
			imgURL: req.body.imgURL,
			maxQuantity: req.body.maxQuantity,
			availableQuantity: req.body.availableQuantity,
		})
			.then((book) => res.status(201).send(book))
			.catch((error) => res.status(400).send(error));
	},

	addAuthor(req, res) {
		return Book.findById(req.body.bookId, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return res.status(404).send({
						message: 'Book Not Found',
					});
				}
				Author.findById(req.body.bookId).then((author) => {
					if (!author) {
						return res.status(404).send({
							message: 'Author Not Found',
						});
					}
					book.addAuthor(author);
					return res.status(200).send(book);
				});
			})
			.catch((error) => res.status(400).send(error));
	},
	update(req, res) {
		return Book.findById(req.params.id, {
			include: [
				{
					model: Author,
					as: 'authors',
				},
			],
		})
			.then((book) => {
				if (!book) {
					return res.status(404).send({
						message: 'Book Not Found',
					});
				}
				return book
					.update({
						name: req.body.name,
						volume: req.body.volume,
						description: req.body.description,
						imgURL: req.body.imgURL,
						maxQuantity: req.body.maxQuantity,
						availableQuantity: req.body.availableQuantity,
					})
					.then(() => res.status(200).send(book))
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},

	delete(req, res) {
		return Book.findById(req.params.id)
			.then((book) => {
				if (!book) {
					return res.status(400).send({
						message: 'Book Not Found',
					});
				}
				return book
					.destroy()
					.then(() => res.status(204).send())
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},
};
